import { Link } from "@tanstack/react-router";
import { clinic } from "@/data/clinic";

export function CTABanner({ variant = "info" }: { variant?: "info" | "primary" }) {
  const bg = variant === "primary" ? "bg-primary" : "bg-info";
  return (
    <section className={`${bg} text-white`}>
      <div className="container-page py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">
          Get a Free Consultation — Call {clinic.phone}
        </h3>
        <Link
          to="/appointment"
          className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy hover:bg-white/90 transition-colors"
        >
          Make Appointment
        </Link>
      </div>
    </section>
  );
}
