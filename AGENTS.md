# AGENTS.md — Shree Texfab Creations (stcpl-web)

Corporate B2B website for Shree Texfab Creations Pvt. Ltd. Next.js 15 (App Router) + React 19 + TypeScript, statically exported to `out/` and deployed to Cloudflare Pages (or Docker/Nginx). No backend, no database — all content is static and centralized.

## Dev environment
- Node 20+ (Dockerfile uses `node:20-alpine`). Toolchain verified on Node 22.23.2 / npm 10.9.8.
- Install: `npm install`
- Dev server: `npm run dev` → http://localhost:3000
- Fonts load via `next/font/google` (Lora + Montserrat) at build — needs network on first build.

## Build & deploy
- `npm run build` → static export into `out/`. (Verified: passes, prerenders all routes.)
- `npm run start` → serve the Next build locally (not used in prod; static `out/` is served by nginx).
- `npm run deploy` → `npm run build && wrangler pages deploy out --project-name=stcpl-web`
- `npm run deploy:preview` → same against a `preview` branch.
- Cloudflare deploy requires a one-time `npx wrangler login` first (no token in repo). `wrangler.toml` points the bucket at `./out`.

## Conventions
- **All site content lives in `src/data/` and `src/lib/constants.ts`.** Edit copy/products/nav/team there — never inline in components. Components are presentational and import from those modules.
- Path alias `@/*` → `./src/*` (see tsconfig `paths`). Use it for imports, not relative `../`.
- Styling is **CSS Modules** (`.module.css` co-located with each component) plus CSS variables in `src/app/globals.css`. Brand colors/constants are also mirrored in `src/lib/constants.ts` (`COLORS`). Shared utility classes: `.container`, `.btn`, `.btn-gold`, `.btn-outline-white`.
- Pages are App Router `page.tsx` under `src/app/<route>/`. Layout/Navbar/Footer/WhatsApp float live in `src/app/layout.tsx` + `src/components/layout/`.
- Components are organized: `components/layout/` (shell), `components/ui/` (reusable: SectionHeader, IconCard, ProductCard, LeaderCard, CTABanner, ContactForm), `components/sections/` (page sections composed in pages).
- Plain `.ts` data modules export typed `const` arrays (e.g. `products: Product[]`). TypeScript `strict: true` is on — keep types explicit.
- SEO metadata: per-page `export const metadata` in each `page.tsx`; root title template + `metadataBase` (currently `https://shreetexfab.in`, a placeholder) in `src/app/layout.tsx`.

## Pitfalls
- **`npm run lint` is interactive and will hang.** There is no ESLint config file, so `next lint` prompts "How would you like to configure ESLint?" and blocks on stdin. Do NOT run it in CI/agents; to enable linting, commit an `eslint.config.mjs` (next 15 + eslint 9 flat config) first. (`next lint` is also deprecated in Next 15.)
- **No test script exists.** `npm test` is undefined — don't assume a test suite. Verify changes via `npm run build`.
- **Static export only.** `next.config.ts` sets `output: 'export'` and `images.unoptimized: true`. You cannot add API routes, server actions, middleware, or `cookies()`/`headers()` runtime code — they break the static build. The enquiry form uses `mailto:` only (see TODO in `ContactForm.tsx`).
- **`requirements.txt` (now `CONTENT_BRIEF.md`) is mislabeled.** It is the website content/IA brief, NOT a Python dependency manifest. This is a Next.js project; ignore it for tooling. Renamed so Cloudflare Pages' build no longer mis-detects a Python project and runs `pip install` on it (which fails).
- **Pinned `next@15.1.0` has a known CVE** (Next advisory CVE-2025-66478). Bumping `next` + `eslint-config-next` requires re-verifying the build.
- `out/`, `.next/`, `node_modules/` are gitignored and build-generated — never hand-edit; rebuild instead.
- Contact details in `src/lib/constants.ts` (`CONTACT`) and `metadataBase` are placeholders pending go-live (see README "Pending Before Go-Live").
