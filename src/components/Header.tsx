import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { services } from "@/data/services";
import { clinic, whatsappLink } from "@/data/clinic";

const navItems = [
  { to: "/", label: "Home", exact: true },
  { to: "/services", label: "Services", hasSub: true },
  { to: "/doctors", label: "Doctors" },
  { to: "/about", label: "About Us" },
  { to: "/locations", label: "Locations" },
  { to: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* Main header */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="container-page flex items-center justify-between h-[70px]">
          {/* Wordmark */}
          <Link to="/" className="flex flex-col leading-none group" onClick={close}>
            <span className="font-bold text-[1.15rem] tracking-tight" style={{ fontFamily: "Roboto, sans-serif" }}>
              <span className="text-[#1A202C]">Advance </span>
              <span style={{ color: "#A93539" }}>Speech</span>
            </span>
            <span className="text-[0.78rem] font-medium text-[#54595F] mt-0.5">
              and Hearing Clinic
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) =>
              item.hasSub ? (
                <div
                  key={item.to}
                  className="relative group"
                  onMouseEnter={() => setSubOpen(true)}
                  onMouseLeave={() => setSubOpen(false)}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `nav-link flex items-center gap-1 ${isActive ? "active" : ""}`
                    }
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </NavLink>
                  <div
                    className={`absolute left-0 top-full pt-2 z-50 transition-all duration-200 ${
                      subOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                    }`}
                  >
                    <div className="min-w-[220px] bg-white border border-gray-100 shadow-xl py-1">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#2D3748] hover:bg-red-50 hover:text-[#A93539] transition-colors"
                          onClick={() => setSubOpen(false)}
                        >
                          <span>{s.icon}</span>
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.exact}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2">
            <Link
              to="/appointment"
              className="hidden md:inline-flex btn-primary text-sm"
            >
              Make Appointment
            </Link>
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 text-[#1A202C] hover:text-[#A93539] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          onClick={close}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="absolute left-0 top-0 h-full w-[300px] bg-white flex flex-col shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <Link to="/" onClick={close} className="flex flex-col leading-none">
                <span className="font-bold text-[1rem]">
                  <span className="text-[#1A202C]">Advance </span>
                  <span style={{ color: "#A93539" }}>Speech</span>
                </span>
                <span className="text-[0.7rem] text-[#54595F] mt-0.5">and Hearing Clinic</span>
              </Link>
              <button onClick={close} className="text-gray-500 hover:text-[#A93539] transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) =>
                item.hasSub ? (
                  <div key={item.to}>
                    <button
                      className="w-full flex items-center justify-between px-3 py-3 text-[#1A202C] font-medium hover:bg-red-50 hover:text-[#A93539] transition-colors"
                      onClick={() => setMobileSubOpen(!mobileSubOpen)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileSubOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileSubOpen && (
                      <div className="ml-4 border-l-2 border-red-100 pl-3 mb-1">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="flex items-center gap-2 px-2 py-2 text-sm text-[#54595F] hover:text-[#A93539] transition-colors"
                            onClick={close}
                          >
                            <span>{s.icon}</span>
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.exact}
                    className={({ isActive }) =>
                      `block px-3 py-3 font-medium transition-colors ${
                        isActive
                          ? "text-[#A93539] bg-red-50"
                          : "text-[#1A202C] hover:bg-red-50 hover:text-[#A93539]"
                      }`
                    }
                    onClick={close}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>

            {/* Bottom CTA */}
            <div className="px-5 py-5 border-t border-gray-100 space-y-3">
              <Link
                to="/appointment"
                className="btn-primary w-full justify-center text-sm"
                onClick={close}
              >
                Make Appointment
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 border-2 border-[#1A202C] text-[#1A202C] font-semibold text-sm hover:bg-[#1A202C] hover:text-white transition-colors"
                onClick={close}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.552 4.103 1.517 5.825L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.819 9.819 0 0 1-5.003-1.368l-.36-.214-3.726.975.999-3.631-.234-.374A9.786 9.786 0 0 1 2.182 12C2.182 6.575 6.575 2.182 12 2.182S21.818 6.575 21.818 12 17.425 21.818 12 21.818z"/></svg>
                WhatsApp Us
              </a>
              <div className="flex items-center gap-2 text-sm text-[#54595F]">
                <Phone className="h-4 w-4 shrink-0 text-[#A93539]" />
                <a href={`tel:${clinic.phoneRaw}`} className="hover:text-[#A93539]">{clinic.phone}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
