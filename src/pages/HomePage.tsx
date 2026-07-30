import { Link } from "react-router-dom";
import { Phone, Clock, ArrowRight, CheckCircle, MapPin } from "lucide-react";
import { clinic, whatsappLink } from "@/data/clinic";
import { services } from "@/data/services";
import { branches } from "@/data/branches";
import HeroSlider from "@/components/HeroSlider";
import StatsCounter from "@/components/StatsCounter";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 580 }}
      >
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <HeroSlider className="h-full w-full" />
        </div>

        {/* Gradient overlay: ice-blue on left → transparent on right */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(224,235,248,0.96) 0%, rgba(224,235,248,0.80) 38%, rgba(224,235,248,0.35) 62%, rgba(224,235,248,0) 80%)",
          }}
        />

        {/* Text — left-aligned, directly on gradient */}
        <div className="relative z-20 flex items-center" style={{ minHeight: 580 }}>
          <div className="container-page w-full py-16 lg:py-24">
            <div style={{ maxWidth: 600 }}>
              <p
                className="eyebrow hero-anim"
                style={{ animationDelay: "0.08s" }}
              >
                Welcome To
              </p>
              <h1
                className="hero-anim mt-2 mb-5 font-bold leading-[1.1]"
                style={{
                  color: "#A93539",
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  animationDelay: "0.22s",
                }}
              >
                Advance Speech and Hearing Clinic
              </h1>
              <p
                className="hero-anim text-[#1F2937] leading-relaxed mb-8"
                style={{
                  fontSize: "clamp(0.92rem, 1.5vw, 1.05rem)",
                  animationDelay: "0.38s",
                  maxWidth: 520,
                }}
              >
                Trusted audiology and speech therapy care across Gujarat —
                accurate hearing assessments, advanced hearing aid fittings,
                and complete auditory rehabilitation under one roof.
              </p>
              <div className="hero-anim" style={{ animationDelay: "0.52s" }}>
                <a
                  href={whatsappLink("Hello! I want to book a consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book Consultancy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL US + OPENING HOURS ── */}
      <div className="py-6" style={{ backgroundColor: "#EDF2F7" }}>
        <div className="container-page grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Call Us */}
          <div
            style={{ backgroundColor: "#A93539" }}
            className="p-7 text-white text-center"
          >
            <p className="text-sm font-medium text-white/80 mb-3">Call Us</p>
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="flex items-center justify-center gap-3 text-2xl font-bold hover:opacity-90 transition-opacity"
            >
              <Phone className="h-6 w-6 shrink-0" />
              {clinic.phone}
            </a>
            <p className="text-sm text-white/70 mt-2">Quick Response</p>
          </div>
          {/* Opening Hours */}
          <div
            style={{ backgroundColor: "#1A202C" }}
            className="p-7 text-white text-center"
          >
            <p className="text-sm font-medium text-white/80 mb-3">Opening Hours</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-center gap-8 border-b border-white/10 pb-2">
                <span className="text-white/70">Mon – Sun</span>
                <span className="font-semibold">10:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-center gap-8 text-white/50 text-xs">
                <span>Public Holidays</span>
                <span>Check with us</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="py-16 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative">
              <img
                src="/images/hearing-aids-otoscope.png"
                alt="Hearing aids and audiometry equipment — Advance Speech and Hearing Clinic"
                className="w-full object-cover rounded-sm shadow-lg"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C] mb-4">
              Advance Speech &amp; Hearing Clinic
            </h2>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              Hearing loss is a common condition that can affect people of all
              ages and, if left untreated, may significantly impact daily life.
              It can make conversations difficult to understand, cause people to
              avoid social situations, create feelings of loneliness, and
              contribute to frustration and reduced mental well-being.
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-6">
              Advance Speech &amp; Hearing Clinic offers comprehensive hearing
              care services — hearing assessments, hearing aid fitting,
              programming, adjustment, maintenance, and repair — across multiple
              branches in Gujarat including Gandhinagar, Ahmedabad, Surendranagar,
              Patan, Mehsana, and Himmatnagar.
            </p>
            <Link to="/about" className="btn-primary">
              Know More
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── HEARING LOSS INFO ── */}
      <section style={{ backgroundColor: "#EDF2F7" }} className="py-16">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="eyebrow mb-3">Why Hearing Care Matters</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C] mb-5">
              Understanding Hearing Loss &amp; Its Impact
            </h2>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              A hearing evaluation is a quick, simple, and painless process
              performed by a qualified audiologist in a soundproof room using
              advanced diagnostic equipment. After reviewing your medical history
              and assessing your hearing, the audiologist determines the type and
              degree of hearing loss and recommends the most suitable hearing aid
              if needed.
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-6">
              Modern digital hearing aids improve speech clarity, enhance
              communication, make phone conversations easier, and help individuals
              stay socially active. Contrary to common myths, hearing aids do not
              worsen hearing — they are carefully programmed for each person's
              unique hearing needs.
            </p>
            <a
              href={whatsappLink("Hello! I'd like to book a hearing evaluation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Free Evaluation
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  title: "Hearing Aid Styles Available",
                  items: [
                    "Behind-the-Ear (BTE)",
                    "Mini Behind-the-Ear (Mini BTE)",
                    "Receiver-in-Canal (RIC)",
                    "In-the-Canal (ITC)",
                    "Completely-in-Canal (CIC)",
                    "Rechargeable Hearing Aids",
                  ],
                },
              ].map((group) => (
                <div
                  key={group.title}
                  className="bg-white p-6 shadow-sm"
                  style={{ borderLeft: "4px solid #A93539" }}
                >
                  <h4 className="font-bold text-[#1A202C] mb-4">{group.title}</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#4A5568]">
                        <CheckCircle className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#A93539" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div
                className="bg-white p-6 shadow-sm"
                style={{ borderLeft: "4px solid #1A202C" }}
              >
                <h4 className="font-bold text-[#1A202C] mb-3">Benefits of Two Hearing Aids</h4>
                <ul className="space-y-2">
                  {[
                    "Better speech understanding in noise",
                    "Improved sound quality & balance",
                    "Enhanced directional hearing",
                    "More natural listening experience",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#4A5568]">
                      <CheckCircle className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#A93539" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-2">Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C]">
                Our Hearing Services
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  to={`/services/${s.slug}`}
                  className="service-card block p-6 h-full"
                >
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "#A93539" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#54595F] leading-relaxed mb-4">
                    {s.oneLiner}
                  </p>
                  <ul className="space-y-1.5">
                    {s.bullets.slice(0, 4).map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-[#4A5568]"
                      >
                        <span className="mt-1 shrink-0">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsCounter />

      {/* ── CTA BANNER ── */}
      <section style={{ backgroundColor: "#A93539" }} className="py-12">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-1 text-white">
              Book a Free Hearing Consultation
            </h3>
            <p className="text-white/80 text-sm">
              Multiple locations across Gujarat • Open all 7 days • Dr. Naim A.
              Mansuri
            </p>
          </div>
          <a
            href={whatsappLink("Hello! I'd like to book a free hearing consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 btn-navy text-sm"
          >
            WhatsApp Us Now
          </a>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section style={{ backgroundColor: "#EDF2F7" }} className="py-16">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-10">
              <p className="eyebrow mb-2">Our Branches</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C]">
                Visit Us
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {branches.map((b, i) => (
              <Reveal key={b.id} delay={i * 80}>
                <div className="bg-white p-5 h-full service-card">
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#A93539" }}
                  >
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-[#1A202C] text-base mb-2">
                    {b.name}
                  </h3>
                  <p className="text-sm text-[#54595F] leading-relaxed mb-3">
                    {b.address}
                  </p>
                  {b.phone && (
                    <a
                      href={`tel:${b.phone.replace(/\s/g, "")}`}
                      className="text-sm font-medium flex items-center gap-1.5 mb-1"
                      style={{ color: "#A93539" }}
                    >
                      <Phone className="h-3.5 w-3.5" /> {b.phone}
                    </a>
                  )}
                  <div className="text-xs text-[#718096] flex items-center gap-1.5 mt-2">
                    <Clock className="h-3 w-3" style={{ color: "#A93539" }} />
                    Open All Days — Closes 7 PM
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/locations" className="btn-primary">
              View All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT CTA ── */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #A93539 0%, #8B2B2E 100%)" }}
      >
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="eyebrow mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
              Book Appointment
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Improve Your Hearing?
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Don't let hearing loss hold you back. Book an appointment at any
              of our Gujarat locations. Our specialist team is here to help
              you every step of the way — from assessment to fitting to
              long-term care.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/appointment" className="btn-navy">
                Book Appointment
              </Link>
              <a
                href={whatsappLink("Hello! I'd like to enquire about an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-white/50 text-white font-semibold text-sm hover:border-white hover:bg-white/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "6 Locations",
                  desc: "Gandhinagar, Ahmedabad, Patan, Surendranagar, Mehsana & Himmatnagar",
                },
                {
                  title: "Open 7 Days",
                  desc: "We are open every day of the week",
                },
                {
                  title: "Expert Doctor",
                  desc: "Dr. Naim A. Mansuri — Consultant Audiologist",
                },
                {
                  title: "All Ages",
                  desc: "Serving infants, children, adults & seniors",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.12)",
                    borderLeft: "3px solid rgba(255,255,255,0.6)",
                  }}
                >
                  <h4 className="font-bold text-white text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
