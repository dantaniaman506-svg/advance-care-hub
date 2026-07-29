import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { CTABanner } from "@/components/site/CTABanner";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — Advance Speech and Hearing Clinic" },
      {
        name: "description",
        content:
          "Meet Dr. Naim A. Mansuri, Consultant Audiologist at Advance Speech and Hearing Clinic — serving patients across Gujarat.",
      },
      { property: "og:title", content: "Our Doctors — Advance Speech and Hearing Clinic" },
      { property: "og:description", content: "Meet our specialist audiology team." },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: Doctors,
});

function Doctors() {
  return (
    <>
      <PageBanner eyebrow="Our Doctor" title="Trusted Specialist Doctors" />
      <section className="container-page py-16">
        <Reveal>
          <div className="max-w-3xl mx-auto rounded-3xl bg-card border border-border shadow-md overflow-hidden">
            <div className="grid md:grid-cols-[240px_1fr]">
              <div className="bg-gradient-to-br from-navy to-info aspect-square md:aspect-auto grid place-items-center text-white">
                <div className="text-center px-6">
                  <div className="mx-auto h-24 w-24 rounded-full bg-white/10 grid place-items-center text-5xl">
                    👨‍⚕️
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="eyebrow">Consultant Audiologist</div>
                <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-navy">
                  Dr. Naim A. Mansuri
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Dr. Naim A. Mansuri leads Advance Speech and Hearing Clinic with a focus on
                  precise diagnosis and personalized hearing aid fitting. With years of clinical
                  experience across multiple Gujarat locations, he has helped hundreds of patients
                  — from newborns to seniors — regain clear hearing and confident communication.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      <CTABanner />
    </>
  );
}
