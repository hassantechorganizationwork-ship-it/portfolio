"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Wraps a block whose children should reveal with a slight stagger,
 * once, when the block scrolls into view.
 *
 * Note: `initial` is intentionally not branched on reduced-motion — that
 * would differ between server and client and cause a hydration mismatch.
 * The `data-reveal` hook lets CSS force the final state instead.
 */
export function Stagger({ children, className, as = "div", delay = 0 }) {
  const Comp = motion[as] ?? motion.div;

  return (
    <Comp
      className={className}
      data-reveal=""
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -90px 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.09, delayChildren: delay },
        },
      }}
    >
      {children}
    </Comp>
  );
}

/** A single revealing child. Must sit inside <Stagger>. */
export default function Reveal({ children, className, as = "div" }) {
  const Comp = motion[as] ?? motion.div;

  return (
    <Comp
      className={className}
      data-reveal=""
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: EASE },
        },
      }}
    >
      {children}
    </Comp>
  );
}
