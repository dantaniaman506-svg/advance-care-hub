import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTABanner } from "@/components/site/CTABanner";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Advance Speech and Hearing Clinic" },
      {
        name: "description",
        content:
          "Hearing assessments, hearing aid fittings, cochlear implants, tinnitus management, speech therapy and more, across our Gujarat branches.",
      },
      { property: "og:title", content: "Our Hearing & Speech Services" },
      { property: "og:description", content: "Complete audiology and speech therapy care." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="Our Hearing & Speech Services"
        subtitle="Comprehensive audiology and speech therapy — from newborn screening to advanced hearing aid fitting and cochlear implant support."
      />
      <section className="bg-section py-16">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTABanner variant="primary" />
    </>
  );
}
