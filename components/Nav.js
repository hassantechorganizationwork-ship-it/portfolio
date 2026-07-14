"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const heroHeight = window.innerHeight * 0.85;
    const onScroll = () => setScrolled(window.scrollY > heroHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-glass-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          className="font-heading text-lg font-semibold text-text-primary"
        >
          Hassan Shafiq
        </a>

        <ul className="hidden items-center gap-8 font-mono text-xs text-text-dim md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-purple via-pink to-blue px-5 py-2 font-mono text-xs font-medium text-text-primary shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] md:inline-block"
        >
          Get in touch
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <span
            className={`block h-0.5 w-6 bg-text-primary transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text-primary transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text-primary transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-glass-border bg-background/95 px-6 py-6 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-4 font-mono text-sm text-text-dim">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="transition-colors hover:text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
