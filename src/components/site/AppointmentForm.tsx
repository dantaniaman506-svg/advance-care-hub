import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { branches } from "@/data/branches";
import { services } from "@/data/services";
import { whatsappLink } from "@/data/clinic";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  contact: z.string().trim().min(6, "Enter phone or email").max(120),
  branch: z.string().min(1, "Please choose a branch"),
  service: z.string().max(120).optional(),
  subject: z.string().trim().max(120).optional(),
  message: z.string().trim().max(800).optional(),
});

export function AppointmentForm({
  compact = false,
  defaultService,
  defaultBranch,
}: {
  compact?: boolean;
  defaultService?: string;
  defaultBranch?: string;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      setSubmitting(false);
      return;
    }
    setErrors({});
    const { name, contact, branch, service, subject, message } = parsed.data;
    const branchObj = branches.find((b) => b.id === branch);
    const text = [
      "Hello Advance Speech and Hearing Clinic,",
      "I'd like to book an appointment.",
      "",
      `Name: ${name}`,
      `Phone/Email: ${contact}`,
      `Preferred Branch: ${branchObj?.name ?? branch} — ${branchObj?.address ?? ""}`,
      `Service: ${service || "General consultation"}`,
      subject ? `Subject: ${subject}` : "",
      message ? `Note: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp — send the pre-filled message to confirm.");
    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
  }

  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${compact ? "" : ""}`} noValidate>
      <Field label="Your name" name="name" error={errors.name} />
      <Field label="Phone or email" name="contact" error={errors.contact} />
      <div>
        <label className="block text-sm font-medium text-navy mb-1">Preferred branch</label>
        <select
          name="branch"
          defaultValue={defaultBranch ?? ""}
          className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Select a branch…</option>
          {branches.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>
        {errors.branch && <p className="mt-1 text-xs text-destructive">{errors.branch}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-navy mb-1">Service (optional)</label>
        <select
          name="service"
          defaultValue={defaultService ?? ""}
          className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">General consultation</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <Field label="Subject (optional)" name="subject" />
      <div>
        <label className="block text-sm font-medium text-navy mb-1">Message (optional)</label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Tell us anything that helps us prepare for your visit…"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors disabled:opacity-60"
      >
        Book via WhatsApp
      </button>
      <p className="text-xs text-muted-foreground text-center">
        We'll open WhatsApp with your details pre-filled — just tap send.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  error,
}: {
  label: string;
  name: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-1">{label}</label>
      <input
        name={name}
        className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
