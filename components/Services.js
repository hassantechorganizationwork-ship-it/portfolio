import { Globe, Layers, Smartphone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    title: "Web apps",
    description:
      "React / Next.js builds, from landing pages to full dashboards.",
    Icon: Globe,
  },
  {
    title: "Business software",
    description:
      "POS, inventory, and internal tools tailored to how a business actually runs.",
    Icon: Layers,
  },
  {
    title: "Cross-platform apps",
    description:
      "Flutter mobile apps and Tauri (Rust-backed) desktop apps from one codebase.",
    Icon: Smartphone,
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-6 py-28 sm:px-10">
      <Reveal>
        <SectionHeading label="Services" />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {SERVICES.map(({ title, description, Icon }) => (
          <Reveal key={title}>
            <div className="gradient-border glass h-full rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple via-pink to-blue">
                <Icon className="h-4.5 w-4.5 text-text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-text-primary">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-dim">
                {description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
