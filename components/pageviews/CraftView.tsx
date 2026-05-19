import Image from "next/image";
import { assetUrl } from "@/lib/assetUrl";
import { localizedPath, type Locale } from "@/lib/i18n";
import BilingualHeading from "@/components/BilingualHeading";
import QuietLink from "@/components/QuietLink";
import Reveal from "@/components/motion/Reveal";
import {
  StaggerChild,
  StaggerOnView,
} from "@/components/motion/Stagger";
import { getCraftText, getCrafts, motifs } from "@/content/localizedContent";
import { pageCopy } from "@/content/siteCopy";

export default function CraftView({ locale = "en" }: { locale?: Locale }) {
  const copy = pageCopy[locale].craft;
  const crafts = getCrafts();
  const isZh = locale === "zh";

  return (
    <>
      <Reveal as="section" className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <BilingualHeading
              as="h1"
              eyebrow={copy.eyebrow}
              cn={isZh ? "Craft Heritage" : copy.cn}
              en={
                isZh ? (
                  <>
                    四种中国民间手作，
                    <br />
                    安静地展开。
                  </>
                ) : (
                  copy.title
                )
              }
            >
              {copy.intro}
            </BilingualHeading>
          </div>

          <nav
            aria-label={copy.navAria}
            className="mt-12 grid grid-cols-2 gap-8 border-t border-ink/10 pt-10 md:grid-cols-4"
          >
            {crafts.map((craft) => {
              const craftText = getCraftText(craft, locale);
              return (
                <a
                  key={craft.id}
                  href={`#${craft.id}`}
                  className="group flex flex-col gap-1.5 focus-visible:outline-none"
                >
                  <span className="font-serif text-2xl text-muted transition-colors group-hover:text-ink group-focus-visible:text-ink md:text-3xl">
                    {craftText.title}
                  </span>
                  <span className="text-sm leading-snug text-ink/60 transition-colors group-hover:text-ink group-focus-visible:text-ink">
                    {isZh ? craftText.romanized : craft.titleCn}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 block h-px w-5 bg-ink/20 transition-all duration-300 group-hover:w-9 group-hover:bg-ink/50 group-focus-visible:w-9 group-focus-visible:bg-ink/50"
                  />
                </a>
              );
            })}
          </nav>
        </div>
      </Reveal>

      {crafts.map((craft, index) => {
        const craftText = getCraftText(craft, locale);
        return (
          <section
            key={craft.id}
            id={craft.id}
            className={`border-b border-ink/10 ${
              index % 2 === 1 ? "bg-linen/40" : ""
            }`}
          >
            <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-12 md:gap-10 md:py-28">
              <Reveal className="md:col-span-3">
                <p className="eyebrow mb-3">
                  {copy.traditionLabel} {String(index + 1).padStart(2, "0")}
                </p>
                {isZh ? (
                  <p className="font-serif text-sm text-muted">{craftText.romanized}</p>
                ) : (
                  <p className="cn text-2xl text-muted md:text-3xl">
                    {craft.titleCn}
                  </p>
                )}
                <h2 className={`${isZh ? "mt-1" : "mt-2"} font-serif text-3xl md:text-4xl`}>
                  {craftText.title}
                </h2>
                {!isZh ? (
                  <p className="cn mt-1 text-sm text-muted">{craftText.romanized}</p>
                ) : null}
              </Reveal>

              <Reveal
                className={`md:col-span-4 ${index % 2 !== 0 ? "md:order-last" : ""}`}
                delay={0.08}
              >
                <figure>
                  <div className="relative aspect-[4/5] overflow-hidden bg-linen/50 ring-1 ring-ink/[0.07]">
                    <Image
                      src={assetUrl(craft.image)}
                      alt={craftText.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-linen/[0.05]"
                    />
                  </div>
                  <figcaption className="eyebrow mt-4 max-w-xs leading-relaxed text-muted/70">
                    {craftText.caption}
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal
                className="md:col-span-5"
                delay={0.14}
              >
                <p className="font-serif text-xl leading-relaxed text-ink/80 md:text-2xl">
                  {craftText.subtitle}
                </p>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/80 md:text-lg">
                  {craftText.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="border-b border-ink/10 bg-linen/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <div className="mb-12 max-w-lg">
              <p className="eyebrow mb-4">{copy.motifsLabel}</p>
              <p className="font-serif text-2xl leading-snug md:text-3xl">
                {copy.motifsTitle}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                {copy.motifsIntro}
              </p>
            </div>
          </Reveal>

          <StaggerOnView>
            <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8">
              {motifs.map((motif) => (
                <StaggerChild key={motif.en} as="li">
                  <div className="relative aspect-square overflow-hidden bg-linen/50 ring-1 ring-ink/[0.07]">
                    <Image
                      src={assetUrl(motif.src)}
                      alt={motif.imageAlt[locale]}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-linen/[0.05]"
                    />
                  </div>
                  <p className="cn mt-3 text-xl text-muted">{motif.cn}</p>
                  <p className="mt-0.5 font-serif text-base">
                    {motif.en}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {motif.meaning[locale]}
                  </p>
                </StaggerChild>
              ))}
            </ul>
          </StaggerOnView>
        </div>
      </section>

      <Reveal as="section">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <p className={`${isZh ? "font-serif" : "cn"} text-base text-muted md:text-lg`}>
            {isZh ? "Through the hand, meaning is carried" : copy.outroCn}
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-snug md:text-4xl">
            {copy.outroTitle}
          </h2>
          <div className="mt-8">
            <QuietLink href={localizedPath(locale, "/collection/")}>
              {copy.outroCta}
            </QuietLink>
          </div>
        </div>
      </Reveal>
    </>
  );
}
