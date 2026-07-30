import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { clinic, whatsappLink } from "@/data/clinic";
import { services } from "@/data/services";

const footerAddresses = [
  {
    city: "Gandhinagar",
    label: "Head Office",
    address: "3rd Floor, 307, Shagun-11, Above Croma Center, Sector 11, Gandhinagar, Gujarat 382010",
    phone: "+91 99790 02527",
  },
  {
    city: "Patan",
    label: "Patan Branch",
    address: "1st Floor, Pandya Complex, Opp. Old S.T. Bus Stop, Krishnanagar Society, Hansapur Part, Patan, Gujarat 384265",
    phone: "+91 97242 82527",
  },
  {
    city: "Ahmedabad",
    label: "Sarkhej Branch",
    address: "First Floor, Blue Water, 108, Amber Tower Rd, Near Bushra Hospital, Arshad Park, Sarkhej, Ahmedabad, Gujarat 380055",
    phone: "",
  },
  {
    city: "Surendranagar",
    label: "Surendranagar Branch",
    address: "Surendranagar, Gujarat",
    phone: "",
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(145deg, #111827 0%, #26344A 55%, #1A202C 100%)", color: "rgba(255,255,255,0.8)" }}>

      {/* Addresses strip */}
      <div style={{ background: "linear-gradient(90deg, #8B2B2E 0%, #A93539 52%, #B84448 100%)" }} className="py-8">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {footerAddresses.map((loc) => (
              <div key={loc.city} className="flex gap-3">
                <div className="mt-0.5 shrink-0">
                  <MapPin className="h-4 w-4 text-white/80" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm mb-0.5">
                    {loc.city}
                    <span className="font-normal text-white/70 text-xs ml-1.5">({loc.label})</span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">{loc.address}</p>
                  {loc.phone && (
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, "")}`}
                      className="text-xs text-white font-medium mt-1 inline-flex items-center gap-1 hover:underline"
                    >
                      <Phone className="h-3 w-3" /> {loc.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-page py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About */}
          <div>
            <div className="mb-4">
              <img
                src="/images/logo-wide.png"
                alt="Advance Speech & Hearing Clinic"
                className="h-20 w-auto object-contain"
                style={{ maxWidth: 225 }}
              />
            </div>
            <p className="text-sm text-white/65 leading-relaxed mb-5">
              Trusted audiology and speech therapy care across Gujarat — accurate
              hearing assessments, advanced hearing aid fittings, and complete
              auditory rehabilitation under one roof.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center border border-white/20 hover:border-[#A93539] hover:bg-[#A93539] transition-colors">
                <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center border border-white/20 hover:border-[#A93539] hover:bg-[#A93539] transition-colors">
                <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-8 h-8 flex items-center justify-center border border-white/20 hover:border-[#25D366] hover:bg-[#25D366] transition-colors">
                <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.552 4.103 1.517 5.825L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.819 9.819 0 0 1-5.003-1.368l-.36-.214-3.726.975.999-3.631-.234-.374A9.786 9.786 0 0 1 2.182 12C2.182 6.575 6.575 2.182 12 2.182S21.818 6.575 21.818 12 17.425 21.818 12 21.818z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 pb-2 border-b border-white/10">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="footer-link flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    <span style={{ color: "#A93539", fontSize: "0.7rem" }}>▶</span>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 pb-2 border-b border-white/10">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/doctors", label: "Our Doctor" },
                { to: "/locations", label: "Locations" },
                { to: "/appointment", label: "Book Appointment" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link flex items-center gap-2 hover:gap-3 transition-all">
                    <span style={{ color: "#A93539", fontSize: "0.7rem" }}>▶</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 pb-2 border-b border-white/10">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#A93539" }} />
                <span className="text-sm text-white/65 leading-relaxed">
                  Shagun-11, Above Croma Center, Sector 11, Gandhinagar, Gujarat 382010
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" style={{ color: "#A93539" }} />
                <a href={`tel:${clinic.phoneRaw}`} className="footer-link text-sm">{clinic.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" style={{ color: "#A93539" }} />
                <a href={`mailto:${clinic.email}`} className="footer-link text-sm">{clinic.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#A93539" }} />
                <span className="text-sm text-white/65">
                  Open All 7 Days<br />
                  10:00 AM – 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container-page py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Advance Speech & Hearing Clinic. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Dr. Naim A. Mansuri — Consultant Audiologist
          </p>
        </div>
      </div>
    </footer>
  );
}
