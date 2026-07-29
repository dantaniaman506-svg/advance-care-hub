export const clinic = {
  name: "Advance Speech and Hearing Clinic",
  shortName: "Advance S&H Clinic",
  tagline: "Trusted hearing and speech care across Gujarat.",
  phone: "+91 99790 02527",
  phoneRaw: "919979002527",
  email: "info@advancespeechhearing.com",
  hoursShort: "Open All Days — Closes 7:00 PM",
  hoursNote: "Open 7 days a week. Closes 7:00 PM.",
  hoursLine1: "Mon – Sun",
  hoursLine2: "10:00 AM – 7:00 PM",
  whatsapp: "https://wa.me/919979002527",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${clinic.phoneRaw}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function openWhatsApp(message?: string) {
  if (typeof window === "undefined") return;
  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
}
