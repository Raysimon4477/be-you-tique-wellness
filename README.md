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
2. **Photography** — the hero and most tour cards use freely licensed
   photos hotlinked from Wikimedia Commons (credit links render in the
   footer, as their licences require). Replace them with the business's
   own photos when available: swap the `photo.src` values in
   `src/data/tours.ts` (each photo gracefully falls back to the matching
   illustration in `src/components/illustrations.tsx` if it fails to load).
   The Woodstock tour deliberately keeps its illustration — photos of
   murals carry the artists' copyright, so use an own/commissioned photo
   there.
