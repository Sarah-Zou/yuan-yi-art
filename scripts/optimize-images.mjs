#!/usr/bin/env node
/**
 * Build-time image optimizer.
 *
 * Walks every raster image under `public/images/` and emits resized WebP
 * variants into `public/images-optimized/<same relative path>/<name>-<width>.webp`
 * for a fixed set of widths. Also writes `lib/imageManifest.json` describing
 * every source image (its original dimensions and the variants we produced),
 * which the runtime ResponsiveImage component reads to build srcsets.
 *
 * Why this exists: the site is deployed as a static export (`output: "export"`)
 * with `images.unoptimized: true`, so Next never produces responsive variants.
 * Many source PNGs are 5–10 MB at 2000+ px wide; phones were downloading the
 * full desktop assets. WebP at q≈78 typically lands 80–95% smaller with no
 * perceptible quality loss for the photographic / illustrative art on this
 * site.
 *
 * The script is incremental — if a variant on disk is newer than its source,
 * it's left alone. Safe to run on every `npm run build`.
 */

import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, extname, join, posix, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = dirname(__dirname);

const SOURCE_DIR = join(ROOT, "public", "images");
const OUTPUT_DIR = join(ROOT, "public", "images-optimized");
const MANIFEST_PATH = join(ROOT, "lib", "imageManifest.json");

const WIDTHS = [480, 768, 1080, 1440, 1920];
const WEBP_QUALITY = 78;
const SUPPORTED = new Set([".png", ".jpg", ".jpeg", ".webp"]);

const toPosix = (p) => p.split(sep).join(posix.sep);

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (entry.isFile()) {
      yield full;
    }
  }
}

async function ensureDir(path) {
  await mkdir(path, { recursive: true });
}

async function fileMtime(path) {
  try {
    const s = await stat(path);
    return s.mtimeMs;
  } catch {
    return 0;
  }
}

async function processImage(sourcePath) {
  const relSource = toPosix(relative(SOURCE_DIR, sourcePath));
  const ext = extname(relSource).toLowerCase();
  const stem = relSource.slice(0, relSource.length - ext.length);
  const sourceMtime = await fileMtime(sourcePath);

  const meta = await sharp(sourcePath).metadata();
  const originalWidth = meta.width ?? 0;
  const originalHeight = meta.height ?? 0;

  if (!originalWidth || !originalHeight) {
    return null;
  }

  const targetWidths = Array.from(
    new Set(
      WIDTHS.filter((w) => w < originalWidth).concat(
        Math.min(originalWidth, WIDTHS[WIDTHS.length - 1]),
      ),
    ),
  ).sort((a, b) => a - b);

  const variants = [];
  for (const width of targetWidths) {
    const outRel = `${stem}-${width}.webp`;
    const outPath = join(OUTPUT_DIR, outRel);
    const outMtime = await fileMtime(outPath);

    if (outMtime < sourceMtime || !existsSync(outPath)) {
      await ensureDir(dirname(outPath));
      await sharp(sourcePath)
        .rotate()
        .resize({ width, withoutEnlargement: true, fit: "inside" })
        .webp({ quality: WEBP_QUALITY, effort: 5 })
        .toFile(outPath);
    }

    variants.push({
      width,
      src: `/images-optimized/${outRel}`,
    });
  }

  return {
    key: `/images/${relSource}`,
    width: originalWidth,
    height: originalHeight,
    variants,
  };
}

async function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.warn(`[optimize-images] source dir missing: ${SOURCE_DIR}`);
    return;
  }

  const sources = [];
  for await (const file of walk(SOURCE_DIR)) {
    if (SUPPORTED.has(extname(file).toLowerCase())) {
      sources.push(file);
    }
  }

  console.log(
    `[optimize-images] scanning ${sources.length} source images → ${OUTPUT_DIR}`,
  );

  const manifest = {};
  let savings = 0;
  let total = 0;
  let processed = 0;

  for (const source of sources) {
    const result = await processImage(source);
    if (!result) continue;
    manifest[result.key] = {
      width: result.width,
      height: result.height,
      variants: result.variants,
    };

    const sourceSize = (await stat(source)).size;
    total += sourceSize;
    for (const v of result.variants) {
      const variantPath = join(ROOT, "public", v.src.replace(/^\//, ""));
      if (existsSync(variantPath)) {
        const s = await stat(variantPath);
        if (v.width === Math.max(...result.variants.map((x) => x.width))) {
          savings += sourceSize - s.size;
        }
      }
    }
    processed += 1;
    if (processed % 10 === 0) {
      console.log(`[optimize-images]   ${processed}/${sources.length}`);
    }
  }

  await ensureDir(dirname(MANIFEST_PATH));

  // Stable-sort keys so the manifest diff stays small between builds.
  const sortedManifest = Object.fromEntries(
    Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)),
  );

  const json = JSON.stringify(sortedManifest, null, 2);
  const hash = createHash("sha1").update(json).digest("hex").slice(0, 8);

  await writeFile(MANIFEST_PATH, `${json}\n`, "utf8");

  console.log(
    `[optimize-images] wrote manifest (${
      Object.keys(sortedManifest).length
    } entries, sha1=${hash})`,
  );
  if (total > 0) {
    const pct = ((savings / total) * 100).toFixed(1);
    const mb = (savings / 1024 / 1024).toFixed(1);
    console.log(
      `[optimize-images] approx savings on largest variant vs. source: ${mb} MB (${pct}%)`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
