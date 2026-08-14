import { Mail, Phone, Store } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "./icons/BrandIcons";
import Reveal, { Stagger } from "./Reveal";

const LINKS = [
  {
    label: "Email",
    href: "mailto:hassanshafiq03240041300@gmail.com",
    Icon: Mail,
    brand: "#EA4335",
    glow: "rgba(234, 67, 53, 0.32)",
  },
  {
    label: "Phone",
    href: "tel:+923174065200",
    Icon: Phone,
    brand: "#34D399",
    glow: "rgba(52, 211, 153, 0.32)",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923174065200",
    Icon: WhatsappIcon,
    brand: "#25D366",
    glow: "rgba(37, 211, 102, 0.32)",
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/s/Zm7vl5j",
    Icon: Store,
    brand: "#1DBF73",
    glow: "rgba(29, 191, 115, 0.32)",
  },
  {
    label: "GitHub",
    href: "https://github.com/hassantechorganizationwork-ship-it",
    Icon: GithubIcon,
    brand: "#F4F6F5",
    glow: "rgba(244, 246, 245, 0.28)",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hassan9211/",
    Icon: LinkedinIcon,
    brand: "#0A66C2",
    glow: "rgba(10, 102, 194, 0.42)",
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
            {LINKS.map(({ label, href, Icon, brand, glow }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                style={{ "--brand": brand, "--brand-glow": glow }}
                className="contact-link inline-flex items-center gap-2 rounded-md px-5 py-3 font-mono text-sm text-text-muted"
              >
                <Icon
                  className="h-4 w-4 shrink-0"
                  style={{ color: brand }}
                  strokeWidth={1.75}
                />
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
