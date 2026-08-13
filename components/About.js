import Image from "next/image";
import Reveal, { Stagger } from "./Reveal";
import SectionHeading from "./SectionHeading";
import Stats from "./Stats";

export default function About() {
  return (
    <section id="about" className="section mx-auto max-w-6xl px-6 lg:px-10">
      <Stagger>
        <Reveal>
          <SectionHeading num="01" title="About" />
        </Reveal>

        <Reveal className="mt-12 flex flex-col gap-10 sm:flex-row sm:items-start">
          <div className="relative aspect-square w-40 shrink-0 sm:w-44">
            <div className="relative h-full w-full rounded-full p-[3px]">
              <div className="conic-ring absolute inset-0 rounded-full" />
              <div className="relative h-full w-full overflow-hidden rounded-full bg-background">
                <Image
                  src="/hassan.png"
                  alt="Portrait of Hassan Shafiq"
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
            </div>

            {[
              { angle: 0, color: "#10B981" },
              { angle: 120, color: "#34D399" },
              { angle: 240, color: "#6EE7B7" },
            ].map(({ angle, color }) => (
              <div
                key={angle}
                aria-hidden="true"
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

          <div className="prose-measure space-y-5 text-base text-text-muted sm:text-lg">
            <p>
              I&apos;m a{" "}
              <span className="text-text-primary">
                BS Computer Science graduate
              </span>{" "}
              from the University of Lahore, and a full-stack developer who
              builds web applications, business software, and cross-platform
              mobile &amp; desktop apps.
            </p>
            <p>
              I&apos;m comfortable owning a product end-to-end — from UI to
              backend to deployment — which is how I built{" "}
              <span className="text-text-primary">Posify</span>, an
              offline-first POS system, entirely solo. Alongside it I run{" "}
              <span className="text-text-primary">D Code Vibers</span>, my
              freelance practice, delivering client sites, admin panels,
              automated email systems, and MDX blogs.
            </p>
            <p>
              Outside of client work I&apos;m going deeper into data science
              and machine learning.
            </p>
          </div>
        </Reveal>
      </Stagger>

      <Stagger className="mt-14">
        <Stats />
      </Stagger>
    </section>
  );
}
