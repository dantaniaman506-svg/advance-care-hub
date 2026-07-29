import type { ReactNode } from "react";

export function PageBanner({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-gradient-to-br from-section via-background to-section border-b border-border overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--color-primary) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--color-navy) 0, transparent 45%)" }} />
      <div className="container-page relative py-14 sm:py-20">
        {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy max-w-3xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
