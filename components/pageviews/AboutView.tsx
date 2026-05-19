import Image from "next/image";
import { assetUrl } from "@/lib/assetUrl";
import { localizedPath, type Locale } from "@/lib/i18n";
import BilingualHeading from "@/components/BilingualHeading";
import QuietLink from "@/components/QuietLink";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import {
  StaggerChild,
  StaggerOnView,
} from "@/components/motion/Stagger";
import { localizedBrand, getStory } from "@/content/localizedContent";
import { pageCopy } from "@/content/siteCopy";

const chapterImageSrc = [
  "/images/brand_story_page/grandma.png",
  "/images/brand_story_page/mother.png",
  "/images/brand_story_page/founder.png",
];

export default function AboutView({ locale = "en" }: { locale?: Locale }) {
  const copy = pageCopy[locale].about;
  const story = getStory(locale);
  const englishStory = getStory("en");
  const brandCopy = localizedBrand[locale];
  const isZh = locale === "zh";

  return (
    <>
      <Reveal as="section" className="border-b border-ink/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-12 md:gap-16 md:py-28">
          <div className="flex flex-col justify-center md:col-span-6">
            <BilingualHeading
              as="h1"
              eyebrow={copy.eyebrow}
              cn={isZh ? englishStory.preface : story.prefaceCn}
              en={story.preface}
            >
              {copy.intro}
            </BilingualHeading>
          </div>
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-linen/50 ring-1 ring-ink/[0.07]">
              <Image
                src={assetUrl("/images/brand_story_page/hero.png")}
                alt={copy.heroAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-linen/[0.06]"
              />
            </div>
          </div>
        </div>
      </Reveal>

      {story.chapters.map((chapter, index) => (
        <section
          key={chapter.title}
          className={`border-b border-ink/10 ${
            index % 2 === 1 ? "bg-linen/40" : ""
          }`}
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-18 md:grid-cols-12 md:gap-10 md:py-28">
            <Reveal className="order-1 md:col-span-3">
              <p className="eyebrow mb-3">
                {copy.chapterLabel} {String(index + 1).padStart(2, "0")}
              </p>
              <p className={`${isZh ? "font-serif" : "cn"} text-xl text-muted md:text-2xl`}>
                {isZh ? englishStory.chapters[index].title : chapter.subtitle}
              </p>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl">
                {chapter.title}
              </h2>
            </Reveal>

            <Reveal
              className={`order-2 md:col-span-4 ${
                index === 1 ? "md:order-2" : "md:order-3"
              }`}
              delay={0.08}
            >
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden bg-linen/50 ring-1 ring-ink/[0.07]">
                  <Image
                    src={assetUrl(chapterImageSrc[index])}
                    alt={copy.chapterImages[index].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-linen/[0.05]"
                  />
                </div>
                <figcaption className="eyebrow mt-4 text-muted/70">
                  {copy.chapterImages[index].caption}
                </figcaption>
              </figure>
            </Reveal>

            <Reveal
              className={`order-3 space-y-5 text-base leading-relaxed text-ink/85 md:col-span-5 md:text-lg ${
                index === 1 ? "md:order-3" : "md:order-2"
              }`}
              delay={0.12}
            >
              {chapter.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
        </section>
      ))}

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <SectionLabel>
                {isZh ? "What We Carry Forward" : copy.carryLabel}
              </SectionLabel>
              <p className="mt-6 font-serif text-2xl leading-relaxed md:text-3xl">
                {copy.carryTitle}
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                {brandCopy.mission}
              </p>
            </div>
          </Reveal>

          <StaggerOnView>
            <ul className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {story.pillars.map((pillar) => (
                <StaggerChild
                  key={pillar.title}
                  as="li"
                  className="border-t border-ink/15 pt-6"
                >
                  <h3 className="font-serif text-2xl">{pillar.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {pillar.body}
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
            {isZh ? "Carried by three generations of hands" : copy.outroCn}
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
