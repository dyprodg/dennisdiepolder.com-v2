export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="absolute inset-0 opacity-70 dark:opacity-60">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-[0.035] dark:opacity-[0.06]" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50/40 dark:to-zinc-950/60" />
    </div>
  );
}
