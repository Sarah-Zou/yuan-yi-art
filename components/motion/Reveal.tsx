"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";
import { DISTANCE, DURATION, EASE_EDITORIAL } from "./tokens";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  // Override default rise distance (px). Keep small for elegance.
  distance?: number;
  // How much of the element must be in view before it triggers.
  amount?: number;
  // Render as <section>, <div>, etc. Defaults to <div>.
  as?: "div" | "section" | "article" | "ul" | "li";
}

/**
 * Single-element reveal: fade + small upward rise the first time the
 * element enters the viewport. The movement is deliberately short and slow,
 * closer to fabric being lifted than a digital slide. Triggers once so it
 * never "replays" on scroll back.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  distance = DISTANCE.reveal,
  amount = 0.2,
  as = "div",
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.reveal, ease: EASE_EDITORIAL, delay },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
