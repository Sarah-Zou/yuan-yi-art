import type { Metadata } from "next";
import Image from "next/image";
import { assetUrl } from "@/lib/assetUrl";
import BilingualHeading from "@/components/BilingualHeading";
import QuietLink from "@/components/QuietLink";
import Reveal from "@/components/motion/Reveal";
import {
  StaggerChild,
  StaggerOnView,
} from "@/components/motion/Stagger";
import { crafts } from "@/content/crafts";

export const metadata: Metadata = {
  title: "Craft Heritage",
  description:
    "An introduction to four Chinese handmade traditions: herbal sachets (香包), silk-wrapped florals (缠花), embroidered children's shoes (童趣绣鞋), and embroidered insoles (绣花鞋垫).",
};

// Six craft-detail images used in the common motifs grid.
const motifs = [
  {
    src: "/images/collection_page/tongxie/tiger/tiger_detail2.png",
    cn: "虎",
    label: "Tiger",
    meaning: "Strength and protection",
  },
  {
    src: "/images/collection_page/chanhua/baijian/pink.png",
    cn: "兰",
    label: "Orchid",
    meaning: "Purity and grace",
  },
  {
    src: "/images/collection_page/chanhua/fashi/red.png",
    cn: "梅",
    label: "Plum blossom",
    meaning: "Resilience in cold",
  },
  {
    src: "/images/collection_page/xiedian/phenix/phenix_detail1.png",
    cn: "凤",
    label: "Phoenix",
    meaning: "Renewal and elegance",
  },
  {
    src: "/images/collection_page/xiangbao/C/details.png",
    cn: "莲",
    label: "Lotus",
    meaning: "Clarity rising from the everyday",
  },
  {
    src: "/images/collection_page/xiedian/swallow/swallow_pink_detail3.png",
    cn: "燕",
    label: "Swallow",
    meaning: "Return and fidelity",
  },
];

export default function CraftPage() {
  return (
    <>
      {/* ---------------------------------------------------------------
          Page header + craft index.
          The index gives readers a quick orientation and anchors each
          section so visitors can jump directly to a tradition.
          --------------------------------------------------------------- */}
      <Reveal as="section" className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <BilingualHeading
              as="h1"
              eyebrow="Craft Heritage"
              cn="手艺与传承"
              en="Four Chinese handmade traditions, gently introduced."
            >
              These are the forms we return to most often — each one made in
              Chinese households for generations, and each continuing to carry
              quiet meaning today.
            </BilingualHeading>
          </div>

          {/* Craft index — quick navigation, four anchor links */}
          <nav
            aria-label="Jump to a craft tradition"
            className="mt-12 grid grid-cols-2 gap-8 border-t border-ink/10 pt-10 md:grid-cols-4"
          >
            {crafts.map((craft) => (
              <a
                key={craft.id}
                href={`#${craft.id}`}
                className="group flex flex-col gap-1.5"
              >
                <span className="cn text-2xl text-muted transition-colors group-hover:text-ink md:text-3xl">
                  {craft.titleCn}
                </span>
                <span className="text-sm leading-snug text-ink/60 transition-colors group-hover:text-ink">
                  {craft.titleEn.split(" · ")[1]}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-1 block h-px w-5 bg-ink/20 transition-all duration-300 group-hover:w-9 group-hover:bg-ink/50"
                />
              </a>
            ))}
          </nav>
        </div>
      </Reveal>

      {/* ---------------------------------------------------------------
          One section per craft tradition.
          Three columns: label (3) · image (4) · text (5).
          Image alternates left/right every other section so the eye
          doesn't get locked into a single reading pattern.
          --------------------------------------------------------------- */}
      {crafts.map((craft, index) => (
        <section
          key={craft.id}
          id={craft.id}
          className={`border-b border-ink/10 ${
            index % 2 === 1 ? "bg-linen/40" : ""
          }`}
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-12 md:gap-10 md:py-28">

            {/* Label column — always leftmost on desktop */}
            <Reveal className="md:col-span-3">
              <p className="eyebrow mb-3">
                Tradition {String(index + 1).padStart(2, "0")}
              </p>
              <p className="cn text-2xl text-muted md:text-3xl">
                {craft.titleCn}
              </p>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl">
                {craft.titleEn.split(" · ")[1]}
              </h2>
              <p className="cn mt-1 text-sm text-muted">{craft.titleEn.split(" · ")[0]}</p>
            </Reveal>

            {/* Image — alternates between middle and far-right position */}
            <Reveal
              className={`md:col-span-4 ${index % 2 !== 0 ? "md:order-last" : ""}`}
              delay={0.08}
            >
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden bg-linen/50 ring-1 ring-ink/[0.07]">
                  <Image
                    src={assetUrl(craft.image)}
                    alt={craft.imageAlt}
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
                  {craft.caption}
                </figcaption>
              </figure>
            </Reveal>

            {/* Text — subtitle as large serif intro, then paragraphs */}
            <Reveal
              className="md:col-span-5"
              delay={0.14}
            >
              <p className="font-serif text-xl leading-relaxed text-ink/80 md:text-2xl">
                {craft.subtitle}
              </p>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/80 md:text-lg">
                {craft.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* ---------------------------------------------------------------
          Common motifs — a 6-image grid that makes the symbolism
          visible and scannable without becoming a footnote or glossary.
          --------------------------------------------------------------- */}
      <section className="border-b border-ink/10 bg-linen/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <div className="mb-12 max-w-lg">
              <p className="eyebrow mb-4">Common Motifs</p>
              <p className="font-serif text-2xl leading-snug md:text-3xl">
                Each symbol carries an intention.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                Tiger, orchid, plum, phoenix, lotus, swallow — the motifs in these works are
                not merely decorative. Each one is a small wish, a quiet
                protection, or a whispered blessing sewn into the cloth.
              </p>
            </div>
          </Reveal>

          <StaggerOnView>
            <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8">
              {motifs.map((motif) => (
                <StaggerChild key={motif.label} as="li">
                  <div className="relative aspect-square overflow-hidden bg-linen/50 ring-1 ring-ink/[0.07]">
                    <Image
                      src={assetUrl(motif.src)}
                      alt={motif.label}
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
                  <p className="mt-0.5 font-serif text-base">{motif.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {motif.meaning}
                  </p>
                </StaggerChild>
              ))}
            </ul>
          </StaggerOnView>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Closing invitation to the collection.
          --------------------------------------------------------------- */}
      <Reveal as="section">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <p className="cn text-base text-muted md:text-lg">以手传情</p>
          <h2 className="mt-3 font-serif text-3xl leading-snug md:text-4xl">
            See how these traditions appear in our selected works.
          </h2>
          <div className="mt-8">
            <QuietLink href="/collection/">Browse the collection</QuietLink>
          </div>
        </div>
      </Reveal>
    </>
  );
}
