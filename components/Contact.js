import { Mail, Phone, Store } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import Reveal, { Stagger } from "./Reveal";

const LINKS = [
  {
    label: "Email",
    href: "mailto:hassanshafiq03240041300@gmail.com",
    Icon: Mail,
  },
  { label: "Phone", href: "tel:+923174065200", Icon: Phone },
  { label: "Fiverr", href: "https://www.fiverr.com/s/Zm7vl5j", Icon: Store },
  {
    label: "GitHub",
    href: "https://github.com/hassantechorganizationwork-ship-it",
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hassan9211/",
    Icon: LinkedinIcon,
  },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="section mx-auto max-w-3xl px-6 text-center lg:px-10"
    >
      <Stagger>
        <Reveal>
          <p className="font-mono text-sm text-accent">06 / Contact</p>
        </Reveal>

        <Reveal>
          <h2 className="mt-6 font-heading text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            Let&apos;s work together.
          </h2>
        </Reveal>

        <Reveal>
          <p className="mt-5 text-lg text-text-muted">
            Open to freelance projects and collaboration.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="btn card inline-flex items-center gap-2 rounded-md px-5 py-3 font-mono text-sm text-text-muted hover:text-accent-light"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
                {label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-20 font-mono text-xs text-text-muted">
            © 2026 Hassan Shafiq · Built with Next.js
          </p>
        </Reveal>
      </Stagger>
    </footer>
  );
}
