import { Link } from "@tanstack/react-router";

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="inline-flex items-baseline gap-1.5 leading-none">
      <span
        className={`font-semibold tracking-tight text-navy ${compact ? "text-lg" : "text-xl sm:text-2xl"}`}
        style={{ fontFamily: "var(--font-slab)" }}
      >
        Advance
      </span>
      <span
        className={`font-semibold tracking-tight text-primary ${compact ? "text-lg" : "text-xl sm:text-2xl"}`}
        style={{ fontFamily: "var(--font-slab)" }}
      >
        Hearing
      </span>
      <span className="hidden sm:inline text-[11px] uppercase tracking-[0.25em] text-muted-foreground ml-1">
        Clinic
      </span>
    </Link>
  );
}
