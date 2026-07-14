export default function GradientBlobs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="blob blob-drift h-[420px] w-[420px] bg-purple sm:h-[560px] sm:w-[560px]"
        style={{ top: "-8%", left: "-10%" }}
      />
      <div
        className="blob blob-drift-slow h-[380px] w-[380px] bg-pink sm:h-[500px] sm:w-[500px]"
        style={{ top: "20%", right: "-12%" }}
      />
      <div
        className="blob blob-drift h-[360px] w-[360px] bg-blue sm:h-[480px] sm:w-[480px]"
        style={{ bottom: "-10%", left: "20%" }}
      />
    </div>
  );
}
