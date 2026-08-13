import Reveal from "./Reveal";

const STATS = [
  { value: "5+", label: "Projects Shipped" },
  { value: "2026", label: "CS Graduate" },
  { value: "Freelance", label: "+ Product Work" },
  { value: "Lahore", label: "Pakistan" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {STATS.map((stat) => (
        <Reveal key={stat.label}>
          <div className="card h-full rounded-xl px-5 py-6">
            <p className="font-heading text-2xl font-semibold tracking-tight text-accent">
              {stat.value}
            </p>
            <p className="mt-1.5 font-mono text-xs text-text-muted">
              {stat.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
