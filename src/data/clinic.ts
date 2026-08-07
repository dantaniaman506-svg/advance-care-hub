export const clinic = {
  name: "Advance Speech & Hearing Clinic",
  shortName: "Advance S&H Clinic",
  tagline: "Trusted hearing and speech care across Gujarat.",
  phone: "+91 99790 02527",
  phoneRaw: "919979002527",
  hoursShort: "Open 6 Days — Closes 7:00 PM",
  hoursNote: "Open Monday to Saturday. Closes 7:00 PM.",
  hoursLine1: "Mon – Sat",
  hoursLine2: "10:00 AM – 7:00 PM",
  whatsapp: "https://wa.me/919979002527",
  instagram: "https://www.instagram.com/advance_speechandhearingclinic?igsh=MWFzOWlqOWNxY3JrMg==",
  facebook: "https://www.facebook.com/share/1Kcy51GmiC/",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${clinic.phoneRaw}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function openWhatsApp(message?: string) {
  if (typeof window === "undefined") return;
  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
}
