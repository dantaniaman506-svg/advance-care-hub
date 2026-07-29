import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Clock, ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { services } from "@/data/services";
import { branches } from "@/data/branches";
import { clinic, whatsappLink } from "@/data/clinic";
import { ServiceCard } from "@/components/site/ServiceCard";
import { StatsBar } from "@/components/site/StatsBar";
import { CTABanner } from "@/components/site/CTABanner";
import { Reveal } from "@/components/site/Reveal";
import { AppointmentForm } from "@/components/site/AppointmentForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Advance Speech and Hearing Clinic — Audiology & Speech Care in Gujarat" },
      {
        name: "description",
        content:
          "Trusted audiology and speech therapy care across Gujarat. Hearing assessments, hearing aids, cochlear implants and more, led by Dr. Naim A. Mansuri.",
      },
      { property: "og:title", content: "Advance Speech and Hearing Clinic" },
      { property: "og:description", content: "Trusted hearing and speech care across Gujarat." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: clinic.name,
          telephone: clinic.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shagun-11, Sector 11",
            addressLocality: "Gandhinagar",
            addressRegion: "Gujarat",
            postalCode: "382010",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-section to-background overflow-hidden">
        <div className="container-page relative py-14 sm:py-20 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="eyebrow mb-3">Welcome To</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-navy leading-[1.1]">
              Advance Speech and <span className="text-primary">Hearing Clinic</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
              Trusted audiology and speech therapy care across Gujarat — accurate hearing
              assessments, advanced hearing aid fittings, and complete auditory rehabilitation
              under one roof.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/appointment"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover shadow-sm transition-colors"
              >
                Book Consultation
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card px-6 py-3 text-sm font-semibold text-navy hover:border-primary hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`tel:${clinic.phoneRaw}`}
                className="rounded-2xl bg-primary text-primary-foreground p-6 shadow-lg hover:-translate-y-1 transition-transform"
              >
                <Phone className="h-6 w-6" />
                <div className="mt-4 text-white/80 text-sm">Call / WhatsApp</div>
                <div className="mt-1 text-xl font-bold">{clinic.phone}</div>
                <div className="mt-1 text-xs text-white/70">Quick response, all days</div>
              </a>
              <div className="rounded-2xl bg-navy text-white p-6 shadow-lg">
                <Clock className="h-6 w-6 text-primary" />
                <div className="mt-4 text-white/80 text-sm">Open All Days</div>
                <div className="mt-1 text-xl font-bold">Closes 7:00 PM</div>
                <div className="mt-1 text-xs text-white/70">7 days a week</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About teaser */}
      <section className="container-page py-16 grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/10 via-section to-info/10 border border-border flex items-center justify-center">
            <div className="text-center px-8">
              <div className="text-6xl">🩺</div>
              <p className="mt-4 text-sm text-muted-foreground italic">
                Personalised audiology and speech care at every visit.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="eyebrow mb-3">About Us</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-navy">Advance Speech and Hearing Clinic</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Advance Speech and Hearing Clinic has been serving patients across Gujarat with dedicated
            audiology and speech-language care. Led by Dr. Naim A. Mansuri, our team combines
            clinical expertise with modern diagnostic technology to assess, treat, and manage
            hearing and speech conditions for patients of every age. From our head office in
            Gandhinagar to branches in Patan, Ahmedabad, and Surendranagar, we bring the same
            standard of personalized care to every location.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Know More <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* Services */}
      <section className="bg-section py-16">
        <div className="container-page">
          <Reveal>
            <div className="text-center">
              <div className="eyebrow">Services</div>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-navy">
                Our Hearing & Speech Services
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Doctor teaser */}
      <section className="container-page py-16 grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div className="eyebrow mb-3">Our Doctor</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-navy">Meet Our Specialist</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Dr. Naim A. Mansuri — Consultant Audiologist — leads our team with a focus on precise
            diagnosis and personalized hearing aid fitting. His years of clinical experience across
            Gujarat have helped patients of every age regain clear hearing and confident
            communication.
          </p>
          <Link
            to="/doctors"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy/90 transition-colors"
          >
            More About Us <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-navy to-info flex items-center justify-center text-white">
            <div className="text-center px-8">
              <div className="mx-auto h-24 w-24 rounded-full bg-white/10 grid place-items-center text-4xl">
                👨‍⚕️
              </div>
              <div className="mt-4 text-lg font-semibold">Dr. Naim A. Mansuri</div>
              <div className="text-sm text-white/70">Consultant Audiologist</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Locations + contact */}
      <section className="bg-section py-16">
        <div className="container-page grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="eyebrow">Visit Us</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-navy">Our Branches</h2>
            <p className="mt-3 text-muted-foreground">
              Four locations across Gujarat, same standard of care at every branch.
            </p>
            <div className="mt-6 space-y-4">
              {branches.map((b) => (
                <div key={b.id} className="rounded-xl bg-card border-l-4 border-primary p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="font-semibold text-navy">{b.name}</div>
                      <div className="text-sm text-muted-foreground">{b.address}</div>
                      {b.phone && (
                        <a href={`tel:${b.phone}`} className="mt-1 inline-block text-xs text-primary">
                          {b.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl bg-card border border-border p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-navy">Book an Appointment</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Pick your branch — we'll reach out on WhatsApp to confirm.
              </p>
              <div className="mt-5">
                <AppointmentForm compact />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
