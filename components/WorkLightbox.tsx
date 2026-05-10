"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { assetUrl } from "@/lib/assetUrl";
import { EASE_EDITORIAL, EASE_LINEN } from "./motion/tokens";

const slideVariants: Variants = {
  enter: (d: 1 | -1) => ({ opacity: 0, x: d * 18, scale: 0.985 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (d: 1 | -1) => ({ opacity: 0, x: d * -14, scale: 0.99 }),
};

interface WorkLightboxProps {
  images: string[];
  alt: string;
  open: boolean;
  initialIndex: number;
  onClose: () => void;
}

/**
 * Full-viewport lightbox for examining a Work image up close.
 *
 * Motion intent: premium, elegant, unhurried.
 *  - Backdrop fades in with a slow ink-dark wash and faint blur.
 *  - The image rises a few pixels and settles, like a leaf brought near.
 *  - Navigation between photos uses a soft cross-fade with directional drift,
 *    never a snappy slide.
 *
 * Interaction:
 *  - Esc closes; ArrowLeft / ArrowRight navigate.
 *  - Click on the backdrop closes; clicks on the image / controls do not.
 *  - Body scroll locks while open and focus is restored on close.
 *  - Rendered through a portal so transformed ancestors cannot clip it.
 */
export default function WorkLightbox({
  images,
  alt,
  open,
  initialIndex,
  onClose,
}: WorkLightboxProps) {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState<1 | -1>(1);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const total = images.length;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    setIndex(((initialIndex % total) + total) % total);
    setDirection(1);
  }, [open, initialIndex, total]);

  const goTo = useCallback(
    (next: number, dir: 1 | -1) => {
      setDirection(dir);
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);

  // Lock scroll, capture focus origin, listen for keys while open.
  useEffect(() => {
    if (!open) return;

    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft" && total > 1) {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight" && total > 1) {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      restoreFocusRef.current?.focus?.({ preventScroll: true });
    };
  }, [open, onClose, prev, next, total]);

  if (!mounted) return null;

  const currentSrc = assetUrl(images[index]);
  const captionAlt =
    index === 0 ? alt : `${alt} \u2014 view ${index + 1} of ${total}`;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE_EDITORIAL }}
        >
          <motion.button
            type="button"
            aria-label="Close enlarged view"
            onClick={onClose}
            className="absolute inset-0 cursor-zoom-out bg-ink/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE_EDITORIAL }}
          />

          <motion.div
            className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center gap-6 px-6 py-16 md:px-12 md:py-20"
            initial={{ opacity: 0, y: 12, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={{ duration: 0.78, ease: EASE_LINEN, delay: 0.05 }}
          >
            <div className="relative flex w-full flex-1 items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={currentSrc}
                  src={currentSrc}
                  alt={captionAlt}
                  custom={direction}
                  draggable={false}
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-[78vh] max-w-full select-none rounded-sm object-contain shadow-[0_40px_120px_rgba(0,0,0,0.45)] md:max-h-[82vh]"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.65, ease: EASE_LINEN }}
                />
              </AnimatePresence>

              {total > 1 ? (
                <>
                  <LightboxNav
                    direction="left"
                    label="Previous photo"
                    onClick={prev}
                  />
                  <LightboxNav
                    direction="right"
                    label="Next photo"
                    onClick={next}
                  />
                </>
              ) : null}
            </div>

            <motion.div
              className="flex w-full flex-col items-center gap-3 text-ivory/85"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: EASE_EDITORIAL,
                delay: 0.18,
              }}
            >
              <p className="cn text-center text-sm tracking-[0.18em] text-ivory/70 md:text-base">
                {alt}
              </p>
            </motion.div>
          </motion.div>

          <motion.button
            type="button"
            aria-label="Close enlarged view"
            onClick={onClose}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 bg-ink/40 text-ivory/85 backdrop-blur-md transition-colors duration-300 hover:border-ivory/50 hover:bg-ink/55 hover:text-ivory md:right-8 md:top-8 md:h-12 md:w-12"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: EASE_EDITORIAL, delay: 0.12 }}
          >
            <CloseIcon />
          </motion.button>

          <span className="sr-only" aria-live="polite">
            Photo {index + 1} of {total}
          </span>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

function LightboxNav({
  direction,
  label,
  onClick,
}: {
  direction: "left" | "right";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={label}
      className={`absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 bg-ink/40 text-ivory/85 backdrop-blur-md transition-colors duration-300 hover:border-ivory/50 hover:bg-ink/55 hover:text-ivory md:h-14 md:w-14 ${
        direction === "left" ? "left-3 md:left-6" : "right-3 md:right-6"
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
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
    </button>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="3" y1="3" x2="11" y2="11" />
      <line x1="11" y1="3" x2="3" y2="11" />
    </svg>
  );
}
