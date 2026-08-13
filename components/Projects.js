import Reveal, { Stagger } from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    name: "Posify",
    description:
      "Offline-first desktop POS for small and medium businesses, built end-to-end solo. Includes a client web portal, role-based permissions, LAN sync, and secure cloud sync.",
    stack: [
      "Next.js",
      "React",
      "Tauri",
      "Rust",
      "TypeScript",
      "SQLite",
      "Supabase",
    ],
    href: "https://posify.pk",
  },
  {
    name: "Dove Inn Hotel",
    description:
      "Full hotel booking website with a room booking flow, guest accounts, admin management portal, live currency converter, and WhatsApp inquiry integration.",
    stack: ["Next.js", "Supabase", "Tailwind CSS"],
    href: "https://doveinn-five.vercel.app/",
  },
  {
    name: "Safa Al Ibda",
    description:
      "Bilingual marketing website for a Saudi-based electronics repair business, with SEO, structured data, and Google Search Console verification.",
    stack: ["React", "Vite", "Tailwind CSS"],
    href: "https://safaalibda.com",
  },
  {
    name: "Home Chef",
    description:
      "Flutter-based home-cooked food marketplace with real-time buyer-seller chat, Supabase auth, and a Next.js admin panel.",
    stack: ["Flutter", "Supabase", "Next.js"],
    href: "https://homechef-web.netlify.app",
  },
];

export default function Projects() {
  return (
    <section id="work" className="section mx-auto max-w-6xl px-6 lg:px-10">
      <Stagger>
        <Reveal>
          <SectionHeading num="02" title="Selected Work" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <Reveal key={project.name} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Stagger>
    </section>
  );
}
