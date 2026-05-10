import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { brand } from "@/content/brand";

export default function SiteFooter() {
  const year = new Date().getFullYear();

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
            {brand.shortIntro.en}
          </p>
        </div>

        {/* Simple sitemap */}
        <div>
          <p className="eyebrow mb-3">Site</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="quiet-link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="quiet-link" href="/about/">
                Brand Story
              </Link>
            </li>
            <li>
              <Link className="quiet-link" href="/collection/">
                Collection
              </Link>
            </li>
            <li>
              <Link className="quiet-link" href="/craft/">
                Craft Heritage
              </Link>
            </li>
            <li>
              <Link className="quiet-link" href="/contact/">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact placeholders; handles can be swapped in content/brand.ts */}
        <div>
          <p className="eyebrow mb-3">Connect</p>
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
            © {year} {brand.nameCn} · {brand.nameEn}. All works made by hand.
          </span>
          <span>{brand.location}</span>
        </div>
      </div>
    </footer>
  );
}
