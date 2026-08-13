const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Flutter",
  "Rust",
  "Tauri",
  "Supabase",
];

export default function TechMarquee() {
  return (
    <div
      aria-hidden="true"
      className="marquee relative overflow-hidden border-y border-border py-5"
    >
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {TECH.map((tech) => (
              <li
                key={`${copy}-${tech}`}
                className="whitespace-nowrap px-8 font-mono text-sm text-text-muted/70"
              >
                {tech}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
