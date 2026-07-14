import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const GROUPS = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"],
  },
  {
    title: "Backend & systems",
    items: ["Rust", "Tauri 2.0", "Supabase", "SQLite", "JWT / Auth"],
  },
  {
    title: "Currently learning",
    items: ["Python", "Machine Learning", "NLP", "LangChain"],
  },
  {
    title: "Ways of working",
    items: ["Solo end-to-end shipping", "Client project delivery", "AI-assisted dev"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28 sm:px-10">
      <Reveal>
        <SectionHeading label="Skills" />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {GROUPS.map((group) => (
          <Reveal key={group.title}>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-mono text-xs uppercase tracking-wide text-text-dim">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="gradient-border glass rounded-full px-3.5 py-1.5 text-sm text-text-primary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
