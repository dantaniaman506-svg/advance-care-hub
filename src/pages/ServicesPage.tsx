import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive audiology and speech therapy services for all ages"
        breadcrumb={[{ label: "Services" }]}
      />

      <section style={{ backgroundColor: "#EDF2F7" }} className="py-16">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  to={`/services/${s.slug}`}
                  className="service-card block p-6 h-full bg-white"
                >
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h2 className="text-lg font-bold text-[#1A202C] mb-2">{s.title}</h2>
                  <p className="text-sm text-[#54595F] leading-relaxed mb-4">{s.oneLiner}</p>
                  <ul className="space-y-1.5 mb-5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-[#4A5568]">
                        <span style={{ color: "#A93539", marginTop: 2 }}>●</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm font-semibold flex items-center gap-1" style={{ color: "#A93539" }}>
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#A93539" }} className="py-12">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-1">Not Sure Which Service You Need?</h3>
            <p className="text-white/80 text-sm">Contact us and we'll guide you to the right assessment</p>
          </div>
          <Link to="/contact" className="btn-navy shrink-0">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
