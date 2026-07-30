# Advance Speech and Hearing Clinic Website

A fully responsive, multi-page website for Advance Speech and Hearing Clinic — an audiology and speech therapy clinic based in Gujarat, India.

## Stack

- **React 19** + **TypeScript**
- **Vite 6** (dev server on port 5000)
- **Tailwind CSS v4**
- **React Router v7**
- **Lucide React** icons
- **Sonner** for toast notifications

## Running the project

```sh
npm install
npm run dev
```

The dev server starts at `http://localhost:5000`.

## Other commands

```sh
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # ESLint
npm run format   # Prettier
```

## Project structure

```
src/
  components/    # Shared UI components (Header, Footer, HeroSlider, etc.)
  pages/         # Route-level page components
  data/          # Static data (services, locations, doctors, etc.)
  styles.css     # Global styles / Tailwind entry
  App.tsx        # Router setup
  main.tsx       # Entry point
```

## Key features

- Sticky header with mobile hamburger menu + Services submenu
- Hero image slider with smooth transitions
- Stats counter section
- WhatsApp click-to-chat FAB (`https://wa.me/919979002527`)
- Branch selection on appointment booking
- Scroll-reveal animations
- Contact / appointment forms with front-end success confirmation
- 4 branch locations with Google Maps embeds

## User preferences

- No blog section on this site
- WhatsApp integration on all CTA and appointment flows
- Branch/address selection when booking appointments
- **Always push to GitHub after every task or change** (no exceptions)
