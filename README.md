# StudioSpace — Client

Live site: pending deployment

StudioSpace is a peer-to-peer marketplace for creators to discover and request inspiring studios by the hour.

- Home hero slider, featured studios, category browsing, and responsive dark/light themes.
- Explore studios with search, category, budget, sort, pagination, gallery, availability, and reviews.
- BetterAuth email/password and optional Google sign-in with password validation and intended-route redirects.
- Private creator flows for adding, editing, deleting, saving, and booking studios.
- Host booking workflow with pending, confirmed, completed, and cancelled states.
- Next.js App Router, TypeScript, Swiper, Sonner, Radix UI primitives, Express API, MongoDB, and HTTPOnly JWT mutation protection.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

The client expects the API at `API_URL` (default `http://127.0.0.1:4000`) and proxies it through same-origin `/api` routes.

## Examiner credentials

The server seed creates these only when the matching environment values are supplied:

- Host: `host@studiospace.example` / `HostDemo2026!`
- Creator: `creator@studiospace.example` / `CreatorDemo2026!`

## Assignment

Variant: `B14-A8-Cat_Harry`. Client repository for Programming Hero Assignment 8.
