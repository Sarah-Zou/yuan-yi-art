# 元艺手工坊 · Yuan-Yi Art — Brand Site

A premium, minimal, multi-page brand showcase website for a contemporary Chinese handmade craft brand. Built with Next.js (App Router) + TypeScript + Tailwind v4, configured for static export so the finished site can be deployed on any static host.

This site is **display only**. There is no shopping cart, checkout, or ecommerce backend.

## Pages

- `/` — Home
- `/about/` — Brand Story
- `/collection/` — Selected Works (12 curated pieces)
- `/craft/` — Craft Heritage
- `/contact/` — Contact

## Tech Stack

- Next.js 15 (App Router, static export)
- React 19, TypeScript
- Tailwind CSS v4
- `next/font/google` for Cormorant Garamond, Inter, and Noto Serif SC

## Folder Structure

```text
site/
├─ app/
│  ├─ layout.tsx              # Shared shell, fonts, metadata
│  ├─ globals.css             # Palette, typography, base utilities
│  ├─ page.tsx                # Home
│  ├─ about/page.tsx
│  ├─ collection/page.tsx
│  ├─ craft/page.tsx
│  └─ contact/page.tsx
├─ components/
│  ├─ SiteHeader.tsx
│  ├─ SiteFooter.tsx
│  ├─ BilingualHeading.tsx
│  ├─ SectionLabel.tsx
│  ├─ WorkCard.tsx
│  ├─ WorkGrid.tsx
│  └─ QuietLink.tsx
├─ content/
│  ├─ brand.ts                # Brand name, taglines, story, contact info
│  ├─ works.ts                # 12 selected works
│  └─ crafts.ts               # 4 craft traditions
├─ public/images/
│  ├─ brand/                  # Hero imagery
│  └─ works/                  # One photo per selected work
├─ next.config.ts             # Static export settings
├─ package.json
└─ README.md
```

## Run Instructions (Windows / PowerShell)

From this `site/` folder:

1. Install Node dependencies (Node 20+ recommended):

```powershell
npm install
```

2. Start the development server:

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

3. Build a static export for deployment:

```powershell
npm run build
```

The production-ready static site will be written to `out/`. Upload its contents to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.).

## How To Update Content

All copy lives in plain TypeScript files under `content/`. No coding knowledge is required to change text — just edit the strings and save.

### Brand voice and contact info
Edit `content/brand.ts` to change:
- brand name (Chinese / English)
- tagline, short intro, mission
- contact email, location, social handles
- the three-chapter brand story (grandmother, mother, founder)

### Selected Works
Edit `content/works.ts` to:
- add, remove, or reorder works (the grid updates automatically)
- update title, description, materials, inspiration
- set the `image` field for each work (see below)

### Craft traditions
Edit `content/crafts.ts` to update the four craft introductions shown on `/craft/`.

### Featured works on the home page
The home page shows four featured pieces. Control which ones appear by editing the `featuredSlugs` array at the bottom of `content/works.ts`.

## How To Add Real Photos

Each work in `content/works.ts` has an optional `image` field. When empty, the site shows a quiet placeholder tile with the work's Chinese title — so the layout is always stable.

To add a real photo for a work:

1. Put the photo into `public/images/works/` (for example: `public/images/works/lotus-sachet.jpg`).
2. Open `content/works.ts` and set the `image` path on that work:

```ts
{
  slug: "lotus-sachet",
  // ...
  image: "/images/works/lotus-sachet.jpg",
}
```

3. Save. Dev server hot-reloads automatically.

Recommended: use the web-optimized WebP exports from the photo pipeline in the parent folder (`../photos_processed/web/`). JPG/PNG/WebP are all supported.

For the Home hero image, add `public/images/brand/hero.jpg` and swap the placeholder block in `app/page.tsx` (search for `Image placeholder`).

## Design System (at a glance)

- **Palette**: warm ivory, linen, stone, ink; clay and rose used only as rare accents
- **Type**: `Cormorant Garamond` (display serif), `Inter` (body), `Noto Serif SC` (Chinese)
- **Layout**: generous whitespace, thin section rules, small-caps eyebrow labels, bilingual pairings
- **Motion**: restrained; respects `prefers-reduced-motion`

## SEO & Accessibility

- Per-page `metadata` (title + description) via Next.js
- Semantic landmarks (`header`, `main`, `footer`, `nav`, `article`)
- Alt text derived from bilingual work titles
- Visible focus states on links and form inputs
- No color is the only indicator for any UI state

## Deploy

Because `next.config.ts` sets `output: "export"`, `npm run build` produces a fully static `out/` folder that can be deployed to any static host without a server.

### GitHub Pages (`sarah-zou/yuan-yi-art`)

Live URL (after setup): `https://sarah-zou.github.io/yuan-yi-art/`

This repository should use the **`site/` folder as the Git repo root** (the folder that contains `package.json`, `app/`, `public/`, and `.github/`).

1. On GitHub, create an empty repository named **`yuan-yi-art`** under **`sarah-zou`**.
2. **Settings → Pages → Build and deployment**: set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push the `main` branch. The workflow **`.github/workflows/deploy-pages.yml`** runs `npm ci`, builds with `BASE_PATH=/yuan-yi-art`, and publishes **`out/`**.

**Why `BASE_PATH`:** GitHub Pages serves project sites at `/REPO_NAME/`. The workflow sets `BASE_PATH` so routes and assets resolve correctly.

**Local builds**

- Normal preview (root URLs): `npm run build` then `npm run preview`.
- Same output as CI (subpath URLs): `BASE_PATH=/yuan-yi-art npm run build` (PowerShell: `$env:BASE_PATH="/yuan-yi-art"; npm run build`).

Public images and gallery URLs use `NEXT_PUBLIC_BASE_PATH` via `lib/assetUrl.ts` so `/images/...` files load correctly under the subpath.

### Other hosts

Copy everything inside `out/` to any static host’s web root (Netlify, Cloudflare Pages, S3, etc.). Use `BASE_PATH` only if the site is **not** served from the domain root.
