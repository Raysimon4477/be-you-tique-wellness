# Sheldon's Walking Tours — Hidden Cape Town

Premium single-page site for Sheldon's Walking Tours: street art, architecture,
stories and culture across Cape Town (Bo-Kaap, Woodstock & Salt River,
Muizenberg, the historic city centre and more).

Built with Vite, React, TypeScript and Tailwind CSS.

## Setup

```sh
npm install
npm run dev      # local dev server
npm run build    # production build
```

## Before going live

1. **WhatsApp number** — set the real number in `src/config.ts`
   (`whatsappNumber`, international format without `+`, e.g. `27821234567`,
   and `phoneDisplay` for how it should read on screen). Every WhatsApp
   button and the booking form use this one value.
2. **Photography (optional)** — the site ships with custom illustrated
   artwork. To use real photos instead, replace the illustration components
   (`src/components/illustrations.tsx`) with `<img>` tags; tour content
   lives in `src/data/tours.ts`.
