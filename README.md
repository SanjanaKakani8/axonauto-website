# AxonAuto — Doorstep Car Care Website

A production-ready, single-page-app style marketing site for **AxonAuto**, built with React, Vite, Tailwind CSS, and Framer Motion. Static — no backend, no database.

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- React Router v6
- Framer Motion (animation)
- Lucide React + React Icons (icons)

## Getting Started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  components/    # Navbar, Footer, Logo, cards, WhatsApp button, etc.
  pages/         # Home, About, Services, Contact, 404
  data/          # business.js, services.js — all copy/content lives here
  hooks/         # useScrollPosition, useCountUp
  styles/        # Tailwind entry + custom utility classes
  App.jsx
  main.jsx
```

All business details (phone, email, services, mission/vision, stats) live in
`src/data/business.js` and `src/data/services.js`. Update those two files to
change site content — no need to touch components.

## Logo & Cinematic Intro

The source logo you provided is a single flattened image, so to deliver the
brief's animation spec (gear spinning independently of the text, a light
sweep across the wordmark, hover/idle glow) the gear was rebuilt as an inline
SVG matched to the source mark's proportions and tooth count, paired with a
live "AXONAUTO" text node. This is what powers:

- `src/components/Logo.jsx` — the navbar/footer wordmark, with hover (gear
  rotates 20°, scales up) and an ambient glow pulse every 5 seconds.
- `src/components/LoadingScreen.jsx` — the one-time cinematic intro (black
  screen → red glow → 360° gear spin → text slide-in → light sweep → red
  neon glow → fade into the site). Plays once per browser session
  (`sessionStorage`), then the WhatsApp button and hero content appear.

Your original uploaded logo image is used for the browser favicon
(`public/favicon.png`, cropped to the gear mark).

## Deploying to Vercel

1. Push this project to a GitHub repo (or run `vercel` from this folder with
   the Vercel CLI).
2. Import the repo in the Vercel dashboard — it auto-detects Vite.
3. Build command: `npm run build`, Output directory: `dist` (both are
   pre-filled by Vercel's Vite preset).
4. `vercel.json` is already included so client-side routes (`/about`,
   `/services`, `/contact`) don't 404 on a hard refresh.

## Things left as placeholders (per brief)

- Google Maps embed on the Contact page (currently a styled placeholder)
- Testimonials, gallery, and social links (`business.socials` in
  `data/business.js` currently point to `#`)
- Contact forms are UI-only — no submission endpoint wired up yet
