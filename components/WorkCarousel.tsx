"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import WorkLightbox from "./WorkLightbox";
import { assetUrl } from "@/lib/assetUrl";

interface WorkCarouselProps {
  images: string[];
  alt: string;
}

/**
 * In-place carousel for a single WorkCard.
 *
 * Visual language matches the rest of the collection page: the same slow
 * scale-on-hover used for static work images, with a barely-there warm
 * overlay. Controls are quiet — small ivory chevrons that fade in on
 * hover or focus, and a row of dot indicators below the image.
 *
 * Interactions:
 *  - Prev / next buttons
 *  - ArrowLeft / ArrowRight when the carousel is focused
 *  - Pointer / touch swipe with a 40px threshold
 *  - A polite live region announces the current slide for screen readers
 */
export default function WorkCarousel({ images, alt }: WorkCarouselProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{
    startX: number;
    startY: number;
    pointerId: number;
    moved: boolean;
  } | null>(null);

  const total = images.length;
  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);
    },
    [total],
  );
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const node = trackRef.current?.parentElement;
    if (!node) return;
    const onKey = (e: KeyboardEvent) => {
      if (lightboxOpen) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setLightboxOpen(true);
      }
    };
    node.addEventListener("keydown", onKey);
    return () => node.removeEventListener("keydown", onKey);
  }, [prev, next, lightboxOpen]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragState.current = {
      startX: e.clientX,
      startY: e.clientY,
      pointerId: e.pointerId,
      moved: false,
    };
    if ("setPointerCapture" in e.currentTarget) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = dragState.current;
    if (!state || state.pointerId !== e.pointerId) return;
    const dx = Math.abs(e.clientX - state.startX);
    const dy = Math.abs(e.clientY - state.startY);
    if (dx > 6 || dy > 6) state.moved = true;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = dragState.current;
    dragState.current = null;
    if (!state || state.pointerId !== e.pointerId) return;
    const delta = e.clientX - state.startX;
    const threshold = 40;
    if (delta <= -threshold) {
      next();
      return;
    }
    if (delta >= threshold) {
      prev();
      return;
    }
    if (!state.moved) {
      setLightboxOpen(true);
    }
  };

  const onPointerCancel = () => {
    dragState.current = null;
  };

  return (
    <div
      className="group/carousel relative h-full w-full select-none outline-none"
      role="region"
      aria-roledescription="carousel"
      aria-label={alt}
      tabIndex={0}
    >
      <div
        ref={trackRef}
        className="relative h-full w-full cursor-zoom-in overflow-hidden touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <div
          className="flex h-full w-full transition-transform duration-[700ms] ease-[cubic-bezier(0.18,0.72,0.2,1)]"
          style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
        >
          {images.map((src, i) => (
            <div
              key={src}
              className="relative h-full w-full shrink-0 basis-full overflow-hidden"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
              aria-hidden={i !== index}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetUrl(src)}
                alt={i === 0 ? alt : `${alt} — view ${i + 1}`}
                className="pointer-events-none h-full w-full bg-linen/40 object-contain transition-transform duration-[1450ms] ease-[cubic-bezier(0.18,0.72,0.2,1)] will-change-transform group-hover:scale-[1.01]"
                loading={i === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-[1100ms] ease-[cubic-bezier(0.18,0.72,0.2,1)] group-hover:bg-ink/[0.03]"
        />
      </div>

      {total > 1 ? (
        <>
          {/* Arrows: always visible on mobile, fade in on desktop hover/focus */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-ivory/80 text-ink/70 backdrop-blur-sm transition-opacity duration-500 hover:bg-ivory hover:text-ink md:opacity-0 md:focus-visible:opacity-100 md:group-hover/carousel:opacity-100"
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-ivory/80 text-ink/70 backdrop-blur-sm transition-opacity duration-500 hover:bg-ivory hover:text-ink md:opacity-0 md:focus-visible:opacity-100 md:group-hover/carousel:opacity-100"
          >
            <Chevron direction="right" />
          </button>

          {/* Dots: hidden until hover — a quiet presence, not a widget */}
          <div
            className="absolute inset-x-0 bottom-2.5 z-10 flex items-center justify-center gap-1.5 opacity-0 transition-opacity duration-500 group-hover/carousel:opacity-100 focus-within:opacity-100"
            role="tablist"
            aria-label="Choose photo"
          >
            {images.map((src, i) => {
              const active = i === index;
              return (
                <button
                  key={src}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Photo ${i + 1} of ${total}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(i);
                  }}
                  className={`h-1 rounded-full transition-all duration-400 ${
                    active ? "w-4 bg-ivory" : "w-1 bg-ivory/50"
                  }`}
                />
              );
            })}
          </div>
        </>
      ) : null}

      <span className="sr-only" aria-live="polite">
        Photo {index + 1} of {total}
      </span>

      <WorkLightbox
        images={images}
        alt={alt}
        open={lightboxOpen}
        initialIndex={index}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <polyline points="9 2 4 7 9 12" />
      ) : (
        <polyline points="5 2 10 7 5 12" />
      )}
    </svg>
  );
}
