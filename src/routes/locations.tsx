import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { PageBanner } from "@/components/site/PageBanner";
import { CTABanner } from "@/components/site/CTABanner";
import { Reveal } from "@/components/site/Reveal";
import { branches } from "@/data/branches";
import { clinic, whatsappLink } from "@/data/clinic";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Our Locations — Advance Speech and Hearing Clinic" },
      {
        name: "description",
        content:
          "Visit Advance Speech and Hearing Clinic at our Gandhinagar, Patan, Ahmedabad, or Surendranagar branches. Open all days, closes 7 PM.",
      },
      { property: "og:title", content: "Our Locations Across Gujarat" },
      { property: "og:description", content: "Four branches across Gujarat." },
      { property: "og:url", content: "/locations" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: Locations,
});

function Locations() {
  return (
    <>
      <PageBanner
        eyebrow="Locations"
        title="Visit Us"
        subtitle="Four branches across Gujarat, same standard of care at every clinic."
      />
      <section className="container-page py-14 space-y-8">
        {branches.map((b, i) => (
          <Reveal key={b.id} delay={i * 60}>
            <div className="rounded-2xl bg-card border border-border shadow-sm overflow-hidden grid md:grid-cols-2">
              <div className="aspect-[16/10] md:aspect-auto bg-section">
                <iframe
                  title={`Map of ${b.name}`}
                  src={b.mapEmbed}
                  className="h-full w-full min-h-[240px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6 md:p-8 border-l-4 md:border-l-4 border-primary">
                <h3 className="text-xl md:text-2xl font-semibold text-navy">{b.name}</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex gap-2 text-navy/80">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </div>
                  <a href={`tel:${(b.phone ?? clinic.phone).replace(/\s+/g, "")}`} className="flex items-center gap-2 text-navy/80 hover:text-primary">
                    <Phone className="h-4 w-4 text-primary" /> {b.phone ?? clinic.phone}
                  </a>
                  <a
                    href={whatsappLink(`Hello, I'd like to book an appointment at your ${b.name} branch.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-navy/80 hover:text-primary"
                  >
                    <MessageCircle className="h-4 w-4 text-primary" /> Chat on WhatsApp
                  </a>
                  <div className="flex items-center gap-2 text-navy/80">
                    <Clock className="h-4 w-4 text-primary" /> Open All Days — Closes 7:00 PM
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/appointment"
                    search={{ branch: b.id } as never}
                    className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
                  >
                    Book at this Branch
                  </Link>
                  <a
                    href={b.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy hover:border-primary hover:text-primary transition-colors"
                  >
                    Get Directions <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
      <CTABanner variant="primary" />
    </>
  );
}
