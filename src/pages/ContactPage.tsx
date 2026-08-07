import { useState } from "react";
import { Phone, MapPin, Clock, Send, ChevronDown, CheckCircle } from "lucide-react";
import { clinic, whatsappLink } from "@/data/clinic";
import { branches, visitingBranch } from "@/data/branches";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

const headOffice = branches.find((branch) => branch.isHeadOffice) ?? branches[0];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    branch: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const branch = [...branches, visitingBranch].find((b) => b.id === form.branch);
    const message =
      `Hello! I'd like to enquire about the clinic.\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Branch: ${branch?.name ?? form.branch}\n` +
      `Address: ${branch?.address ?? "Not specified"}\n` +
      (form.message ? `Message: ${form.message}\n` : "");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch — we're here to help"
        breadcrumb={[{ label: "Contact Us" }]}
      />

      <section className="py-16 bg-white">
        <div className="container-page grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <Reveal>
              <p className="eyebrow mb-3">Get In Touch</p>
              <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Contact Information</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#A93539" }}
                  >
                    <MapPin className="h-4.5 w-4.5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A202C] text-sm mb-0.5">{headOffice.name}</p>
                    <p className="text-sm text-[#54595F] leading-relaxed">{headOffice.address}</p>
                    {headOffice.phone && (
                      <a
                        href={`tel:${headOffice.phone.replace(/\s/g, "")}`}
                        className="text-sm text-[#A93539] hover:underline"
                      >
                        Branch: {headOffice.phone}
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#A93539" }}
                  >
                    <Phone className="h-4.5 w-4.5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A202C] text-sm mb-0.5">Phone / WhatsApp</p>
                    <a
                      href={`tel:${clinic.phoneRaw}`}
                      className="text-sm text-[#54595F] hover:text-[#A93539] transition-colors"
                    >
                      {clinic.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#A93539" }}
                  >
                    <Clock className="h-4.5 w-4.5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A202C] text-sm mb-0.5">Opening Hours</p>
                    <p className="text-sm text-[#54595F]">
                      Monday – Saturday<br />
                      10:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Branch quick links */}
              <div className="mt-8">
                <h3 className="font-bold text-[#1A202C] mb-3 text-sm uppercase tracking-wider">Our Branches</h3>
                <div className="space-y-2">
                  {branches.map((b) => (
                    <div key={b.id} className="flex items-center gap-2 text-sm text-[#54595F]">
                      <span style={{ color: "#A93539" }}>▶</span>
                      {b.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={whatsappLink("Hello! I'd like to enquire about your services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center inline-flex"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.552 4.103 1.517 5.825L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.819 9.819 0 0 1-5.003-1.368l-.36-.214-3.726.975.999-3.631-.234-.374A9.786 9.786 0 0 1 2.182 12C2.182 6.575 6.575 2.182 12 2.182S21.818 6.575 21.818 12 17.425 21.818 12 21.818z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal delay={100}>
              <div className="service-card p-8 bg-white">
                <h3 className="text-xl font-bold text-[#1A202C] mb-6">Contact Us on WhatsApp</h3>
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "#A93539" }}>
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-[#1A202C] mb-2">Request Sent to WhatsApp!</h4>
                    <p className="text-[#54595F] text-sm">
                      Thank you for reaching out. We'll get back to you shortly on{" "}
                      <strong>{clinic.phone}</strong>.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", branch: "", message: "" }); }}
                      className="btn-primary mt-6 text-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#1A202C] mb-1.5">
                          Your Name <span style={{ color: "#A93539" }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
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

                    {/* Branch Dropdown */}
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
                          {[...branches, visitingBranch].map((b) => (
                            <option key={b.id} value={b.id}>
                              {b.name} — {b.address}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#54595F] pointer-events-none" />
                      </div>
                      {form.branch && (
                        <div
                          className="mt-2 p-3 text-sm text-white"
                          style={{ backgroundColor: "#1A202C" }}
                        >
                          <strong>Selected:</strong>{" "}
                          {[...branches, visitingBranch].find((b) => b.id === form.branch)?.address}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1A202C] mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="How can we help you? Describe your concern or question..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="form-input resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center">
                      <Send className="h-4 w-4" />
                      Send on WhatsApp
                    </button>
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
