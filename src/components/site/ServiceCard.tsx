import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group relative flex flex-col rounded-2xl bg-card border-l-4 border-primary shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 p-6"
    >
      <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {service.oneLiner}
      </p>
      <div className="mt-4 rounded-xl bg-section p-4 border-l-4 border-primary/70">
        <ul className="space-y-1.5 text-sm text-navy/80">
          {service.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
