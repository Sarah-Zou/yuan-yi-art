"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/BrandMark";
import { brand } from "@/content/brand";
import { navCopy } from "@/content/siteCopy";
import {
  getLocaleFromPathname,
  localizedPath,
  stripLocale,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n";

export default function SiteHeader() {
  // Track whether the page has been scrolled far enough that the header
  // should shift to its denser "on scroll" state. Threshold is small so
  // the change feels responsive but never jittery.
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = navCopy[locale];
  const currentPath = stripLocale(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-[600ms] ease-[cubic-bezier(0.2,0.64,0.28,1)] ${
        scrolled
          ? "border-b border-ink/15 bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_rgba(31,26,23,0.03)]"
          : "border-b border-ink/5 bg-ivory/85 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between md:py-8">
        {/* Wordmark: bilingual, restrained, serif-led. */}
        <Link
          href={localizedPath(locale, "/")}
          className="group flex items-center gap-3 leading-tight text-ink no-underline"
          aria-label={`${brand.nameCn} ${brand.nameEn} ${copy.homeAria}`}
        >
          <BrandMark
            priority
            className="h-12 w-12 transition-transform duration-500 group-hover:scale-[1.03] md:h-14 md:w-14"
          />
          <span className="flex flex-col">
            <span className="cn text-lg md:text-xl">{brand.nameCn}</span>
            <span className="font-serif text-sm tracking-[0.22em] uppercase text-muted transition-colors duration-500 group-hover:text-ink">
              {brand.nameEn}
            </span>
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-8">
          <nav aria-label={copy.ariaLabel}>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted md:gap-x-8">
              {copy.links.map((link) => {
                const isCurrent = link.href === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={localizedPath(locale, link.href)}
                      className="quiet-link"
                      aria-current={isCurrent ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <LanguageSwitcher pathname={pathname} locale={locale} />
        </div>
      </div>
    </header>
  );
}

function LanguageSwitcher({
  pathname,
  locale,
}: {
  pathname: string;
  locale: Locale;
}) {
  return (
    <nav
      aria-label={locale === "zh" ? "语言切换" : "Language"}
      className="flex items-center gap-2 text-xs tracking-[0.18em] text-muted"
    >
      <Link
        href={switchLocalePath(pathname, "en")}
        aria-current={locale === "en" ? "true" : undefined}
        className={`pb-0.5 transition-colors hover:text-ink focus-visible:text-ink ${
          locale === "en" ? "text-ink" : "text-muted"
        }`}
      >
        EN
      </Link>
      <span aria-hidden="true" className="text-ink/25">
        |
      </span>
      <Link
        href={switchLocalePath(pathname, "zh")}
        aria-current={locale === "zh" ? "true" : undefined}
        className={`pb-0.5 transition-colors hover:text-ink focus-visible:text-ink ${
          locale === "zh" ? "text-ink" : "text-muted"
        }`}
      >
        中文
      </Link>
    </nav>
  );
}
