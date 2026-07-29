import { useState } from "react";
import { ChevronDown, Calendar, Phone, CheckCircle } from "lucide-react";
import { clinic, whatsappLink } from "@/data/clinic";
import { branches } from "@/data/branches";
import { services } from "@/data/services";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export default function AppointmentPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    branch: "",
    service: "",
    date: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const branch = branches.find((b) => b.id === form.branch);
    const msg =
      `Hello! I'd like to book an appointment.\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Branch: ${branch?.name ?? form.branch}\n` +
      `Service: ${form.service || "Not specified"}\n` +
      `Preferred Date: ${form.date || "Flexible"}\n` +
      (form.notes ? `Notes: ${form.notes}\n` : "");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <>
      <PageBanner
        title="Book Appointment"
        subtitle="Schedule your consultation at any of our 4 Gujarat branches"
        breadcrumb={[{ label: "Book Appointment" }]}
      />

      <section className="py-16" style={{ backgroundColor: "#EDF2F7" }}>
        <div className="container-page grid lg:grid-cols-3 gap-10">
          {/* Info sidebar */}
          <div className="lg:col-span-1 space-y-5">
            <Reveal>
              <div className="service-card p-6 bg-white">
                <h3 className="font-bold text-[#1A202C] mb-4 text-base">Appointment Info</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-[#54595F]">
                    <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#A93539" }} />
                    Walk-in & WhatsApp bookings accepted
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#54595F]">
                    <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#A93539" }} />
                    Open all 7 days — closes 7:00 PM
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#54595F]">
                    <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#A93539" }} />
                    All ages welcome — infants to seniors
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#54595F]">
                    <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#A93539" }} />
                    4 convenient locations across Gujarat
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#54595F]">
                    <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#A93539" }} />
                    Led by Dr. Naim A. Mansuri — 35+ years experience
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="p-6 text-white" style={{ backgroundColor: "#A93539" }}>
                <p className="text-sm font-medium text-white/80 mb-2">Quick Contact</p>
                <a
                  href={`tel:${clinic.phoneRaw}`}
                  className="flex items-center gap-2 text-xl font-bold hover:opacity-90 transition-opacity mb-1"
                >
                  <Phone className="h-5 w-5" />
                  {clinic.phone}
                </a>
                <p className="text-xs text-white/70">Call or WhatsApp for instant booking</p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="p-6 text-white" style={{ backgroundColor: "#1A202C" }}>
                <Calendar className="h-6 w-6 mb-3" style={{ color: "#A93539" }} />
                <p className="font-bold text-white mb-1">Opening Hours</p>
                <p className="text-sm text-white/60">Monday – Sunday</p>
                <p className="text-base font-semibold text-white mt-1">10:00 AM – 7:00 PM</p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Reveal delay={80}>
              <div className="service-card p-8 bg-white">
                <h2 className="text-xl font-bold text-[#1A202C] mb-6">
                  Book Your Appointment
                </h2>
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "#A93539" }}>
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A202C] mb-2">Booking Request Sent!</h3>
                    <p className="text-[#54595F] text-sm max-w-md mx-auto mb-1">
                      Your appointment request has been sent to our WhatsApp. We'll confirm your
                      slot shortly on <strong>{clinic.phone}</strong>.
                    </p>
                    <p className="text-xs text-[#718096] mt-1 mb-6">
                      (WhatsApp should have opened in a new tab — if not, tap the button below)
                    </p>
                    <a
                      href={whatsappLink("Hello! I'd like to book an appointment.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm"
                    >
                      Open WhatsApp
                    </a>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", branch: "", service: "", date: "", notes: "" }); }}
                      className="btn-navy text-sm ml-3"
                    >
                      New Booking
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#1A202C] mb-1.5">
                          Full Name <span style={{ color: "#A93539" }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A202C] mb-1.5">
                          Phone Number <span style={{ color: "#A93539" }}>*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Branch dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-[#1A202C] mb-1.5">
                        Select Branch <span style={{ color: "#A93539" }}>*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={form.branch}
                          onChange={(e) => setForm({ ...form, branch: e.target.value })}
                          className="form-input appearance-none pr-10"
                          style={{ cursor: "pointer" }}
                        >
                          <option value="">— Choose your nearest branch —</option>
                          {branches.map((b) => (
                            <option key={b.id} value={b.id}>
                              {b.name}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#54595F] pointer-events-none" />
                      </div>
                      {form.branch && (
                        <div
                          className="mt-2 p-3 text-sm"
                          style={{
                            backgroundColor: "#EDF2F7",
                            borderLeft: "3px solid #A93539",
                          }}
                        >
                          <p className="font-semibold text-[#1A202C] text-xs mb-0.5">
                            {branches.find((b) => b.id === form.branch)?.name}
                          </p>
                          <p className="text-[#54595F] text-xs">
                            {branches.find((b) => b.id === form.branch)?.address}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Service dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-[#1A202C] mb-1.5">
                        Service Required
                      </label>
                      <div className="relative">
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="form-input appearance-none pr-10"
                          style={{ cursor: "pointer" }}
                        >
                          <option value="">— Select a service (optional) —</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#54595F] pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1A202C] mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="form-input"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1A202C] mb-1.5">
                        Additional Notes
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Any specific concerns or information you'd like to share..."
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        className="form-input resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center text-base py-3">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.552 4.103 1.517 5.825L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.819 9.819 0 0 1-5.003-1.368l-.36-.214-3.726.975.999-3.631-.234-.374A9.786 9.786 0 0 1 2.182 12C2.182 6.575 6.575 2.182 12 2.182S21.818 6.575 21.818 12 17.425 21.818 12 21.818z"/>
                      </svg>
                      Confirm via WhatsApp
                    </button>
                    <p className="text-xs text-center text-[#718096]">
                      This will open WhatsApp with your booking details pre-filled.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
