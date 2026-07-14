export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto flex max-w-5xl items-center gap-4 px-6 sm:px-10"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-glass-border to-glass-border" />
      <span className="h-1.5 w-1.5 rotate-45 rounded-[2px] bg-gradient-to-br from-purple via-pink to-blue" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-glass-border to-glass-border" />
    </div>
  );
}
