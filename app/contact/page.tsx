import type { Metadata } from "next";
import BilingualHeading from "@/components/BilingualHeading";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import { brand } from "@/content/brand";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${brand.nameEn} — for collection inquiries, collaborations, and studio visits.`,
};

const inquiryTypes = [
  "Collection inquiries",
  "Collaborations, press, and cultural projects",
  "Custom interest or studio visits",
  "A kind word about the work",
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <Reveal as="section" className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <BilingualHeading
            as="h1"
            eyebrow="Contact"
            cn="欢迎来信"
            en="A short note is always welcome."
          >
            Whether you are writing about a piece, a collaboration, a studio
            visit, or a custom idea — we welcome a short and thoughtful note.
          </BilingualHeading>
        </div>
      </Reveal>

      {/* Main contact section */}
      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-12 md:py-28">

          {/* Left: email CTA + what to write about + studio */}
          <Reveal className="md:col-span-5 flex flex-col gap-10">

            {/* Primary email CTA */}
            <div>
              <p className="eyebrow mb-4">Write to us</p>
              <a
                href={`mailto:${brand.email}`}
                className="quiet-link font-serif text-2xl md:text-3xl"
              >
                {brand.email}
              </a>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                We are a small studio. Replies may take a few days, but every
                message is read with care.
              </p>
            </div>

            {/* Inquiry prompts */}
            <div>
              <p className="eyebrow mb-4">We welcome notes about</p>
              <ul className="space-y-2">
                {inquiryTypes.map((type) => (
                  <li key={type} className="flex items-start gap-3 text-base text-muted">
                    <span aria-hidden="true" className="mt-[0.4em] block h-px w-4 shrink-0 bg-ink/30" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio location */}
            <div>
              <p className="eyebrow mb-4">Studio</p>
              <p className="text-base text-muted">{brand.location}</p>
              <p className="cn mt-2 text-base text-muted">以手作致敬手艺</p>
            </div>
          </Reveal>

          {/* Right: simplified message form */}
          <Reveal className="md:col-span-7" delay={0.15}>
            <SectionLabel>Send a message</SectionLabel>
            <p className="mt-4 mb-8 text-sm leading-relaxed text-muted">
              Prefer a form? Leave your details below and we will write back.
            </p>
            <form
              className="space-y-7"
              action={`mailto:${brand.email}`}
              method="post"
              encType="text/plain"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-muted">
                  <span className="eyebrow">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full border-b border-ink/25 bg-transparent py-2 font-serif text-lg text-ink placeholder:text-ink/25 outline-none transition-colors focus:border-ink"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-muted">
                  <span className="eyebrow">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full border-b border-ink/25 bg-transparent py-2 font-serif text-lg text-ink placeholder:text-ink/25 outline-none transition-colors focus:border-ink"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-muted">
                <span className="eyebrow">Message</span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us what brought you here…"
                  className="w-full resize-none border-b border-ink/25 bg-transparent py-2 font-serif text-lg text-ink placeholder:text-ink/25 outline-none transition-colors focus:border-ink"
                />
              </label>
              <div>
                <button
                  type="submit"
                  className="quiet-link font-serif text-lg"
                >
                  Send message →
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
