import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { PageBanner } from "@/components/site/PageBanner";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { OpeningHours } from "@/components/site/OpeningHours";
import { Reveal } from "@/components/site/Reveal";
import { branches } from "@/data/branches";

const search = z.object({
  branch: z.string().optional(),
  service: z.string().optional(),
});

export const Route = createFileRoute("/appointment")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Book an Appointment — Advance Speech and Hearing Clinic" },
      {
        name: "description",
        content:
          "Book an audiology or speech therapy appointment at any of our four Gujarat branches. WhatsApp confirmation in seconds.",
      },
      { property: "og:title", content: "Book an Appointment" },
      { property: "og:description", content: "Pick your branch and service — we'll confirm on WhatsApp." },
      { property: "og:url", content: "/appointment" },
    ],
    links: [{ rel: "canonical", href: "/appointment" }],
  }),
  component: Appointment,
});

function Appointment() {
  const { branch, service } = Route.useSearch();
  const selectedBranch = branches.find((b) => b.id === branch);

  return (
    <>
      <PageBanner
        eyebrow="Appointment"
        title="Book Your Visit"
        subtitle="Choose your branch and preferred service. We'll open WhatsApp with your details pre-filled — just send to confirm."
      />
      <section className="container-page py-14 grid lg:grid-cols-[1fr_360px] gap-10">
        <Reveal>
          <div>
            <h2 className="text-xl font-semibold text-navy">Choose your branch</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {branches.map((b) => {
                const active = b.id === branch;
                return (
                  <a
                    key={b.id}
                    href={`?branch=${b.id}${service ? `&service=${encodeURIComponent(service)}` : ""}`}
                    className={`block rounded-xl p-4 border-l-4 shadow-sm transition-all ${
                      active
                        ? "bg-primary text-primary-foreground border-primary-hover"
                        : "bg-card border-primary hover:-translate-y-1"
                    }`}
                  >
                    <div className={`font-semibold ${active ? "text-white" : "text-navy"}`}>{b.name}</div>
                    <div className={`mt-1 text-xs ${active ? "text-white/80" : "text-muted-foreground"}`}>
                      {b.address}
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl bg-card border border-border p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-navy">Your details</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {selectedBranch ? `Booking at ${selectedBranch.name}.` : "Fill in your details below."}
              </p>
              <div className="mt-5">
                <AppointmentForm defaultBranch={branch} defaultService={service} />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            <OpeningHours />
            <div className="rounded-2xl bg-section p-6">
              <h4 className="font-semibold text-navy">Why book with us?</h4>
              <ul className="mt-3 space-y-2 text-sm text-navy/80">
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"/>Led by Consultant Audiologist Dr. Naim A. Mansuri</li>
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"/>Modern diagnostic equipment at every branch</li>
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"/>Care for every age — from newborns to seniors</li>
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"/>Open all 7 days</li>
              </ul>
            </div>
          </aside>
        </Reveal>
      </section>
    </>
  );
}
