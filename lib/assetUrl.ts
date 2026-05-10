/**
 * Prefix public asset paths when the site is built with BASE_PATH (e.g. GitHub Pages project sites).
 */
export function assetUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
