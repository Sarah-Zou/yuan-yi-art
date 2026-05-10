"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";
import { DISTANCE, DURATION, EASE_EDITORIAL, STAGGER } from "./tokens";

/* ------------------------------------------------------------------
   Shared child variant. Small rise + fade, settled slowly.
   ------------------------------------------------------------------ */
const childVariants: Variants = {
  hidden: { opacity: 0, y: DISTANCE.hero },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.heroItem, ease: EASE_EDITORIAL },
  },
};

interface GroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

/**
 * StaggerOnLoad — plays its children's entrance in sequence as soon as
 * the component mounts. Used for the hero area so the page feels like
 * it is breathing to life rather than snapping into place.
 */
export function StaggerOnLoad({
  children,
  className,
  stagger = STAGGER.heroChildren,
  delay = STAGGER.heroDelay,
}: GroupProps) {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  return (
    <motion.div
      className={className}
      initial={false}
      animate="visible"
      variants={container}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerOnView — plays its children's entrance when the group enters
 * the viewport. Used for work grids and section card rows.
 */
export function StaggerOnView({
  children,
  className,
  stagger = STAGGER.gridChildren,
  delay = 0,
}: GroupProps) {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

interface ChildProps {
  children: ReactNode;
  className?: string;
  // Render as a matching semantic element (e.g. "li" inside <ul>).
  as?: "div" | "li" | "article" | "section";
}

/**
 * StaggerChild — must be a direct child of a Stagger* group so it picks
 * up the shared variants. Keep the markup shallow for clean choreography.
 */
export function StaggerChild({ children, className, as = "div" }: ChildProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag className={className} variants={childVariants}>
      {children}
    </MotionTag>
  );
}
