import { LayoutGrid, Monitor, Smartphone } from "lucide-react";
import Reveal, { Stagger } from "./Reveal";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    title: "Web Applications",
    description: "Fast, responsive React / Next.js sites and dashboards.",
    Icon: Monitor,
  },
  {
    title: "Business Software",
    description:
      "POS, inventory, and internal tools built around how a business runs.",
    Icon: LayoutGrid,
  },
  {
    title: "Cross-Platform Apps",
    description:
      "Flutter mobile apps and desktop apps from a shared codebase.",
    Icon: Smartphone,
  },
];

export default function Services() {
  return (
    <section id="services" className="section mx-auto max-w-6xl px-6 lg:px-10">
      <Stagger>
        <Reveal>
          <SectionHeading num="04" title="Services" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map(({ title, description, Icon }) => (
            <Reveal key={title} className="h-full">
              <div className="card h-full rounded-xl p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-[var(--accent-glow)]">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold tracking-[-0.01em] text-text-primary">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Stagger>
    </section>
  );
}
