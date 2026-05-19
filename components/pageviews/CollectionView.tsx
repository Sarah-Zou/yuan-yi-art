import BilingualHeading from "@/components/BilingualHeading";
import WorkGrid from "@/components/WorkGrid";
import Reveal from "@/components/motion/Reveal";
import { getCategories, getWorks } from "@/content/localizedContent";
import { pageCopy } from "@/content/siteCopy";
import type { Locale } from "@/lib/i18n";

export default function CollectionView({ locale = "en" }: { locale?: Locale }) {
  const copy = pageCopy[locale].collection;
  const categories = getCategories(locale);
  const works = getWorks();
  const isZh = locale === "zh";

  return (
    <>
      <Reveal as="section" className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <BilingualHeading
            as="h1"
            eyebrow={copy.eyebrow}
            cn={isZh ? "Selected Works" : copy.cn}
            en={copy.title}
          >
            {copy.intro}
          </BilingualHeading>

          <nav
            aria-label={copy.navAria}
            className="mt-12 grid grid-cols-2 gap-8 border-t border-ink/10 pt-10 md:grid-cols-4"
          >
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="group flex flex-col gap-1.5 focus-visible:outline-none"
              >
                <span className="font-serif text-2xl text-muted transition-colors group-hover:text-ink group-focus-visible:text-ink md:text-3xl">
                  {isZh ? cat.displayTitle : cat.en}
                </span>
                <span className="text-sm leading-snug text-ink/60 transition-colors group-hover:text-ink group-focus-visible:text-ink">
                  {isZh ? cat.en : cat.cn}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-1 block h-px w-5 bg-ink/20 transition-all duration-300 group-hover:w-9 group-hover:bg-ink/50 group-focus-visible:w-9 group-focus-visible:bg-ink/50"
                />
              </a>
            ))}
          </nav>
        </div>
      </Reveal>

      {categories.map((category) => {
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
                  <p className={`${isZh ? "font-serif" : "cn"} text-sm text-muted`}>
                    {isZh ? category.en : category.cn}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl">
                    {category.displayTitle}
                  </h2>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                    {category.description}
                  </p>
                </div>
              </Reveal>
              <WorkGrid works={worksInCategory} locale={locale} />
            </div>
          </section>
        );
      })}

      <Reveal as="section">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <span className="rule mx-auto mb-6" />
          <p className="font-serif text-xl leading-relaxed text-ink/80 md:text-2xl">
            {copy.closingTitle}
          </p>
          <p className={`${isZh ? "font-serif" : "cn"} mt-3 text-sm text-muted md:text-base`}>
            {isZh ? "Handmade in small batches" : copy.closingCn}
          </p>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
            {copy.closingText}
          </p>
        </div>
      </Reveal>
    </>
  );
}
