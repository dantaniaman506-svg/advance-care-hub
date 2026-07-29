import { useState, useEffect } from "react";

const slides = [
  {
    id: 0,
    image: "/images/clinic1.webp",
    alt: "Advance Speech and Hearing Clinic",
  },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1920&q=80",
    alt: "Doctor consulting with patient",
  },
  {
    id: 2,
    image: "/images/clinic2.webp",
    alt: "Hearing care services",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1920&q=80",
    alt: "Audiologist examining patient",
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
    }, 4500);
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
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
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
