import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getService, services } from "@/data/services";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getService(slug ?? "");

  if (!service) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1A202C] mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary">View All Services</Link>
        </div>
      </div>
    );
  }

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageBanner
        title={service.title}
        subtitle={service.oneLiner}
        breadcrumb={[
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="container-page grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="mb-8">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-[#1A202C] mb-4">{service.title}</h2>
                <div className="service-card p-5 bg-white mb-6">
                  <h3 className="font-bold text-[#A93539] mb-3">What We Offer:</h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[#54595F]">
                        <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#A93539" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
            {service.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 100}>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#1A202C] mb-3 pb-2" style={{ borderBottom: "2px solid #A93539" }}>
                    {section.heading}
                  </h3>
                  {section.paragraphs.map((para, j) => (
                    <p key={j} className="text-[#54595F] leading-relaxed mb-3">{para}</p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-2 mt-3">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-[#54595F]">
                          <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#A93539" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}

            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/appointment" className="btn-primary">
                Book Appointment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-navy">
                Enquire Now
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Reveal delay={100}>
              <div className="service-card p-5 bg-white mb-6">
                <h3 className="font-bold text-[#1A202C] mb-4 pb-2" style={{ borderBottom: "2px solid #A93539" }}>
                  Other Services
                </h3>
                <ul className="space-y-2">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-2 text-sm text-[#54595F] hover:text-[#A93539] py-2 border-b border-gray-100 transition-colors"
                      >
                        <span>{s.icon}</span>
                        {s.title}
                        <ArrowRight className="h-3 w-3 ml-auto shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 text-white" style={{ backgroundColor: "#A93539" }}>
                <h3 className="font-bold mb-2 text-white">Need Help?</h3>
                <p className="text-sm text-white/80 mb-4">
                  Contact us to learn more about this service or to book an appointment.
                </p>
                <Link to="/appointment" className="btn-navy text-sm w-full justify-center block text-center">
                  Book Appointment
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
