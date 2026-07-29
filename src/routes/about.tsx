import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageBanner } from "@/components/site/PageBanner";
import { StatsBar } from "@/components/site/StatsBar";
import { CTABanner } from "@/components/site/CTABanner";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Advance Speech and Hearing Clinic" },
      {
        name: "description",
        content:
          "Meet the audiology team behind Advance Speech and Hearing Clinic — our mission, vision, and values for hearing and speech care across Gujarat.",
      },
      { property: "og:title", content: "About Us — Advance Speech and Hearing Clinic" },
      { property: "og:description", content: "Our mission, vision and values for hearing and speech care." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const mvv = [
  {
    id: "mission",
    label: "Mission",
    body: (
      <ul className="mt-3 space-y-2 text-sm text-navy/80 list-disc pl-5">
        <li>Provide accurate, technology-driven hearing and speech assessments for all ages</li>
        <li>Fit and program hearing aids and assistive devices suited to each patient's lifestyle</li>
        <li>Make expert audiology care accessible across multiple Gujarat locations</li>
        <li>Guide families through diagnosis, treatment, and long-term auditory rehabilitation</li>
        <li>Stay current with the latest diagnostic and hearing aid technology</li>
      </ul>
    ),
  },
  {
    id: "vision",
    label: "Vision",
    body: (
      <p className="mt-3 text-sm text-navy/80">
        To be Gujarat's most trusted name in hearing and speech care, recognized for accuracy,
        compassion, and consistent results across every branch.
      </p>
    ),
  },
  {
    id: "values",
    label: "Values",
    body: (
      <p className="mt-3 text-sm text-navy/80">
        Patient-first care, clinical accuracy, honesty in every diagnosis, and long-term support
        beyond the first appointment.
      </p>
    ),
  },
];

function About() {
  const [open, setOpen] = useState<string | null>("mission");
  return (
    <>
      <PageBanner eyebrow="About Us" title="Advance Speech and Hearing Clinic" />
      <section className="container-page py-16 grid lg:grid-cols-2 gap-10 items-start">
        <Reveal>
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-section to-primary/10 border border-border grid place-items-center">
            <div className="text-6xl">👂</div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-muted-foreground leading-relaxed">
            At Advance Speech and Hearing Clinic, we believe better hearing and clear communication
            change lives — at home, at school, and at work. Every patient who walks into any of our
            clinics receives a thorough evaluation, a clear explanation of their results, and a
            treatment plan built around their specific needs and lifestyle.
          </p>
          <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-navy">Mission & Values</h2>
          <p className="mt-3 text-muted-foreground">
            Hearing and speech are at the center of how we connect with the people around us. Our
            team is committed to identifying problems early, treating them effectively, and
            supporting patients and their families through every step of the process — whether
            that's a child's first hearing test or an adult adjusting to a new hearing aid.
          </p>
          <div className="mt-6 space-y-3">
            {mvv.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id} className="rounded-xl bg-card border-l-4 border-primary shadow-sm">
                  <button
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between p-4 text-left"
                  >
                    <span className="font-semibold text-navy">{item.label}</span>
                    <ChevronDown className={`h-5 w-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && <div className="px-4 pb-5">{item.body}</div>}
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      <StatsBar />
      <CTABanner />
    </>
  );
}
