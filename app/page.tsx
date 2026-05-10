import Link from "next/link";
import Image from "next/image";
import { assetUrl } from "@/lib/assetUrl";
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
import { brand, story } from "@/content/brand";
import { crafts } from "@/content/crafts";
import { featuredSlugs, works } from "@/content/works";

// Resolve the featured works once at build time.
const featuredWorks = featuredSlugs
  .map((slug) => works.find((w) => w.slug === slug))
  .filter((w): w is NonNullable<typeof w> => Boolean(w));

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------
          Hero — editorial craft photograph, brand statement, two CTAs.
          Text left, image right. Staggered entrance; gentle parallax.
          --------------------------------------------------------------- */}
      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-16 md:grid-cols-12 md:gap-16 md:pb-32 md:pt-24">

          {/* Left: brand statement + CTAs */}
          <StaggerOnLoad className="flex flex-col justify-center md:col-span-6">
            <StaggerChild>
              <p className="eyebrow mb-6">A contemporary cultural brand</p>
            </StaggerChild>
            <StaggerChild>
              <h1 className="font-serif text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
                {brand.tagline.en}
              </h1>
            </StaggerChild>
            <StaggerChild>
              <p className="cn mt-5 text-lg text-muted md:text-xl">
                {brand.tagline.cn}
              </p>
            </StaggerChild>
            <StaggerChild>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
                Embroidered sachets, silk-wrapped florals, folk shoes, and
                textile traditions — presented as a quiet exhibition, not a
                shop.
              </p>
            </StaggerChild>
            <StaggerChild>
              {/* Primary CTA first (story), secondary CTA second (works) */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
                <QuietLink href="/about/">Read the story</QuietLink>
                <QuietLink href="/collection/">View selected works</QuietLink>
              </div>
            </StaggerChild>
          </StaggerOnLoad>

          {/* Right: editorial craft photograph with quiet linen frame */}
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
                    alt="Hands working with thread and cloth — Yuan-Yi Art"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Very subtle warm veil so the image sits with the palette */}
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

      {/* ---------------------------------------------------------------
          Brief introduction — more functional than emotional.
          Emotion lives in the Brand Story section below.
          --------------------------------------------------------------- */}
      <Reveal as="section" className="border-b border-ink/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <SectionLabel>Introduction</SectionLabel>
          </div>
          <div className="md:col-span-8">
            <p className="cn text-base text-muted md:text-lg">
              {brand.shortIntro.cn}
            </p>
            <p className="mt-5 font-serif text-2xl leading-relaxed md:text-3xl">
              {brand.shortIntro.en}
            </p>
          </div>
        </div>
      </Reveal>

      {/* ---------------------------------------------------------------
          Story teaser — the emotional and generational heart of the brand.
          Two sentences from the grandmother chapter, linking to About.
          --------------------------------------------------------------- */}
      <section className="border-b border-ink/10 bg-linen/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-12 md:gap-16 md:py-32">
          <Reveal className="md:col-span-5">
            <BilingualHeading
              eyebrow="Brand Story"
              cn={story.preface.cn}
              en={story.preface.en}
            />
          </Reveal>
          <Reveal
            className="md:col-span-7 space-y-5 text-base leading-relaxed text-muted md:text-lg"
            delay={0.12}
          >
            <p>{story.chapters[0].body[0]}</p>
            <p>{story.chapters[0].body[2]}</p>
            <div className="pt-4">
              <QuietLink href="/about/">Read the full story</QuietLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Selected works preview — 2 columns on homepage, no materials note.
          Kept compact so the page feels like an invitation, not a catalog.
          --------------------------------------------------------------- */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
              <BilingualHeading
                eyebrow="Selected Works"
                cn="精选手作"
                en="A small exhibition of pieces made by hand."
              />
              <Link
                href="/collection/"
                className="quiet-link self-start text-sm md:self-end"
              >
                View all pieces →
              </Link>
            </div>
          </Reveal>
          <StaggerOnView className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2">
            {featuredWorks.slice(0, 2).map((work) => (
              <StaggerChild key={work.slug}>
                <WorkCard work={work} compact />
              </StaggerChild>
            ))}
          </StaggerOnView>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Craft heritage — four traditions introduced at a glance.
          --------------------------------------------------------------- */}
      <section className="border-b border-ink/10 bg-linen/40">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <div className="mb-12 max-w-2xl md:mb-16">
              <BilingualHeading
                eyebrow="Craft Heritage"
                cn="手艺与传承"
                en="Four quiet traditions, carried forward by hand."
              >
                Each piece at Yuan-Yi Art belongs to a lineage of makers. These
                are the four forms we honour most closely.
              </BilingualHeading>
            </div>
          </Reveal>

          <StaggerOnView>
            <ul className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {crafts.map((craft) => (
                <StaggerChild
                  key={craft.id}
                  as="li"
                  className="border-t border-ink/15 pt-6"
                >
                  <p className="cn text-sm text-muted">{craft.titleCn}</p>
                  <h3 className="mt-1 font-serif text-2xl md:text-3xl">
                    {craft.titleEn}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {craft.subtitle}
                  </p>
                </StaggerChild>
              ))}
            </ul>
          </StaggerOnView>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <QuietLink href="/craft/">Explore the traditions</QuietLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Contact invitation — quiet, centred, no form.
          --------------------------------------------------------------- */}
      <Reveal as="section">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <SectionLabel>Stay in touch</SectionLabel>
          <h2 className="mt-6 font-serif text-3xl leading-snug md:text-4xl">
            For collaborations, studio visits, and quiet correspondence.
          </h2>
          <p className="cn mt-4 text-base text-muted md:text-lg">
            欢迎来信,诚挚相候。
          </p>
          <div className="mt-8">
            <QuietLink href="/contact/">Contact the studio</QuietLink>
          </div>
        </div>
      </Reveal>
    </>
  );
}
