"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BrandMark from "@/components/BrandMark";
import { brand } from "@/content/brand";

// Navigation links; order mirrors the site's narrative flow.
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "Brand Story" },
  { href: "/collection/", label: "Collection" },
  { href: "/craft/", label: "Craft Heritage" },
  { href: "/contact/", label: "Contact" },
];

export default function SiteHeader() {
  // Track whether the page has been scrolled far enough that the header
  // should shift to its denser "on scroll" state. Threshold is small so
  // the change feels responsive but never jittery.
  const [scrolled, setScrolled] = useState(false);

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
          href="/"
          className="group flex items-center gap-3 leading-tight text-ink no-underline"
          aria-label={`${brand.nameCn} ${brand.nameEn} home`}
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

        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted md:gap-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="quiet-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
