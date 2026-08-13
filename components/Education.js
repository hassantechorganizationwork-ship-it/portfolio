import Reveal, { Stagger } from "./Reveal";
import SectionHeading from "./SectionHeading";

const TIMELINE = [
  {
    period: "2022 — 2026",
    title: "BS Computer Science",
    place: "University of Lahore",
    note: "Graduate",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="section mx-auto max-w-6xl px-6 lg:px-10"
    >
      <Stagger>
        <Reveal>
          <SectionHeading num="05" title="Education" />
        </Reveal>

        <ol className="mt-12 max-w-2xl">
          {TIMELINE.map((item) => (
            <Reveal key={item.title} as="li" className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-accent bg-background shadow-[0_0_12px_var(--accent-glow)]" />
                <span className="mt-2 w-px flex-1 bg-gradient-to-b from-accent to-transparent" />
              </div>
              <div className="pb-2">
                <p className="font-mono text-xs text-accent">{item.period}</p>
                <h3 className="mt-2 font-heading text-xl font-semibold tracking-[-0.01em] text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted">{item.place}</p>
                <p className="mt-1 text-sm text-text-muted">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Stagger>
    </section>
  );
}
