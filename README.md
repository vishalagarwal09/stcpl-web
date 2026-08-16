# Shree Texfab Creations — Corporate Website

Static corporate B2B website for **Shree Texfab Creations Private Limited**, built with Next.js 15 and deployed as a fully static export.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15.1 (App Router) |
| Language | TypeScript |
| Styling | CSS Modules + CSS Variables |
| Fonts | Lora (headings) + Montserrat (body) via `next/font/google` |
| Output | Static export (`out/`) |
| Deployment | Cloudflare Pages (primary) or Docker + Nginx |

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar, Footer, WhatsApp float, fonts)
│   ├── globals.css             # CSS variables, reset, shared utilities
│   ├── page.tsx                # Home (/)
│   ├── about/                  # About Us (/about)
│   ├── products/
│   │   ├── page.tsx            # Products overview (/products)
│   │   └── [slug]/page.tsx     # Dynamic product sub-pages (/products/suiting, etc.)
│   ├── capabilities/           # Capabilities (/capabilities)
│   ├── quality/                # Quality (/quality)
│   ├── exports/                # Exports (/exports)
│   ├── applications/           # Applications (/applications)
│   ├── contact/                # Contact (/contact)
│   ├── privacy/                # Privacy Policy (/privacy)
│   └── terms/                  # Terms & Conditions (/terms)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed nav with mobile hamburger + Products dropdown
│   │   ├── Footer.tsx          # 4-column footer
│   │   └── WhatsAppFloat.tsx   # Fixed bottom-right WhatsApp button
│   ├── ui/
│   │   ├── SectionHeader.tsx   # Label + h2 + subtitle (center/left variant)
│   │   ├── IconCard.tsx        # Icon + title + description card
│   │   ├── ProductCard.tsx     # Gradient product card linking to sub-page
│   │   ├── LeaderCard.tsx      # Leadership avatar + name + role
│   │   ├── CTABanner.tsx       # Dark navy full-width CTA section
│   │   └── ContactForm.tsx     # Enquiry form (mailto → Formspree ready)
│   └── sections/
│       ├── HeroSection.tsx     # Home hero (full-viewport)
│       ├── PageHero.tsx        # Inner-page banner with breadcrumbs
│       ├── ProductsGrid.tsx    # 3-col product card grid
│       ├── ProductDetail.tsx   # Individual product specs + applications
│       ├── WhyUsSection.tsx    # Why Shree Texfab 6-card grid
│       ├── ProcessSection.tsx  # Yarn → Delivery process strip
│       ├── ApplicationsSection.tsx
│       ├── QualitySection.tsx  # 6-step quality flow
│       ├── ExportsSection.tsx  # Export services + markets + buyer process
│       └── CustomDevSection.tsx
├── data/                       # All content — edit here, not in components
│   ├── products.ts             # 6 products with full specs
│   ├── navigation.ts           # Nav links, footer links, legal links
│   ├── team.ts                 # Leadership profiles
│   └── values.ts               # Values, process steps, quality steps, applications, exports
└── lib/
    └── constants.ts            # Brand name, contact details, WhatsApp config
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:3000

# Production build (outputs to out/)
npm run build
```

---

## Deployment

### Cloudflare Pages (recommended)

```bash
# One-time: login to Cloudflare
npx wrangler login

# Build + deploy to Cloudflare Pages
npm run deploy

# Deploy preview branch
npm run deploy:preview
```

First deploy creates the project at `stcpl-web.pages.dev`. Add a custom domain in the Cloudflare Dashboard → Pages → Custom Domains.

### Docker + Nginx (VPS / Railway / Fly.io)

```bash
# Build image
docker build -t stcpl-web .

# Run locally on port 8080
docker run -p 8080:80 stcpl-web
```

The Nginx config (`nginx.conf`) handles:
- Next.js static export URL routing (no `.html` extension in URLs)
- 1-year cache headers on `_next/static/` assets
- 30-day cache on images/fonts
- Security headers (X-Frame-Options, X-Content-Type-Options)
- Custom 404 page

---

## Updating Content

All content is centralized in `src/data/` and `src/lib/constants.ts`. No component edits needed for routine updates.

| What to update | File |
|---|---|
| Contact details, phone, WhatsApp | `src/lib/constants.ts` |
| Product specs, compositions, finishes | `src/data/products.ts` |
| Navigation links | `src/data/navigation.ts` |
| Leadership team | `src/data/team.ts` |
| Values, process steps, quality steps, applications, export markets | `src/data/values.ts` |

---

## Pending Before Go-Live

Replace all placeholders in `src/lib/constants.ts`:

```ts
phone: '+91 XXXXX XXXXX',          // → real phone
whatsapp: '+91XXXXXXXXXX',          // → real WhatsApp
whatsappRaw: '91XXXXXXXXXX',        // → real number without +
address: '[Complete Address — To Be Confirmed]',  // → registered address
```

Other items:
- [ ] Replace logo files if higher-resolution versions become available
- [ ] Wire contact form to real endpoint — see comment in `src/components/ui/ContactForm.tsx`
- [ ] Add Google Maps embed to Contact page
- [ ] Add social media links (LinkedIn, Instagram, YouTube) to Footer once profiles exist
- [ ] Add certifications section once GST/IEC/ISO/OEKO-TEX are confirmed
- [ ] Update `metadataBase` URL in `src/app/layout.tsx` once domain is live

---

## Favicons

Generated from the STC emblem at build time. Files in `public/`:

| File | Size | Use |
|---|---|---|
| `favicon-16.png` | 16×16 | Browser tab |
| `favicon-32.png` | 32×32 | Browser tab (retina) |
| `apple-touch-icon.png` | 180×180 | iOS home screen |
| `icon-192.png` | 192×192 | Android / PWA |
| `icon-512.png` | 512×512 | PWA splash |

`src/app/icon.png` and `src/app/apple-icon.png` are picked up automatically by Next.js App Router.

---

## Contact Form

`ContactForm.tsx` currently uses `mailto:` as a fallback. To connect to a real form backend, find this comment in the file:

```ts
// TODO: replace this block with fetch() to /api/enquiry or Formspree
```

Options:
- **Formspree** — replace `mailto:` with `fetch('https://formspree.io/f/YOUR_ID', {...})`
- **Next.js API Route** — add `src/app/api/enquiry/route.ts` with nodemailer/SMTP
- **Web3Forms / EmailJS** — drop-in replacements with no backend required
