import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { branches } from "@/data/branches";
import { clinic } from "@/data/clinic";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";

export default function LocationsPage() {
  return (
    <>
      <PageBanner
        title="Our Locations"
        subtitle="4 convenient branches across Gujarat"
        breadcrumb={[{ label: "Locations" }]}
      />

      <section style={{ backgroundColor: "#EDF2F7" }} className="py-16">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-2">Visit Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C]">Our Branches</h2>
              <p className="mt-3 text-[#54595F] max-w-xl mx-auto text-sm">
                All our clinics are open every day of the week and close at 7:00 PM.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {branches.map((branch, i) => (
              <Reveal key={branch.id} delay={i * 100}>
                <div className="bg-white service-card overflow-hidden h-full">
                  {/* Map embed */}
                  <div className="h-52 bg-gray-200 relative overflow-hidden">
                    <iframe
                      src={branch.mapEmbed}
                      className="w-full h-full border-0"
                      loading="lazy"
                      title={`Map of ${branch.name}`}
                      aria-label={`Location map for ${branch.name}`}
                    />
                  </div>
                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <h3 className="font-bold text-[#1A202C] text-lg">{branch.name}</h3>
                      {i === 0 && (
                        <span
                          className="shrink-0 text-xs px-2 py-1 text-white font-medium"
                          style={{ backgroundColor: "#A93539" }}
                        >
                          Head Office
                        </span>
                      )}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#A93539" }} />
                        <p className="text-sm text-[#54595F] leading-relaxed">{branch.address}</p>
                      </div>
                      {branch.phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 shrink-0" style={{ color: "#A93539" }} />
                          <a
                            href={`tel:${branch.phone.replace(/\s/g, "")}`}
                            className="text-sm font-medium hover:text-[#A93539] transition-colors"
                          >
                            {branch.phone}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 shrink-0" style={{ color: "#A93539" }} />
                        <a
                          href={`tel:${clinic.phoneRaw}`}
                          className="text-sm font-medium hover:text-[#A93539] transition-colors"
                        >
                          {clinic.phone} (WhatsApp)
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 shrink-0" style={{ color: "#A93539" }} />
                        <span className="text-sm text-[#54595F]">Open All Days — Closes 7:00 PM</span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <a
                        href={branch.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm inline-flex"
                      >
                        <Navigation className="h-4 w-4" />
                        Get Directions
                      </a>
                    </div>
                  </div>
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
            <h3 className="text-2xl font-bold mb-1">Book at Your Nearest Branch</h3>
            <p className="text-white/80 text-sm">All 4 locations open 7 days a week</p>
          </div>
          <Link to="/appointment" className="btn-navy shrink-0">
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
