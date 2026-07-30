import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 1200, suffix: "+", label: "Happy Patients" },
  { value: 4, suffix: "", label: "Clinic Locations" },
  { value: 7, suffix: "", label: "Days Open" },
  { value: 150, suffix: "K", label: "Problem Solved" },
];

function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress >= 1) {
        clearInterval(timer);
        setCount(target);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);

  return count;
}

function StatItem({ stat, started }: { stat: Stat; started: boolean }) {
  const count = useCountUp(stat.value, 2200, started);

  return (
    <div className="text-center py-10 px-4">
      <div
        className="text-5xl lg:text-6xl font-bold leading-none"
        style={{ color: "#A93539" }}
      >
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="text-xs font-semibold uppercase tracking-widest text-[#718096] mt-3">
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
      className="py-2"
      style={{ background: "linear-gradient(135deg, #1A202C 0%, #2D3748 100%)" }}
    >
      <div className="container-page">
        <div className="max-w-sm mx-auto lg:max-w-none">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-0 divide-x-0 lg:divide-x lg:divide-white/10">
            {stats.map((stat) => (
              <StatItem key={stat.label} stat={stat} started={started} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
