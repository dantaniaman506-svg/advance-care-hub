const stats = [
  { value: "500+", label: "Happy Patients" },
  { value: "4", label: "Locations" },
  { value: "10+", label: "Years of Service" },
  { value: "8+", label: "Specialist Staff" },
];

export function StatsBar() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-page py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest opacity-80">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[11px] uppercase tracking-widest opacity-70">
          * Figures shown are placeholders — final numbers pending client confirmation
        </p>
      </div>
    </section>
  );
}
