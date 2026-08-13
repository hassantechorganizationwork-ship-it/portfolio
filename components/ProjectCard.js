export default function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="card group flex h-full flex-col rounded-xl p-7"
    >
      <h3 className="font-heading text-xl font-semibold tracking-[-0.01em] text-text-primary">
        {project.name}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-text-muted">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="chip rounded-md px-2.5 py-1 font-mono text-xs text-text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-accent transition-colors duration-250 group-hover:text-accent-light">
        Visit
        <span className="transition-transform duration-250 group-hover:translate-x-1.5">
          →
        </span>
      </span>
    </a>
  );
}
