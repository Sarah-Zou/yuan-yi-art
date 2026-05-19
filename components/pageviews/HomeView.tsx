import Link from "next/link";
import Image from "next/image";
import { assetUrl } from "@/lib/assetUrl";
import { localizedPath, type Locale } from "@/lib/i18n";
import BilingualHeading from "@/components/BilingualHeading";
import QuietLink from "@/components/QuietLink";
import SectionLabel from "@/components/SectionLabel";
import WorkCard from "@/components/WorkCard";
import Parallax from "@/components/motion/Parallax";
import Reveal from "@/components/motion/Reveal";
import {
  StaggerChild,
  StaggerOnLoad,
  StaggerOnView,
} from "@/components/motion/Stagger";
import { brand } from "@/content/brand";
import { getCraftText, getCrafts, getStory, getWorks } from "@/content/localizedContent";
import { pageCopy } from "@/content/siteCopy";
import { featuredSlugs } from "@/content/works";

const allWorks = getWorks();
const featuredWorks = featuredSlugs
  .map((slug) => allWorks.find((w) => w.slug === slug))
  .filter((w): w is NonNullable<typeof w> => Boolean(w));

export default function HomeView({ locale = "en" }: { locale?: Locale }) {
  const copy = pageCopy[locale].home;
  const localizedStory = getStory(locale);
  const englishStory = getStory("en");
  const crafts = getCrafts();
  const isZh = locale === "zh";

  return (
    <>
      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-16 md:grid-cols-12 md:gap-16 md:pb-32 md:pt-24">
          <StaggerOnLoad className="flex flex-col justify-center md:col-span-6">
            <StaggerChild>
              <p className="eyebrow mb-6">{copy.eyebrow}</p>
            </StaggerChild>
            <StaggerChild>
              <h1 className="font-serif text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
                {isZh ? (
                  <>
                    承三代之手,
                    <br />
                    叙东方之美
                  </>
                ) : (
                  brand.tagline.en
                )}
              </h1>
            </StaggerChild>
            <StaggerChild>
              <p className={`${isZh ? "font-serif" : "cn"} mt-5 text-lg text-muted md:text-xl`}>
                {isZh ? brand.tagline.en : brand.tagline.cn}
              </p>
            </StaggerChild>
            <StaggerChild>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
                {copy.heroText}
              </p>
            </StaggerChild>
            <StaggerChild>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
                <QuietLink href={localizedPath(locale, "/about/")}>
                  {copy.primaryCta}
                </QuietLink>
                <QuietLink href={localizedPath(locale, "/collection/")}>
                  {copy.secondaryCta}
                </QuietLink>
              </div>
            </StaggerChild>
          </StaggerOnLoad>

          <StaggerOnLoad
            className="md:col-span-6"
            delay={0.3}
            stagger={0}
          >
            <StaggerChild>
              <Parallax strength={10}>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-linen/50 ring-1 ring-ink/[0.07]">
                  <Image
                    src={assetUrl("/images/brand/hero.png")}
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
              </Parallax>
            </StaggerChild>
          </StaggerOnLoad>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-linen/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-12 md:gap-16 md:py-32">
          <Reveal className="md:col-span-5">
            <BilingualHeading
              eyebrow={copy.storyEyebrow}
              cn={isZh ? englishStory.preface : localizedStory.prefaceCn}
              en={localizedStory.preface}
            />
          </Reveal>
          <Reveal
            className="md:col-span-7 space-y-5 text-base leading-relaxed text-muted md:text-lg"
            delay={0.12}
          >
            <p>{localizedStory.chapters[0].body[0]}</p>
            <p>{localizedStory.chapters[0].body[2]}</p>
            <div className="pt-4">
              <QuietLink href={localizedPath(locale, "/about/")}>
                {copy.storyCta}
              </QuietLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
              <BilingualHeading
                eyebrow={copy.worksEyebrow}
                cn={isZh ? "Selected Works" : copy.worksCn}
                en={copy.worksTitle}
              />
              <Link
                href={localizedPath(locale, "/collection/")}
                className="quiet-link self-start text-sm md:self-end"
              >
                {copy.viewAll} →
              </Link>
            </div>
          </Reveal>
          <StaggerOnView className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2">
            {featuredWorks.map((work) => (
              <StaggerChild key={work.slug}>
                <WorkCard work={work} compact locale={locale} />
              </StaggerChild>
            ))}
          </StaggerOnView>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-linen/40">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <div className="mb-12 max-w-2xl md:mb-16">
              <BilingualHeading
                eyebrow={copy.craftEyebrow}
                cn={isZh ? "Craft Heritage" : copy.craftCn}
                en={copy.craftTitle}
              >
                {copy.craftIntro}
              </BilingualHeading>
            </div>
          </Reveal>

          <StaggerOnView>
            <ul className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {crafts.map((craft) => {
                const craftText = getCraftText(craft, locale);
                return (
                  <StaggerChild
                    key={craft.id}
                    as="li"
                    className="border-t border-ink/15 pt-6"
                  >
                    <p className={`${isZh ? "font-serif" : "cn"} text-sm text-muted`}>
                      {isZh ? craftText.romanized : craft.titleCn}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl md:text-3xl">
                      {craftText.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {craftText.subtitle}
                    </p>
                  </StaggerChild>
                );
              })}
            </ul>
          </StaggerOnView>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <QuietLink href={localizedPath(locale, "/craft/")}>
                {copy.craftCta}
              </QuietLink>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal as="section">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <SectionLabel>{isZh ? "Stay in touch" : copy.contactLabel}</SectionLabel>
          <h2 className="mt-6 font-serif text-3xl leading-snug md:text-4xl">
            {copy.contactTitle}
          </h2>
          <p className="cn mt-4 text-base text-muted md:text-lg">
            {copy.contactCn}
          </p>
          <div className="mt-8">
            <QuietLink href={localizedPath(locale, "/contact/")}>
              {copy.contactCta}
            </QuietLink>
          </div>
        </div>
      </Reveal>
    </>
  );
}
