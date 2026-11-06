# StudioSpace — Web Client

StudioSpace is a polished marketplace for discovering and booking creative spaces by the hour. The web client provides the responsive experience for creators and hosts: explore studios, review availability, request bookings, save favourites, and manage listings.

## Live application

- **Website:** https://studiospace-client-gamma-pink.vercel.app
- **Demo video:** https://studiospace-client-gamma-pink.vercel.app/media/studiospace-demo.mp4
- **API:** https://studiospace-server-6at5.onrender.com
- **Server repository:** https://github.com/shadianoormou/studiospace-server

## Product features

- Responsive home, discovery, studio detail, and informational pages
- Search, category filters, budget filters, sorting, and pagination
- Studio galleries, amenities, reviews, ratings, and availability
- Email/password authentication with optional Google OAuth
- Protected creator and host workflows for bookings and listings
- Save studios to a personal wishlist
- Booking status flow: pending, confirmed, completed, and cancelled
- Light/dark theme support, accessible controls, and mobile navigation
- ImgBB-backed image upload for host listings
- PWA manifest and branded StudioSpace app icon

## Technology

- Next.js App Router and React
- TypeScript
- Better Auth client integration
- Swiper for galleries and hero slides
- Radix UI primitives and Lucide icons
- Sonner notifications and next-themes
- Express/MongoDB API consumed through same-origin `/api` rewrites

## Architecture

The browser talks to the Next.js application through same-origin `/api/*` routes. Next.js rewrites those requests to the Express API, keeping the backend URL server-side during local development and deployment.

```text
Browser → Next.js client → /api rewrite → Express API → MongoDB
                                      ↘ ImgBB (listing images)
```

## Local development

### Prerequisites

- Node.js 22 or newer
- npm
- A running StudioSpace server (see the server repository)

### Install and run

```bash
npm install
cp .env.example .env.local
npm run dev
```

The application starts at `http://localhost:3000`.

### Environment variables

`.env.example` contains the only client-side setting:

```bash
API_URL=http://127.0.0.1:4000
```

`API_URL` is used by the Next.js rewrite. Keep private credentials in the server environment; never expose them in this repository or in browser code.

## Available scripts

```bash
npm run dev        # Start the local development server
npm run typecheck  # Run TypeScript checks
npm run build      # Create a production build
npm run start      # Serve the production build
```

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Marketing homepage and featured studios |
| `/studios` | Searchable studio discovery |
| `/studios/[id]` | Studio details, availability, reviews, and booking |
| `/login` | Email/password and Google sign-in |
| `/register` | Account creation |
| `/dashboard` | Creator/host dashboard |
| `/my-bookings` | Creator bookings |
| `/my-listings` | Host listings |
| `/add-studio` | Protected host listing form |
| `/saved-studios` | Protected wishlist |

## Demo accounts

The server seed script can create these evaluation accounts when matching `SEED_*` variables are supplied:

| Role | Email | Password |
| --- | --- | --- |
| Host | `host@studiospace.example` | `HostDemo2026!` |
| Creator | `creator@studiospace.example` | `CreatorDemo2026!` |

Use demo credentials only in local or evaluation environments. Rotate them before any public deployment.

## Quality checks

Before deployment, run:

```bash
npm run typecheck
npm run build
```

## Assignment context

Assignment variant: `B14-A8-Cat_Harry`  
Client repository for Programming Hero Assignment 8.

## Security notes

- No production secrets belong in this repository.
- Authentication cookies are HTTP-only and protected by the API security middleware.
- The production API enforces CORS, origin checks, Helmet headers, request limits, and rate limiting.
