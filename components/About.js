import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28 sm:px-10">
      <Reveal>
        <SectionHeading label="About" />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 items-center gap-12 md:grid-cols-[280px_1fr]">
        <Reveal>
          <div className="relative mx-auto aspect-square w-56 md:w-full">
            <div className="relative h-full w-full overflow-hidden rounded-full p-[3px]">
              <div className="conic-ring absolute inset-0" />
              <div className="relative h-full w-full overflow-hidden rounded-full bg-background">
                <Image
                  src="/hassan.png"
                  alt="Portrait of Hassan Shafiq"
                  fill
                  sizes="(min-width: 768px) 280px, 224px"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>

            {[
              { angle: 0, color: "#7C3AED" },
              { angle: 120, color: "#EC4899" },
              { angle: 240, color: "#3B82F6" },
            ].map(({ angle, color }) => (
              <div
                key={angle}
                className="pointer-events-none absolute inset-0"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div
                  className="spin-slow absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(from 0deg, #fff 0deg, ${color} 10deg, ${color}00 42deg, ${color}00 360deg)`,
                    WebkitMaskImage:
                      "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))",
                    maskImage:
                      "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))",
                  }}
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="glass rounded-2xl p-8 sm:p-10">
            <p className="text-base leading-relaxed text-text-dim sm:text-lg">
              I&apos;m a fresh{" "}
              <span className="text-text-primary">BS Computer Science</span>{" "}
              graduate (2022 — 2026) from the University of Lahore, and the
              solo founder and developer behind{" "}
              <span className="gradient-text font-medium">Posify</span>, an
              offline-first POS desktop app for Pakistani small and medium
              businesses, built for a market where unreliable internet makes
              cloud-only software unreliable. I built it end-to-end solo —
              frontend, backend, and the native Rust layer underneath Tauri.
              Alongside Posify, I take on freelance React &amp; Next.js
              projects, and I&apos;m currently preparing my applications for
              an MS in Computer Science, Data Science, or Cybersecurity at{" "}
              <span className="text-text-primary">ITU Lahore</span>, spending
              my spare time going deeper into data science and machine
              learning.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
