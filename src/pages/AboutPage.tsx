import { CheckCircle, Award, Users, MapPin, Microscope, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import StatsCounter from "@/components/StatsCounter";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Trusted audiology and speech therapy care across Gujarat"
        breadcrumb={[{ label: "About Us" }]}
      />

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img
              src="/images/clinic1.webp"
              alt="Advance Speech & Hearing Clinic"
              className="w-full object-cover"
              style={{ aspectRatio: "4/3" }}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80";
              }}
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C] mb-4">
              Advance Speech & Hearing Clinic
            </h2>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              Founded on a commitment to accessible, high-quality audiological care, Advance Speech
              and Hearing Clinic has grown to serve patients across Gujarat from four convenient
              locations in Gandhinagar, Patan, Ahmedabad, and Surendranagar.
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-5">
              Our clinic offers the full spectrum of audiology and speech therapy services — from
              newborn hearing screening to complex cochlear implant candidacy assessments — all
              under one roof, led by our Consultant Audiologist Dr. Naim A. Mansuri.
            </p>
            <ul className="space-y-2.5">
              {[
                "Calibrated, state-of-the-art diagnostic equipment",
                "Evidence-based treatment protocols",
                "Personalised care for every age group",
                "4 branches — open all 7 days, closes 7 PM",
                "WhatsApp appointments for your convenience",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#54595F]">
                  <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#A93539" }} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Values */}
      <section style={{ backgroundColor: "#EDF2F7" }} className="py-16">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-2">Our Values</p>
              <h2 className="text-3xl font-bold text-[#1A202C]">Why Choose Us?</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Award className="h-7 w-7 text-white" />,
                title: "Expert-Led Care",
                desc: "Dr. Naim A. Mansuri brings over 35 years of clinical audiological experience to every consultation.",
              },
              {
                icon: <Users className="h-7 w-7 text-white" />,
                title: "Patient-Centred",
                desc: "We take time to understand each patient's unique needs and tailor every treatment plan accordingly.",
              },
              {
                icon: <MapPin className="h-7 w-7 text-white" />,
                title: "4 Locations",
                desc: "Conveniently located across Gandhinagar, Patan, Ahmedabad and Surendranagar for easy access.",
              },
              {
                icon: <Microscope className="h-7 w-7 text-white" />,
                title: "Advanced Technology",
                desc: "We use the latest calibrated audiological equipment to ensure accurate diagnoses every time.",
              },
              {
                icon: <Calendar className="h-7 w-7 text-white" />,
                title: "Open All 7 Days",
                desc: "We are open every day of the week, closing at 7:00 PM, to fit around your schedule.",
              },
              {
                icon: <Heart className="h-7 w-7 text-white" />,
                title: "Caring Environment",
                desc: "Our clinic is designed to be welcoming, calm, and accessible for patients of all ages.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="service-card p-6 h-full bg-white">
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#A93539" }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[#1A202C] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#54595F] leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#A93539" }} className="py-12">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-1 text-white">Ready to Get Started?</h3>
            <p className="text-white/80 text-sm">Book your appointment at any of our 4 Gujarat locations</p>
          </div>
          <Link to="/appointment" className="btn-navy shrink-0">
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
