import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const TIMELINE = [
  {
    period: "2022 — 2026",
    title: "BS Computer Science",
    place: "University of Lahore",
    note: "Fresh graduate.",
  },
  {
    period: "Applying now",
    title: "MS — CS / Data Science / Cybersecurity",
    place: "ITU Lahore",
    note: "Preparing entry test and applications.",
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-28 sm:px-10">
      <Reveal>
        <SectionHeading label="Education" />
      </Reveal>

      <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {TIMELINE.map((item) => (
          <Reveal key={item.title} as="li">
            <div className="gradient-border glass h-full rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-pink shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
                <p className="font-mono text-xs text-text-dim">
                  {item.period}
                </p>
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-text-dim">{item.place}</p>
              <p className="mt-1 text-sm text-text-dim">{item.note}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
