"use client";

import { motion } from "framer-motion";

const HEADING = "I build software that businesses actually rely on.";
const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Hero() {

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pb-24 pt-36 lg:px-10"
    >
      {/* Soft emerald glow behind the heading only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-[520px] w-[720px] max-w-full -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(16,185,129,0.16), transparent)",
        }}
      />

      <motion.div
        className="relative"
        data-reveal=""
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={item} data-reveal="" className="font-mono text-sm text-accent">
          Full-Stack Developer · Lahore, Pakistan
        </motion.p>

        <motion.h1
          variants={item} data-reveal=""
          data-text={HEADING}
          className="sheen relative mt-6 max-w-4xl font-heading text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.03em]"
        >
          {HEADING}
        </motion.h1>

        <motion.p
          variants={item} data-reveal=""
          className="prose-measure mt-8 text-lg text-text-muted"
        >
          Computer Science graduate and full-stack developer specializing in
          React, Next.js, and cross-platform apps — from client websites to
          offline-first business software.
        </motion.p>

        <motion.div
          variants={item} data-reveal=""
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#work"
            className="btn rounded-md bg-accent px-7 py-3.5 text-center font-mono text-sm font-medium text-background shadow-[0_0_24px_var(--accent-glow)] hover:bg-accent-light hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="btn rounded-md border border-border px-7 py-3.5 text-center font-mono text-sm font-medium text-text-primary hover:border-accent hover:text-accent-light hover:shadow-[0_0_24px_var(--accent-glow)]"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          variants={item} data-reveal=""
          className="mt-12 inline-flex w-fit items-center gap-3 rounded-full border border-border bg-surface px-4 py-2"
        >
          <span className="pulse-dot relative h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-xs text-text-muted">
            Available for work
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
