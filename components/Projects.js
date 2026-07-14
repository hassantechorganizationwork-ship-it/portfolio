import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    tag: "Flagship",
    title: "Posify",
    outcome:
      "Offline-first desktop POS built solo from the ground up: a client portal (portal.posify.pk), custom role-based permissions, LAN sync (Phase 1), and JWT-secured cloud sync.",
    stack: ["Tauri 2.0", "Rust", "React", "TypeScript", "SQLite", "Supabase"],
    href: "https://posify.pk",
  },
  {
    tag: "Client",
    title: "Safa Al Ibda",
    outcome:
      "Bilingual marketing site for a Saudi Arabia–based electronics repair business — bilingual SEO, JSON-LD structured data, custom domain, indexed and verified on Google Search Console.",
    stack: ["React", "Vite", "Tailwind CSS"],
    href: "https://safaalibda.com",
  },
  {
    tag: "Marketplace",
    title: "Home Chef (under development)",
    outcome:
      "Flutter-based home-cooked food marketplace with Supabase auth, real-time buyer-seller chat, and a Next.js admin panel for managing listings and orders.",
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
