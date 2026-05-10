"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ReactNode, useRef } from "react";
import { DISTANCE } from "./tokens";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  // Vertical drift in px. Keep small — parallax should feel like breath.
  strength?: number;
}

/**
 * Parallax — applies a very light vertical drift tied to scroll progress.
 * Used sparingly (at most once or twice per page, on key media) so that
 * the effect stays almost invisible and never feels like a gimmick.
 *
 * Respects prefers-reduced-motion: drift becomes zero.
 */
export default function Parallax({
  children,
  className,
  strength = DISTANCE.parallax,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Drift the child from +strength to -strength over the element's scroll
  // lifetime. When the user prefers reduced motion, drift is flattened.
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [strength, -strength],
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
