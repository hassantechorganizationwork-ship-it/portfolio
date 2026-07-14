export default function SectionHeading({ label }) {
  return (
    <div className="mx-auto flex w-fit flex-col items-center gap-3 text-center md:mx-0 md:items-start md:text-left">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-text-dim">
        {label}
      </span>
      <div className="h-1 w-full rounded-full bg-gradient-to-r from-purple via-pink to-blue" />
    </div>
  );
}
