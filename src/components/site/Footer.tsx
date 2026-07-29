import { Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { clinic, whatsappLink } from "@/data/clinic";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground mt-16">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-semibold" style={{ fontFamily: "var(--font-slab)" }}>
              Advance
            </span>
            <span className="text-2xl font-semibold text-primary" style={{ fontFamily: "var(--font-slab)" }}>
              Hearing
            </span>
          </div>
          <p className="mt-3 text-sm text-white/70 max-w-xs">{clinic.tagline}</p>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/doctors" className="hover:text-primary">Doctors</Link></li>
            <li><Link to="/locations" className="hover:text-primary">Locations</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span>Shagun-11, Sector 11, Gandhinagar, Gujarat 382010</span>
            </li>
            <li>
              <a href={`tel:${clinic.phoneRaw}`} className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> {clinic.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp Us
              </a>
            </li>
            <li>
              <Link to="/locations" className="text-primary hover:underline">
                View all branches →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>Advance Speech and Hearing Clinic © {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-primary">Privacy</Link>
            <span className="opacity-40">|</span>
            <Link to="/contact" className="hover:text-primary">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
