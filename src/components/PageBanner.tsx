import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; to?: string }[];
}

export default function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <section
      className="relative py-14 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A202C 0%, #2D3748 100%)",
      }}
    >
      {/* Decorative stripe */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: "#A93539" }}
      />
      <div className="container-page relative z-10">
        {breadcrumb && (
          <nav className="flex items-center gap-1.5 text-sm text-white/50 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
        {subtitle && <p className="mt-2 text-white/60 text-base">{subtitle}</p>}
      </div>
    </section>
  );
}
