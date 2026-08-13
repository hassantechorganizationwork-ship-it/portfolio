export default function SectionHeading({ num, title }) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-accent">{num}</span>
        <span className="font-mono text-sm text-text-muted">/</span>
        <h2 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-text-primary sm:text-3xl">
          {title}
        </h2>
        <span className="ml-2 hidden h-px flex-1 bg-border sm:block" />
      </div>
      <span className="mt-3 block h-px w-24 bg-gradient-to-r from-accent to-transparent" />
    </div>
  );
}
