# Advance Speech and Hearing Clinic — Website Plan

Multi-page, mobile-first responsive site replicating the reference layout/design system, with original copy provided. No blog. WhatsApp-powered appointment booking with branch selector. No backend.

## Design System (src/styles.css)

- Colors as CSS tokens (oklch conversions of the hex palette):
  - Primary `#A93539` (red), primary-hover `#A3343B`
  - Navy `#1A202C` (headings/footer), dark grays `#2D3748` / `#4A5568` / `#718096`
  - Muted `#7A7A7A`, section-bg `#EDF2F7`, card-bg `#F7FAFC`, page-bg `#F1F4F9`, white
- Typography via `<link>` in `__root.tsx`:
  - Roboto 400/600 (body + headings)
  - Roboto Slab 400 (eyebrow/secondary headings)
- Spacing scale + shadow + radius tokens matching reference
- Component patterns:
  - Service card: white bg, thick red left border (4px), rounded-xl, soft shadow, hover lift
  - Primary button (red pill), secondary (navy pill), outline
  - CTA banner: full-width alternating red/blue
  - Stats bar: red bg, 4 columns, white bold numerals

## Routes (TanStack Router — file-based)

```
src/routes/
  __root.tsx          -> font <link>, header + footer wrapper, WhatsApp FAB
  index.tsx           -> Home
  about.tsx           -> About Us + Mission/Vision/Values accordion
  doctors.tsx         -> Dr. Naim A. Mansuri card
  services.tsx        -> Services overview (9 cards)
  services.$slug.tsx  -> Dynamic service detail page (9 slugs)
  locations.tsx       -> 4 branch cards + map embeds + form
  contact.tsx         -> Contact form + all branch info
  appointment.tsx     -> Full appointment form w/ branch selector -> WhatsApp
```

Each route gets its own `head()` with unique title, description, og:title, og:description.

Service slugs: `hearing-assessments`, `hearing-aids-fitting`, `cochlear-implants`, `tinnitus-management`, `speech-language-therapy`, `pediatric-audiology`, `home-visits-tele-audiology`, `assistive-listening-devices`, `hearing-aid-repair-maintenance`.

Service content lives in `src/data/services.ts` (single source of truth: slug, name, one-liner, bullets, and the 3-section long-form copy). The 3 provided examples used verbatim; the remaining 6 written in matching tone using the What/Why/Who pattern.

## Shared Components (src/components/)

- `Header.tsx` — sticky, text wordmark ("Advance" navy + "Speech and Hearing Clinic" red), nav (Home, Services dropdown, Doctors, About Us, Locations, Contact Us), "Make Appointment" red button. Mobile: hamburger → left-side full-height drawer with expandable Services submenu (Radix Accordion).
- `Footer.tsx` — navy bg, 4 columns as specified, bottom bar with copyright + Privacy + Terms.
- `Wordmark.tsx` — two-tone text logo.
- `ServiceCard.tsx` — red left-border card with title, description, bullet list.
- `StatsBar.tsx` — 4 placeholder stats clearly marked (e.g. `500+`, `4`, `10+`, `8+` with a subtle "*" note "Figures shown are placeholders").
- `CTABanner.tsx` — variant red|blue; headline + phone + Make Appointment button.
- `OpeningHours.tsx` — "Open All Days — Closes 7:00 PM" widget.
- `AppointmentForm.tsx` — Name, Phone/Email, Branch (select: Gandhinagar / Patan / Ahmedabad / Surendranagar), Service (optional select), Subject, Message. On submit: zod validation → composes WhatsApp message → opens `https://wa.me/919979002527?text=...` in new tab → success toast. No backend.
- `ContactForm.tsx` — simpler variant (Name, Phone/Email, Subject, Message) with same WhatsApp fallback.
- `WhatsAppFAB.tsx` — floating WhatsApp button bottom-right on every page.
- `Reveal.tsx` — IntersectionObserver wrapper for subtle fade/slide-up scroll-in animations (respects `prefers-reduced-motion`).
- `SectionEyebrow.tsx` — small uppercase Roboto Slab label above section headings.

