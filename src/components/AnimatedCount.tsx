import { useEffect, useState } from "react";

type AnimatedCountProps = {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
};

export default function AnimatedCount({
  value,
  suffix = "",
  className = "",
  duration = 1800,
}: AnimatedCountProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setCount(value);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, value]);

  return (
    <span className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}