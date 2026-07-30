import { useState, useEffect } from "react";

const slides = [
  {
    id: 0,
    image: "/images/hero1.png",
    alt: "Hearing aid fitting — Advance Speech and Hearing Clinic",
  },
  {
    id: 1,
    image: "/images/hero2.png",
    alt: "Ear examination — Advance Speech and Hearing Clinic",
  },
];

interface HeroSliderProps {
  className?: string;
}

export default function HeroSlider({ className = "" }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover object-center"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-2 h-2 transition-all"
            style={{
              backgroundColor: i === current ? "#A93539" : "rgba(255,255,255,0.5)",
              border: "none",
              cursor: "pointer",
              borderRadius: 0,
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
