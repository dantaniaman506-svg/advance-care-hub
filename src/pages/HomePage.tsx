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
      <section className="relative overflow-hidden" style={{ backgroundColor: "#EDF2F7", minHeight: 520 }}>
        <div className="container-page relative z-10">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Text side */}
            <div className="py-16 lg:py-24 pr-0 lg:pr-8">
              <p className="eyebrow mb-3">Welcome To</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-tight mb-5" style={{ color: "#A93539" }}>
                Advance Speech and<br />Hearing Clinic
              </h1>
              <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed mb-8 max-w-lg">
                Trusted audiology and speech therapy care across Gujarat — accurate hearing
                assessments, advanced hearing aid fittings, and complete auditory rehabilitation
                under one roof.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={whatsappLink("Hello! I want to book a consultation.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book Consultancy
                </a>
                <Link to="/about" className="btn-navy">
                  Know More
                </Link>
              </div>
            </div>

            {/* Image slider side */}
            <div className="hidden lg:block h-[520px] relative">
              <HeroSlider className="absolute inset-0 h-full w-full" />
              {/* Overlay gradient on left edge */}
              <div
                className="absolute inset-y-0 left-0 w-16 z-10"
                style={{
                  background: "linear-gradient(to right, #EDF2F7, transparent)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Mobile slider (below text) */}
        <div className="lg:hidden w-full h-60 relative">
          <HeroSlider className="h-full w-full" />
        </div>

        {/* Call Us + Hours floating boxes */}
        <div
          className="relative z-20 -mb-px"
          style={{ marginTop: "-1px" }}
        >
          <div className="container-page">
            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl ml-auto">
              {/* Call Us */}
              <div style={{ backgroundColor: "#A93539" }} className="p-6 text-white text-center">
                <p className="text-sm font-medium text-white/80 mb-2">Call Us</p>
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
              <div style={{ backgroundColor: "#1A202C" }} className="p-6 text-white text-center">
                <p className="text-sm font-medium text-white/80 mb-3">Opening Hours</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between gap-6 border-b border-white/10 pb-2">
                    <span className="text-white/70">Mon – Sun</span>
                    <span className="font-semibold">10:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-6 text-white/50">
                    <span>Public Holidays</span>
                    <span>Check with us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              {/* Badge */}
              <div
                className="absolute -bottom-4 -right-4 w-28 h-28 flex flex-col items-center justify-center text-white shadow-xl"
                style={{ backgroundColor: "#A93539" }}
              >
                <span className="text-3xl font-bold leading-none">35+</span>
                <span className="text-xs text-center leading-tight mt-1 px-2">Years Experience</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C] mb-4">
              Advance Speech and Hearing Clinic
            </h2>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              Advance Speech and Hearing Clinic stands as a trusted centre for audiological and
              speech therapy care across Gujarat. With clinics in Gandhinagar, Patan, Ahmedabad, and
              Surendranagar, we bring specialist-level care close to our patients.
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-6">
              Led by Dr. Naim A. Mansuri — Consultant Audiologist — our team provides accurate
              hearing assessments, advanced digital hearing aid fittings, cochlear implant support,
              speech therapy, and tinnitus management, using calibrated equipment and
              evidence-based practices.
            </p>
            <ul className="space-y-2 mb-7">
              {[
                "Advanced diagnostic equipment",
                "Experienced audiologists & speech therapists",
                "4 convenient locations across Gujarat",
                "Open all 7 days a week",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#54595F]">
                  <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#A93539" }} />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-primary">
              Know More <ArrowRight className="h-4 w-4" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C]">Our Hearing Services</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  to={`/services/${s.slug}`}
                  className="service-card block p-6 h-full"
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="text-lg font-bold text-[#1A202C] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#54595F] leading-relaxed mb-4">{s.oneLiner}</p>
                  <ul className="space-y-1.5">
                    {s.bullets.slice(0, 4).map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-[#4A5568]">
                        <span style={{ color: "#A93539", marginTop: 2 }}>●</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-sm font-semibold flex items-center gap-1" style={{ color: "#A93539" }}>
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </div>
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
          <div className="text-white text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-1">Book a Free Hearing Consultation</h3>
            <p className="text-white/80 text-sm">
              4 locations across Gujarat • Open all 7 days • Dr. Naim A. Mansuri
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
            <p className="eyebrow mb-3">Our Doctor</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C] mb-4">
              Meet Our Specialist
            </h2>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              Dr. Naim A. Mansuri is a Consultant Audiologist with over 35 years of clinical
              experience across Gujarat. He specialises in precise audiological diagnosis,
              personalised hearing aid fitting, cochlear implant candidacy assessment, and
              auditory rehabilitation.
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-6">
              His patient-centred approach — combining state-of-the-art diagnostic tools with
              compassionate care — has helped thousands of patients across all age groups regain
              clear hearing and confident communication.
            </p>
            <Link to="/doctors" className="btn-primary">
              More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="flex flex-col items-center justify-center py-14 px-8 text-white"
              style={{ backgroundColor: "#2D3748" }}
            >
              <div
                className="w-24 h-24 flex items-center justify-center mb-5 text-4xl"
                style={{ backgroundColor: "#A93539" }}
              >
                👨‍⚕️
              </div>
              <h3 className="text-xl font-bold text-white text-center">Dr. Naim A. Mansuri</h3>
              <p className="text-white/60 text-sm mt-1 text-center">Consultant Audiologist</p>
              <div className="mt-6 grid grid-cols-2 gap-4 w-full text-center">
                <div className="py-3" style={{ borderTop: "2px solid #A93539" }}>
                  <div className="text-2xl font-bold text-white">35+</div>
                  <div className="text-xs text-white/50 mt-1">Years Experience</div>
                </div>
                <div className="py-3" style={{ borderTop: "2px solid #A93539" }}>
                  <div className="text-2xl font-bold text-white">1,200+</div>
                  <div className="text-xs text-white/50 mt-1">Patients Treated</div>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C]">Visit Us</h2>
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
                  <h3 className="font-bold text-[#1A202C] text-base mb-2">{b.name}</h3>
                  <p className="text-sm text-[#54595F] leading-relaxed mb-3">{b.address}</p>
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
        style={{
          background: "linear-gradient(135deg, #1A202C 0%, #2D3748 100%)",
        }}
      >
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="eyebrow mb-3" style={{ color: "#A93539" }}>Book Appointment</p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Improve Your Hearing?
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Don't let hearing loss hold you back. Book an appointment at any of our 4 Gujarat
              locations. Our specialist team is here to help you every step of the way.
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
                { icon: "🏥", title: "4 Locations", desc: "Gandhinagar, Patan, Ahmedabad & Surendranagar" },
                { icon: "📅", title: "Open 7 Days", desc: "We are open every day of the week" },
                { icon: "👨‍⚕️", title: "Expert Doctor", desc: "Dr. Naim A. Mansuri — 35+ years experience" },
                { icon: "✅", title: "All Ages", desc: "Serving infants, children, adults & seniors" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", borderLeft: "3px solid #A93539" }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
