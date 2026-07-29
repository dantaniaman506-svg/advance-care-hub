import { whatsappLink } from "@/data/clinic";

export function WhatsAppFAB() {
  return (
    <a
      href={whatsappLink("Hello, I'd like to know more about Advance Speech and Hearing Clinic.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84a11.75 11.75 0 0 0 1.6 5.95L0 24l6.35-1.66a11.83 11.83 0 0 0 5.69 1.45h.01c6.53 0 11.83-5.3 11.84-11.83a11.76 11.76 0 0 0-3.37-8.48ZM12.05 21.4h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.77.99 1-3.67-.23-.38a9.78 9.78 0 0 1-1.5-5.16c0-5.42 4.41-9.83 9.87-9.83 2.63 0 5.1 1.03 6.96 2.9a9.77 9.77 0 0 1 2.88 6.94c0 5.42-4.41 9.79-9.84 9.79Zm5.4-7.35c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.51.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
