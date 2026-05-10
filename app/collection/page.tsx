import type { Metadata } from "next";
import BilingualHeading from "@/components/BilingualHeading";
import WorkGrid from "@/components/WorkGrid";
import Reveal from "@/components/motion/Reveal";
import { categoryOrder, works } from "@/content/works";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "Selected works from Yuan-Yi Art — curated pieces across herbal sachets, silk-wrapped florals, embroidered children's shoes, and embroidered insoles.",
};

export default function CollectionPage() {
  return (
    <>
      {/* Page header */}
      <Reveal as="section" className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <BilingualHeading
            as="h1"
            eyebrow="Selected Works"
            cn="精选手作 · 当代呈现"
            en="A quiet exhibition of pieces made entirely by hand."
          >
            Selected works across four handmade traditions — presented here as
            an exhibition rather than a shop. Each piece carries the patience of
            handwork, regional memory, and the care of women makers.
          </BilingualHeading>
        </div>
      </Reveal>

      {/* Works grouped by craft category */}
      {categoryOrder.map((category) => {
        const worksInCategory = works.filter((w) => w.category === category.id);
        if (worksInCategory.length === 0) return null;

        return (
          <section
            key={category.id}
            id={category.id}
            className="border-b border-ink/10"
          >
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-24">
              <Reveal>
                <div className="mb-10 flex flex-col gap-2 md:mb-14">
                  <p className="cn text-sm text-muted">{category.cn}</p>
                  <h2 className="font-serif text-3xl md:text-4xl">
                    {category.en}
                  </h2>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                    {category.description}
                  </p>
                </div>
              </Reveal>
              <WorkGrid works={worksInCategory} />
            </div>
          </section>
        );
      })}

      {/* Closing handmade trust note */}
      <Reveal as="section">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <span className="rule mx-auto mb-6" />
          <p className="font-serif text-xl leading-relaxed text-ink/80 md:text-2xl">
            Each work is made in small batches by hand.
          </p>
          <p className="cn mt-3 text-sm text-muted md:text-base">
            每一件作品皆为小批量纯手工制作。线色、布料与形态的细微差异，是手作本身的印记。
          </p>
          <p className="mt-4 max-w-lg mx-auto text-sm leading-relaxed text-muted">
            Variations in thread, cloth, and form are part of the piece — not
            imperfections, but the mark of the hand that made it.
          </p>
        </div>
      </Reveal>
    </>
  );
}
