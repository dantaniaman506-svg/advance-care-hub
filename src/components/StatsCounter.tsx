import { useEffect, useRef, useState } from "react";
import AnimatedCount from "@/components/AnimatedCount";

const stats = [
  { value: 1200, suffix: "+", label: "Happy Patients" },
  { value: 20, suffix: "", label: "Specialist Doctors" },
  { value: 6, suffix: "", label: "Clinic Locations" },
  { value: 150, suffix: "K", label: "Problem Solved" },
];

function StatItem({ stat, started }: { stat: (typeof stats)[number]; started: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (started) setVisible(true);
  }, [started]);

  return (
    <div className="text-center py-12 sm:py-14 px-4 sm:px-6">
      <div
        className="text-5xl sm:text-6xl lg:text-[4.25rem] font-medium leading-none"
        style={{ color: "#A93539" }}
      >
        {visible ? <AnimatedCount value={stat.value} suffix={stat.suffix} /> : "0"}
      </div>
      <div className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#1A202C] mt-5">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-8 sm:py-12"
      style={{ backgroundColor: "#EDF2F7" }}
    >
      <div className="container-page">
        <div className="bg-white shadow-[0_18px_45px_rgba(26,32,44,0.06)] max-w-[1080px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-[#EDF2F7] sm:divide-y-0 sm:divide-x">
            {stats.map((stat) => (
              <StatItem key={stat.label} stat={stat} started={started} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
