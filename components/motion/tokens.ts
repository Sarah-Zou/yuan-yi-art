/**
 * Shared motion tokens. Kept together so the entire site moves
 * with the same quiet rhythm — no component should invent its own timing.
 *
 * Design intent: memory, inheritance, quiet craftsmanship, breath.
 * Pages should reveal themselves like textiles being unfolded by hand:
 * unhurried, almost tactile, and never performative.
 */

// Editorial easing curve. No overshoot, a gentle settle at the end.
export const EASE_EDITORIAL: [number, number, number, number] = [
  0.2, 0.64, 0.28, 1,
];

// A linen-like curve used for image hovers and very soft settling.
export const EASE_LINEN: [number, number, number, number] = [0.18, 0.72, 0.2, 1];

// Durations in seconds — deliberately longer than typical product sites.
export const DURATION = {
  reveal: 1.25,
  heroItem: 1.35,
  pageFade: 0.68,
  headerState: 0.6,
  imageHover: 1.45,
} as const;

// Translate distances (in px). Small movements only — no slides.
export const DISTANCE = {
  reveal: 10,
  hero: 14,
  parallax: 16,
} as const;

// Stagger intervals (in seconds).
export const STAGGER = {
  heroChildren: 0.15,
  gridChildren: 0.1,
  heroDelay: 0.22,
} as const;
