"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const rise = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="top"
      className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        custom={0}
        variants={rise}
        className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-text-dim"
      >
        <span className="pulse-dot h-2 w-2 rounded-full bg-green" />
        Available for work
      </motion.div>

      <motion.h1
        initial="hidden"
        animate="visible"
        custom={0.1}
        variants={rise}
        className="gradient-text font-heading text-6xl font-bold leading-[1.05] sm:text-7xl md:text-8xl lg:text-[90px]"
        style={{
          filter:
            "drop-shadow(0 0 50px rgba(236,72,153,0.35)) drop-shadow(0 0 90px rgba(124,58,237,0.25))",
        }}
      >
        Hassan
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        custom={0.2}
        variants={rise}
        className="mt-5 font-heading text-2xl font-semibold text-text-primary sm:text-3xl"
      >
        Full-Stack Developer &amp; Solo Founder
      </motion.p>

      <motion.p
        initial="hidden"
        animate="visible"
        custom={0.3}
        variants={rise}
        className="mt-5 max-w-xl text-base leading-relaxed text-text-dim sm:text-lg"
      >
        Building offline-first software for Pakistani businesses — and the
        occasional client site along the way.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        custom={0.4}
        variants={rise}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <a
          href="#work"
          className="rounded-full bg-gradient-to-r from-purple via-pink to-blue px-8 py-3.5 font-mono text-sm font-medium text-text-primary shadow-[0_0_25px_rgba(124,58,237,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(236,72,153,0.55)] active:scale-100"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="glass rounded-full px-8 py-3.5 font-mono text-sm font-medium text-text-primary transition-all hover:bg-white/8 hover:scale-105 active:scale-100"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
