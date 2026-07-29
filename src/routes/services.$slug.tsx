import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getService, services } from "@/data/services";
import { PageBanner } from "@/components/site/PageBanner";
import { OpeningHours } from "@/components/site/OpeningHours";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { CTABanner } from "@/components/site/CTABanner";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found — Advance Speech and Hearing Clinic" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.title} — Advance Speech and Hearing Clinic` },
        { name: "description", content: s.oneLiner },
        { property: "og:title", content: `${s.title} — Advance Hearing` },
        { property: "og:description", content: s.oneLiner },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-3xl font-semibold text-navy">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-primary font-medium">
        Back to all services →
      </Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageBanner eyebrow="Service" title={service.title} subtitle={service.oneLiner} />
      <section className="container-page py-14 grid lg:grid-cols-[1fr_360px] gap-10">
        <Reveal>
          <div className="space-y-10">
            <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-primary/10 via-section to-info/10 border border-border grid place-items-center">
              <div className="text-6xl">🩺</div>
            </div>
            {service.sections.map((sec) => (
              <div key={sec.heading}>
                <h2 className="text-xl md:text-2xl font-semibold text-navy">{sec.heading}</h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="mt-3 text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
                {sec.bullets && (
                  <ul className="mt-4 space-y-2">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-navy/80">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="rounded-2xl bg-section p-6 border-l-4 border-primary">
              <h3 className="font-semibold text-navy">What's included</h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                {service.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-navy/80">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            <OpeningHours />
            <div className="rounded-2xl bg-card border border-border p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-navy">Make Your Appointment</h3>
              <div className="mt-4">
                <AppointmentForm compact defaultService={service.title} />
              </div>
            </div>
          </aside>
        </Reveal>
      </section>

      <section className="bg-section py-14">
        <div className="container-page">
          <h3 className="text-xl font-semibold text-navy">Explore other services</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="rounded-xl bg-card border-l-4 border-primary p-4 shadow-sm hover:-translate-y-1 transition-transform"
              >
                <div className="font-semibold text-primary text-sm">{o.title}</div>
                <div className="mt-2 inline-flex items-center gap-1 text-xs text-navy/70">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
