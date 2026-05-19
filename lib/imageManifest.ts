/**
 * Runtime accessors for the image variants produced by
 * `scripts/optimize-images.mjs`.
 *
 * The manifest is generated at build time and committed to disk; importing
 * the JSON keeps everything tree-shakeable and works under static export.
 */

import rawManifest from "./imageManifest.json";

export interface ImageVariant {
  width: number;
  src: string;
}

export interface ImageEntry {
  width: number;
  height: number;
  variants: ImageVariant[];
}

const manifest = rawManifest as Record<string, ImageEntry>;

/** Look up the optimized variants for a given /images/... path. */
export function getImageEntry(src: string): ImageEntry | undefined {
  return manifest[src];
}

/** Build a `srcset` string for an image, with widths in ascending order. */
export function buildSrcSet(entry: ImageEntry, baseUrl = ""): string {
  return entry.variants
    .map((v) => `${baseUrl}${v.src} ${v.width}w`)
    .join(", ");
}

/** Pick the largest variant — used as the `src` fallback and for lightbox. */
export function largestVariant(entry: ImageEntry): ImageVariant {
  return entry.variants[entry.variants.length - 1];
}
