/**
 * ResponsiveImage
 *
 * Renders an image with a WebP srcset built from the variants emitted by
 * `scripts/optimize-images.mjs`. The browser picks the smallest variant that
 * still satisfies the `sizes` hint at the current viewport / DPR, so phones
 * download ~50–100 KB versions of pieces that would otherwise be 5–10 MB
 * PNGs.
 *
 * `fill` mirrors the Next/Image API: the image is absolutely positioned to
 * cover its parent (which must itself be `relative` with a fixed aspect
 * ratio). Without `fill`, the image renders inline with intrinsic width and
 * height attributes set from the manifest so the browser can reserve the
 * correct box and avoid layout shift.
 *
 * `priority` images are eagerly loaded with `fetchpriority="high"`. Everything
 * else lazy-loads with `decoding="async"`.
 *
 * If a `src` is missing from the manifest (e.g. someone added a new image
 * without re-running the optimizer), we silently fall through to the
 * original file so the page never breaks — just runs less efficiently.
 */

import { assetUrl } from "@/lib/assetUrl";
import {
  buildSrcSet,
  getImageEntry,
  largestVariant,
} from "@/lib/imageManifest";

type Variant = "card" | "lightbox";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  draggable?: boolean;
  /**
   * `lightbox` skips the small variants and ships only the larger widths so
   * the browser never wastes bandwidth picking a 480w when the image fills
   * the viewport.
   */
  variantSet?: Variant;
  width?: number;
  height?: number;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
  style?: React.CSSProperties;
}

const fillStyles: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
};

export default function ResponsiveImage({
  src,
  alt,
  sizes,
  className = "",
  priority = false,
  fill = false,
  draggable,
  variantSet = "card",
  width,
  height,
  onClick,
  onLoad,
  style,
}: ResponsiveImageProps) {
  const entry = getImageEntry(src);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const loading = priority ? "eager" : "lazy";
  const fetchPriority = priority ? "high" : "auto";

  const mergedStyle: React.CSSProperties | undefined = fill
    ? { ...fillStyles, ...style }
    : style;

  if (!entry) {
    return (
      <img
        src={assetUrl(src)}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        draggable={draggable}
        width={width}
        height={height}
        onClick={onClick}
        onLoad={onLoad}
        style={mergedStyle}
      />
    );
  }

  const variants =
    variantSet === "lightbox"
      ? entry.variants.filter((v) => v.width >= 1080)
      : entry.variants;
  const effectiveVariants = variants.length > 0 ? variants : entry.variants;
  const srcSet = buildSrcSet({ ...entry, variants: effectiveVariants }, baseUrl);
  const fallback = `${baseUrl}${largestVariant({
    ...entry,
    variants: effectiveVariants,
  }).src}`;

  return (
    <img
      src={fallback}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      draggable={draggable}
      width={width ?? entry.width}
      height={height ?? entry.height}
      onClick={onClick}
      onLoad={onLoad}
      style={mergedStyle}
    />
  );
}
