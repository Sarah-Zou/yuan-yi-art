import BilingualHeading from "@/components/BilingualHeading";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import { brand } from "@/content/brand";
import { localizedBrand } from "@/content/localizedContent";
import { pageCopy } from "@/content/siteCopy";
import type { Locale } from "@/lib/i18n";

export default function ContactView({ locale = "en" }: { locale?: Locale }) {
  const copy = pageCopy[locale].contact;
  const brandCopy = localizedBrand[locale];
  const isZh = locale === "zh";

  return (
    <>
      <Reveal as="section" className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <BilingualHeading
            as="h1"
            eyebrow={copy.eyebrow}
            cn={isZh ? "Contact" : copy.cn}
            en={copy.title}
          >
            {copy.intro}
          </BilingualHeading>
        </div>
      </Reveal>

      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-12 md:py-28">
          <Reveal className="md:col-span-5 flex flex-col gap-10">
            <div>
              <p className="eyebrow mb-4">{copy.writeLabel}</p>
              <a
                href={`mailto:${brand.email}`}
                className="quiet-link font-serif text-2xl md:text-3xl"
              >
                {brand.email}
              </a>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {copy.note}
              </p>
            </div>

            <div>
              <p className="eyebrow mb-4">{copy.inquiryLabel}</p>
              <ul className="space-y-2">
                {copy.inquiryTypes.map((type) => (
                  <li key={type} className="flex items-start gap-3 text-base text-muted">
                    <span aria-hidden="true" className="mt-[0.4em] block h-px w-4 shrink-0 bg-ink/30" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4">{copy.studioLabel}</p>
              <p className="text-base text-muted">{brandCopy.location}</p>
              <p className={`${isZh ? "font-serif" : "cn"} mt-2 text-base text-muted`}>
                {isZh ? "Honouring craft through handwork" : copy.studioCn}
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={0.15}>
            <SectionLabel>{isZh ? "Send a message" : copy.formLabel}</SectionLabel>
            <p className="mt-4 mb-8 text-sm leading-relaxed text-muted">
              {copy.formIntro}
            </p>
            <form
              className="space-y-7"
              action={`mailto:${brand.email}`}
              method="post"
              encType="text/plain"
              aria-label={copy.formAria}
            >
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-muted">
                  <span className="eyebrow">{copy.name}</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={copy.namePlaceholder}
                    className="w-full border-b border-ink/25 bg-transparent py-2 font-serif text-lg text-ink placeholder:text-ink/25 outline-none transition-colors focus:border-ink"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-muted">
                  <span className="eyebrow">{copy.email}</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={copy.emailPlaceholder}
                    className="w-full border-b border-ink/25 bg-transparent py-2 font-serif text-lg text-ink placeholder:text-ink/25 outline-none transition-colors focus:border-ink"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-muted">
                <span className="eyebrow">{copy.message}</span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder={copy.messagePlaceholder}
                  className="w-full resize-none border-b border-ink/25 bg-transparent py-2 font-serif text-lg text-ink placeholder:text-ink/25 outline-none transition-colors focus:border-ink"
                />
              </label>
              <div>
                <button
                  type="submit"
                  className="quiet-link font-serif text-lg"
                >
                  {copy.submit} →
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
