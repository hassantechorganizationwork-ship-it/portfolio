"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const node = ref.current;
    if (!node || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = node.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative block"
    >
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple via-pink to-blue opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40" />
      <div className="glass gradient-border relative rounded-3xl p-7 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-wide text-text-dim">
            {project.tag}
          </span>
          <span className="font-mono text-xs text-text-dim opacity-0 transition-opacity group-hover:opacity-100">
            visit &rarr;
          </span>
        </div>
        <h3 className="mt-4 font-heading text-2xl font-semibold text-text-primary">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-dim sm:text-base">
          {project.outcome}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2 font-mono text-xs text-text-dim">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-glass-border px-3 py-1"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </motion.a>
  );
}
