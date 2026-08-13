import Reveal, { Stagger } from "./Reveal";
import SectionHeading from "./SectionHeading";

const GROUPS = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Flutter",
      "HTML5 & CSS3",
      "Responsive / mobile-first UI",
    ],
  },
  {
    label: "Backend & Systems",
    items: [
      "Rust",
      "Tauri 2.0",
      "Supabase",
      "PostgreSQL",
      "SQLite",
      "JWT / Auth",
      "Row Level Security (RLS)",
      "REST API integration",
    ],
  },
  {
    label: "Architecture & Product",
    items: [
      "Offline-first architecture",
      "Local ↔ cloud sync",
      "LAN sync",
      "POS system development",
      "Role-based permissions",
      "Inventory & transaction logic",
      "Thermal receipt printing (CUPS)",
      "Cross-platform desktop builds",
    ],
  },
  {
    label: "DevOps & Deployment",
    items: [
      "Vercel",
      "Netlify",
      "Git / GitHub",
      "GitHub Actions (CI/CD)",
      "Custom domains & DNS",
      "Environment configuration",
    ],
  },
  {
    label: "SEO & Web",
    items: [
      "Technical SEO",
      "JSON-LD structured data",
      "Google Search Console",
      "Bilingual websites",
      "Meta tags, Open Graph, sitemaps",
    ],
  },
  {
    label: "Currently Learning",
    items: ["Python", "Machine Learning", "NLP", "LangChain"],
  },
  {
    label: "Tools & Workflow",
    items: [
      "VS Code",
      "Claude Code / AI-assisted dev",
      "Figma",
      "MDX",
      "Resend + ImprovMX",
      "End-to-end product delivery",
      "Client project delivery",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section mx-auto max-w-6xl px-6 lg:px-10">
      <Stagger>
        <Reveal>
          <SectionHeading num="03" title="Skills" />
        </Reveal>

        <dl className="mt-12 divide-y divide-border border-y border-border">
          {GROUPS.map((group) => (
            <Reveal key={group.label}>
              <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
                <dt className="font-mono text-sm text-accent">
                  {group.label}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="chip rounded-md bg-surface px-3 py-1.5 font-mono text-xs text-text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Stagger>
    </section>
  );
}
