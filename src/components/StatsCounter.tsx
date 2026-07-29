import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 1200, suffix: "+", label: "Happy Patients" },
  { value: 20, suffix: "", label: "Specialist Doctors" },
  { value: 35, suffix: "", label: "Years Experience" },
  { value: 150, suffix: "K+", label: "Problems Solved" },
];

function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
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
    <div className="text-center px-4 py-6">
      <div className="text-4xl lg:text-5xl font-bold text-white mb-1">
        {count.toLocaleString()}
        <span style={{ color: "#A93539" }}>{stat.suffix}</span>
      </div>
      <div className="text-sm font-medium uppercase tracking-wider text-white/70 mt-1">
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
      style={{ backgroundColor: "#2D3748" }}
      className="py-4"
    >
      <div className="container-page">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
