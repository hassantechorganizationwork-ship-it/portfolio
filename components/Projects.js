import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    tag: "Flagship",
    title: "Posify",
    outcome:
      "Offline-first desktop POS built solo from the ground up for Pakistani SMBs.",
    features: [
      "Client portal at portal.posify.pk",
      "Custom role-based permissions system",
      "LAN sync (Phase 1)",
      "JWT-secured cloud sync",
      "Native Rust layer under Tauri, built end-to-end solo",
    ],
    stack: ["Tauri 2.0", "Rust", "React", "TypeScript", "SQLite", "Supabase"],
    href: "https://posify.pk",
  },
  {
    tag: "Client",
    title: "Safa Al Ibda",
    outcome:
      "Bilingual marketing site for a Saudi Arabia–based electronics repair business.",
    features: [
      "Bilingual (Arabic/English) content and SEO",
      "JSON-LD structured data for rich search results",
      "Custom domain setup",
      "Indexed and verified on Google Search Console",
    ],
    stack: ["React", "Vite", "Tailwind CSS"],
    href: "https://safaalibda.com",
  },
  {
    tag: "Marketplace",
    title: "Home Chef (under development)",
    outcome:
      "Flutter-based home-cooked food marketplace connecting home cooks with buyers.",
    features: [
      "Supabase authentication",
      "Real-time buyer-seller chat",
      "Next.js admin panel for listings and orders",
      "Cross-platform mobile app built with Flutter",
    ],
    stack: ["Flutter", "Supabase", "Next.js"],
    href: "https://homechef-web.netlify.app",
  },
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-28 sm:px-10">
      <Reveal>
        <SectionHeading label="Work" />
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <Reveal key={project.title}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
