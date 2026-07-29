import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { services } from "@/data/services";
import { clinic } from "@/data/clinic";

type NavItem = { to: string; label: string; hasSub?: boolean };
const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services", hasSub: true },
  { to: "/doctors", label: "Doctors" },
  { to: "/about", label: "About Us" },
  { to: "/locations", label: "Locations" },
  { to: "/contact", label: "Contact Us" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-background/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-sm border-b border-border" : ""
      }`}
    >
      <div className="container-page flex items-center justify-between h-16">
        <Wordmark />

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-navy">
          {nav.map((item) =>
            item.hasSub ? (
              <div key={item.to} className="relative group">
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="w-64 rounded-lg border border-border bg-card shadow-lg py-2">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="block px-4 py-2 text-sm text-navy hover:bg-section hover:text-primary transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${clinic.phoneRaw}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" /> {clinic.phone}
          </a>
          <Link
            to="/appointment"
            className="hidden sm:inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors shadow-sm"
          >
            Make Appointment
          </Link>
          <button
            aria-label="Open menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-navy hover:bg-section"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition ${open ? "visible" : "invisible pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-card shadow-xl transition-transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-5 border-b border-border">
            <Wordmark compact />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="h-10 w-10 inline-flex items-center justify-center text-navy"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="px-5 py-4 space-y-1 text-navy">
            {nav.map((item) =>
              item.hasSub ? (
                <div key={item.to}>
                  <button
                    onClick={() => setSubOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-3 text-base font-semibold text-primary"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-5 w-5 rounded-full border border-primary/40 p-0.5 transition ${subOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {subOpen && (
                    <div className="mb-2 space-y-1 border-l-2 border-primary/30 pl-4">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-navy hover:text-primary"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Make Appointment
            </Link>
          </nav>
        </aside>
      </div>
    </header>
  );
}
