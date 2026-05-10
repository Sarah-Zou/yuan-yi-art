"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

/**
 * Global motion configuration.
 *
 * - reducedMotion="user" honours the OS-level "reduce motion" setting.
 *   When enabled, framer-motion disables transforms automatically —
 *   opacity still fades, but nothing slides, scales, or drifts.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
