"use client";

import { useState } from "react";
import type { Work } from "@/content/works";
import { assetUrl } from "@/lib/assetUrl";
import WorkCarousel from "./WorkCarousel";
import WorkLightbox from "./WorkLightbox";

interface WorkCardProps {
  work: Work;
  feature?: boolean;
  /** When true, hides the craft/materials note (used on the homepage preview). */
  compact?: boolean;
}

export default function WorkCard({ work, feature = false, compact = false }: WorkCardProps) {
  const gallery = work.images && work.images.length > 1 ? work.images : null;
  const altText = `${work.titleEn} — ${work.titleCn}`;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <article className="group flex flex-col gap-5">
      {/* Image area — quiet linen frame, zoom cursor hints at click-to-enlarge */}
      <div
        className={`relative overflow-hidden bg-linen/50 ring-1 ring-ink/[0.06] ${
          feature ? "aspect-[4/5]" : "aspect-[4/5]"
        }`}
      >
        {gallery ? (
          <WorkCarousel images={gallery} alt={altText} />
        ) : work.image ? (
          <>
            <button
              type="button"
              aria-label={`Enlarge ${altText}`}
              onClick={() => setLightboxOpen(true)}
              className="relative block h-full w-full cursor-zoom-in outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetUrl(work.image)}
                alt={altText}
                className="h-full w-full object-contain transition-transform duration-[1450ms] ease-[cubic-bezier(0.18,0.72,0.2,1)] will-change-transform group-hover:scale-[1.018]"
                loading="lazy"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-[1100ms] ease-[cubic-bezier(0.18,0.72,0.2,1)] group-hover:bg-ink/[0.025]"
              />
            </button>
            <WorkLightbox
              images={[work.image]}
              alt={altText}
              open={lightboxOpen}
              initialIndex={0}
              onClose={() => setLightboxOpen(false)}
            />
          </>
        ) : (
          <div className="placeholder-tile flex h-full w-full items-center justify-center p-6 text-center">
            <div className="flex flex-col gap-2">
              <span className="cn text-lg">{work.titleCn}</span>
              <span className="eyebrow">{work.categoryLabel.en}</span>
            </div>
          </div>
        )}
      </div>

      {/* Text — bilingual title, editorial description, soft craft note */}
      <div className="flex flex-col gap-1.5">
        <span className="eyebrow">{work.categoryLabel.en}</span>
        <h3 className="font-serif text-xl leading-snug md:text-2xl">
          {work.titleEn}
        </h3>
        <p className="cn text-sm text-muted">{work.titleCn}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {work.description}
        </p>
        {work.materials && !compact ? (
          <p className="mt-2 text-xs text-muted/60">
            <span className="italic">Craft:</span>{" "}
            {work.materials.toLowerCase()}
          </p>
        ) : null}
      </div>
    </article>
  );
}
