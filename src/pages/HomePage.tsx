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
                src="/images/clinic3.webp"
                alt="Advance Speech and Hearing Clinic"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80";
                }}
              />
              {/* Experience badge */}
              <div
                className="absolute -bottom-4 -right-4 w-28 h-28 flex flex-col items-center justify-center text-white shadow-xl"
                style={{ backgroundColor: "#A93539" }}
              >
                <span className="text-3xl font-bold leading-none">35+</span>
                <span className="text-xs text-center leading-tight mt-1 px-2">
                  Years Experience
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C] mb-4">
              Advance Speech and Hearing Clinic
            </h2>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              Advance Speech and Hearing Clinic stands as a trusted centre for
              audiological and speech therapy care across Gujarat. With clinics
              in Gandhinagar, Patan, Ahmedabad, and Surendranagar, we bring
              specialist-level care close to our patients.
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-6">
              Led by Dr. Naim A. Mansuri — Consultant Audiologist — our team
              provides accurate hearing assessments, advanced digital hearing aid
              fittings, cochlear implant support, speech therapy, and tinnitus
              management, using calibrated equipment and evidence-based
              practices tailored to their specific needs.
            </p>
            <Link to="/about" className="btn-primary">
              Know More
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ backgroundColor: "#EDF2F7" }} className="py-16">
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
              View All Service
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
              4 locations across Gujarat • Open all 7 days • Dr. Naim A.
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

      {/* ── DOCTOR ── */}
      <section className="py-16 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="eyebrow mb-3">Our Doctors</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C] mb-4">
              Trusted Specialist Doctors
            </h2>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              At Advance Speech and Hearing Clinic, we believe that every
              individual deserves the full richness of sound. Since our
              inception, our mission has been to empower lives through improved
              hearing health — because we know that better hearing leads to
              better living.
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-6">
              Led by Dr. Naim A. Mansuri — Consultant Audiologist with over
              35 years of clinical experience — our team serves patients of all
              ages across 4 locations in Gujarat with compassionate, evidence-based
              care.
            </p>
            <Link to="/doctors" className="btn-primary">
              More About Us
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="p-8 text-white"
              style={{ backgroundColor: "#2D3748" }}
            >
              {/* Doctor name & title */}
              <div
                className="pb-6 mb-6"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
              >
                <h3 className="text-2xl font-bold text-white">
                  Dr. Naim A. Mansuri
                </h3>
                <p style={{ color: "#A93539" }} className="text-sm font-medium mt-1">
                  Consultant Audiologist
                </p>
                <p className="text-white/60 text-sm mt-3 leading-relaxed">
                  M.Sc. (Audiology & Speech-Language Pathology) •
                  Registered Audiologist • Gujarat
                </p>
              </div>
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "35+", label: "Years Experience" },
                  { value: "1,200+", label: "Patients Treated" },
                  { value: "4", label: "Clinic Locations" },
                  { value: "7", label: "Days a Week" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="text-center py-4"
                    style={{ borderTop: "2px solid #A93539" }}
                  >
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#A93539" }}
                    >
                      {item.value}
                    </div>
                    <div className="text-xs text-white/50 mt-1 uppercase tracking-wide">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
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
        style={{ background: "linear-gradient(135deg, #1A202C 0%, #2D3748 100%)" }}
      >
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="eyebrow mb-3" style={{ color: "#A93539" }}>
              Book Appointment
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Improve Your Hearing?
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Don't let hearing loss hold you back. Book an appointment at any
              of our 4 Gujarat locations. Our specialist team is here to help
              you every step of the way.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/appointment" className="btn-primary">
                Book Appointment
              </Link>
              <a
                href={whatsappLink("Hello! I'd like to enquire about an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-white/30 text-white font-semibold text-sm hover:border-white hover:bg-white/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "4 Locations",
                  desc: "Gandhinagar, Patan, Ahmedabad & Surendranagar",
                },
                {
                  title: "Open 7 Days",
                  desc: "We are open every day of the week",
                },
                {
                  title: "Expert Doctor",
                  desc: "Dr. Naim A. Mansuri — 35+ years experience",
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
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderLeft: "3px solid #A93539",
                  }}
                >
                  <h4 className="font-bold text-white text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed">
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
