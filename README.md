# Punya & Sons

A front-end-only catalog site for Punya & Sons fine jewellery — no checkout, no payments. Every product links out to a WhatsApp chat instead.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
app/
  page.tsx            → Homepage (hero, categories, catalog teaser, Instagram/TikTok placeholder, story, contact)
  catalog/page.tsx     → Full catalog with category + gold/silver filters
  product/[id]/page.tsx → Product detail page with the "Chat about this piece" CTA
  layout.tsx           → Fonts (Fraunces, Inter, Noto Serif Devanagari) + global wrapper
  globals.css          → Tailwind entrypoint
components/
  Nav.tsx              → Shared header/nav, also exports WHATSAPP_URL
  Footer.tsx            → Shared footer
  WhatsAppCta.tsx        → Reusable chat button, pre-fills a message with the product name
data/
  products.ts            → All product + category data lives here
```

## Things to customise before launch

1. **WhatsApp number** — edit `WHATSAPP_URL` in `components/Nav.tsx` (currently a placeholder: `https://wa.me/9770000000000`).
2. **Instagram / TikTok handles** — update the links in `components/Footer.tsx` and the mention on the homepage, and swap the placeholder grid in `app/page.tsx` for your real posts once you're ready to wire it up (either manually, or via the Instagram Basic Display / oEmbed API).
3. **Product photos** — every image currently points to free stock photography from Pexels (used as a placeholder). Replace the `img` field for each product in `data/products.ts` with your own photos — either host them in `/public` and reference them as `/your-photo.jpg`, or keep using external URLs (just add the domain to `next.config.mjs` under `images.remotePatterns`).
4. **Product data** — add, edit, or remove pieces directly in `data/products.ts`. Each product needs an `id` (used in the URL), `cat`, `label`, `name`, `metal`, `spec` (the gold/silver weight line), `img`, and `desc`.
5. **Categories** — edit the `CATEGORIES` array in `data/products.ts` if you need more Nepali jewelry categories (Bulaki, Hasuli, Mangalsutra, etc.).

## Tech stack

Next.js 14 (App Router) + TypeScript + Tailwind CSS. No database, no backend — everything is static data in `data/products.ts`.
