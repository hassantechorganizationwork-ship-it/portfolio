import { Download, Mail, Phone, Store } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import Reveal from "./Reveal";

const LINKS = [
  {
    label: "Email",
    href: "mailto:hassanshafiq03240041300@gmail.com",
    Icon: Mail,
    color: "#EA4335",
  },
  {
    label: "Phone",
    href: "tel:+923174065200",
    Icon: Phone,
    color: "#4ADE80",
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/s/Zm7vl5j",
    Icon: Store,
    color: "#1DBF73",
  },
  {
    label: "GitHub",
    href: "https://github.com/hassantechorganizationwork-ship-it",
    Icon: GithubIcon,
    color: "#F8FAFC",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hassan9211/",
    Icon: LinkedinIcon,
    color: "#0A66C2",
  },
];

export default function Footer() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-6 py-28 text-center sm:px-10"
    >
      <Reveal>
        <h2 className="gradient-text font-heading text-4xl font-bold sm:text-5xl">
          Let&apos;s build something.
        </h2>
        <p className="mt-4 text-base text-text-dim sm:text-lg">
          Open to freelance work &amp; collaboration.
        </p>

        <a
          href="/resume.pdf"
          download
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple via-pink to-blue px-8 py-3.5 font-mono text-sm font-medium text-text-primary shadow-[0_0_25px_rgba(124,58,237,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(236,72,153,0.55)] active:scale-100"
        >
          <Download className="h-4 w-4" strokeWidth={1.75} />
          Download resume
        </a>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {LINKS.map(({ label, href, Icon, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="gradient-border glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm text-text-primary transition-all hover:scale-105"
            >
              <Icon className="h-4 w-4" style={{ color }} strokeWidth={1.75} />
              {label}
            </a>
          ))}
        </div>

        <p className="mt-16 font-mono text-xs text-text-dim">
          hassanshafiq03240041300@gmail.com &middot; 0317 4065200
        </p>

        <p className="mt-4 text-xs text-text-dim">
          Built with Next.js &amp; Tailwind CSS.
        </p>
      </Reveal>
    </section>
  );
}
