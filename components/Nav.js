"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-border bg-background/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10"
      >
        <a
          href="#top"
          className="font-heading text-lg font-semibold tracking-tight"
        >
          Hassan Shafiq
        </a>

        <div className="hidden items-center gap-9 md:flex">
          <ul className="flex items-center gap-8 font-mono text-sm">
            {LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    data-active={isActive}
                    aria-current={isActive ? "true" : undefined}
                    className={`nav-link ${
                      isActive
                        ? "text-accent"
                        : "text-text-muted hover:text-accent-light"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="/resume.pdf"
            download
            className="btn rounded-md border border-accent px-4 py-2 font-mono text-sm text-accent hover:bg-[var(--accent-glow)] hover:text-accent-light hover:shadow-[0_0_22px_var(--accent-glow)]"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <span
            className={`block h-0.5 w-6 bg-text-primary transition-transform duration-250 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text-primary transition-opacity duration-250 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text-primary transition-transform duration-250 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background/95 px-6 py-6 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-5 font-mono text-sm">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={
                    active === link.id ? "text-accent" : "text-text-muted"
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            download
            onClick={() => setOpen(false)}
            className="mt-6 inline-block rounded-md border border-accent px-4 py-2 font-mono text-sm text-accent"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
