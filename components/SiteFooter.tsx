"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/BrandMark";
import { brand } from "@/content/brand";
import { footerCopy, navCopy } from "@/content/siteCopy";
import { localizedBrand } from "@/content/localizedContent";
import { getLocaleFromPathname, localizedPath } from "@/lib/i18n";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = footerCopy[locale];
  const nav = navCopy[locale];
  const brandCopy = localizedBrand[locale];

  return (
    <footer className="border-t border-ink/10 bg-linen/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        {/* Wordmark + short brand line */}
        <div>
          <div className="flex items-center gap-3">
            <BrandMark className="h-12 w-12" />
            <div>
              <p className="cn text-lg">{brand.nameCn}</p>
              <p className="font-serif text-sm uppercase tracking-[0.22em] text-muted">
                {brand.nameEn}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {brandCopy.shortIntro}
          </p>
        </div>

        {/* Simple sitemap */}
        <div>
          <p className="eyebrow mb-3">{copy.site}</p>
          <ul className="space-y-2 text-sm">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link className="quiet-link" href={localizedPath(locale, link.href)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact placeholders; handles can be swapped in content/brand.ts */}
        <div>
          <p className="eyebrow mb-3">{copy.connect}</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="quiet-link" href={`mailto:${brand.email}`}>
                {brand.email}
              </a>
            </li>
            {brand.socials.map((social) => (
              <li key={social.label}>
                {social.href !== "#" ? (
                  <a className="quiet-link" href={social.href}>
                    <span className="font-serif">{social.label}</span>{" "}
                    <span className="text-muted">· {social.handle}</span>
                  </a>
                ) : (
                  <span className="block">
                    <span className="font-serif text-ink">{social.label}</span>{" "}
                    <span className="text-muted">· {social.handle}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {brand.nameCn} · {brand.nameEn}. {copy.handmade}
          </span>
          <span>{brandCopy.location}</span>
        </div>
      </div>
    </footer>
  );
}
