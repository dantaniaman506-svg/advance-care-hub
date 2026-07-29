import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { PageBanner } from "@/components/site/PageBanner";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { Reveal } from "@/components/site/Reveal";
import { branches } from "@/data/branches";
import { clinic, whatsappLink } from "@/data/clinic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Advance Speech and Hearing Clinic" },
      {
        name: "description",
        content:
          "Call, WhatsApp, or visit Advance Speech and Hearing Clinic. Four branches across Gujarat, open all days, closes 7 PM.",
      },
      { property: "og:title", content: "Contact Advance Speech and Hearing Clinic" },
      { property: "og:description", content: "Get in touch with our audiology team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Have a question, need advice, or ready to book? We'd love to hear from you."
      />
      <section className="container-page py-14 grid lg:grid-cols-2 gap-10">
        <Reveal>
          <div className="space-y-4">
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="flex items-center gap-3 rounded-xl bg-card border-l-4 border-primary p-4 shadow-sm hover:-translate-y-0.5 transition-transform"
            >
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Call</div>
                <div className="font-semibold text-navy">{clinic.phone}</div>
              </div>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-card border-l-4 border-primary p-4 shadow-sm hover:-translate-y-0.5 transition-transform"
            >
              <MessageCircle className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</div>
                <div className="font-semibold text-navy">Chat with us instantly</div>
              </div>
            </a>
            <a
              href="mailto:info@advancehearing.in"
              className="flex items-center gap-3 rounded-xl bg-card border-l-4 border-primary p-4 shadow-sm hover:-translate-y-0.5 transition-transform"
            >
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                <div className="font-semibold text-navy">info@advancehearing.in</div>
              </div>
            </a>

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-navy mb-3">Our Branches</h3>
              <div className="space-y-3">
                {branches.map((b) => (
                  <div key={b.id} className="rounded-xl bg-section p-4">
                    <div className="flex gap-2">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-navy text-sm">{b.name}</div>
                        <div className="text-xs text-muted-foreground">{b.address}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-2xl bg-card border border-border p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-navy">Send a Message</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              We'll open WhatsApp with your details ready to send.
            </p>
            <div className="mt-5">
              <AppointmentForm />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