## Page Content Outlines

**Home:** Hero (eyebrow, heading, tagline, "Book Consultation" CTA, Call card + Hours card overlapping section boundary as in reference) → About teaser + image → 9-service grid + "View All Services" → Stats bar → Doctor teaser → Locations map + branches + inline contact form → Footer.

**About:** Banner → image + intro paragraph → Mission & Values accordion (Mission expanded by default, Vision/Values collapsed) using Radix Accordion → Stats bar → CTA banner.

**Doctors:** Banner → single doctor card (photo placeholder, name, title, bio) built to accept an array later → CTA banner.

**Services overview:** Banner → 9-card grid → CTA banner.

**Service detail (`/services/$slug`):** Banner with service name → 2-col layout: left = hero image + 3 sections (What/Why/Who), right sticky sidebar = Opening Hours + Appointment form → CTA banner. Uses `notFound()` for unknown slugs with a matching `notFoundComponent`.

**Locations:** Heading "Visit Us" → 4 branch cards (name, address, phone/WhatsApp, hours, Google Maps embed iframe, "Get Directions" link, "Book at this Branch" button that prefills the appointment form branch) → contact form.

**Contact:** Contact form + WhatsApp + email + all 4 addresses stacked.

**Appointment (`/appointment`):** Full-width form with branch chooser rendered as visual cards (radio-styled), service dropdown, date/time preference, message. Submits to WhatsApp with a well-formatted message including selected branch and service.

## Appointment → WhatsApp Flow

Message template opened via `wa.me`:

```
Hello Advance Speech and Hearing Clinic,
I'd like to book an appointment.
Name: <name>
Phone/Email: <contact>
Preferred Branch: <branch + address>
Service: <service or "General consultation">
Preferred Time: <text>
Note: <message>
```

URL-encoded; opened in new tab via `window.open`. Used from `AppointmentForm`, `Header` "Make Appointment", every CTA banner, and every branch card.

## Data Files (src/data/)

- `clinic.ts` — name, phone, whatsappUrl helper, hours, tagline
- `branches.ts` — 4 branches with name, addressLines, phone (Patan only), mapEmbedUrl, mapsLink
- `services.ts` — 9 services with slug, title, oneLiner, bullets[], sections[{heading, paragraphs[]}]
- `nav.ts` — nav + footer link config

## Assets

Neutral stock-style imagery generated via `imagegen` (clinical/audiology tone) into `src/assets/`:

- Hero (ear + otoscope + audiometry chart feel)
- About (hearing aid on chart)
- Doctor portrait placeholder (silhouette-style neutral)
- One hero image per service detail page (9)

Text wordmark used in header/footer (no image logo per brief).

## Motion & UX Details

- Sticky header with subtle shadow on scroll
- `Reveal` fade-up on section entry, staggered card entries
- Button/card hover: translate-y + shadow transition
- Mobile drawer slide-in from left
- Smooth in-page scroll for anchor links
- `prefers-reduced-motion` disables animations

## Technical Notes

- Tailwind v4 tokens in `src/styles.css` via `@theme inline`
- Fonts loaded via `<link>` in `__root.tsx` head (never `@import` remote URL)
- Zod validation on all forms with inline error messages
- Google Maps embeds via iframe (public embed URLs) for each branch
- WhatsApp FAB uses `aria-label` and opens in new tab
- SEO: unique title/description/og per route; JSON-LD `MedicalBusiness` on Home and `LocalBusiness` per branch on Locations
- No blog route anywhere
- Stats numbers rendered with a small footnote flag so client knows they're placeholders

## Out of Scope

- Backend / database / auth (forms submit via WhatsApp)
- Real photos (using generated stock-style imagery until client supplies)
- Blog (explicitly excluded)
- Star ratings / review counts (explicitly excluded)

Also remeber that it should be a mobile friendly 