export type Locale = "en" | "zh";

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
};

export const routePaths = ["/", "/about/", "/collection/", "/craft/", "/contact/"];

export function isZhPath(pathname: string) {
  return pathname === "/zh" || pathname.startsWith("/zh/");
}

export function getLocaleFromPathname(pathname: string): Locale {
  return isZhPath(pathname) ? "zh" : "en";
}

export function stripLocale(pathname: string) {
  if (!isZhPath(pathname)) return ensureTrailingSlash(pathname);
  const stripped = pathname.replace(/^\/zh/, "") || "/";
  return ensureTrailingSlash(stripped);
}

export function localizedPath(locale: Locale, path: string) {
  const cleanPath = ensureTrailingSlash(path);
  if (locale === "en") return cleanPath;
  return cleanPath === "/" ? "/zh/" : `/zh${cleanPath}`;
}

export function switchLocalePath(pathname: string, targetLocale: Locale) {
  return localizedPath(targetLocale, stripLocale(pathname));
}

export function ensureTrailingSlash(path: string) {
  if (!path || path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}
