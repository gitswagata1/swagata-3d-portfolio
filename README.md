# Swagata Banerjee — 3D Portfolio

An interactive 3D portfolio built with **React + Vite + Three.js** (react-three-fiber).
Cream/periwinkle aesthetic, a custom gooey cursor, an animated gradient-mesh
contact section, and real projects, certifications, and skills.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Deploy to Vercel

**Option A — Vercel CLI (fastest):**

```bash
npm i -g vercel
vercel             # first run: log in + link project (accept the detected Vite settings)
vercel --prod      # deploy to production
```

Vercel auto-detects Vite — Build Command `vite build`, Output Directory `dist`.

**Option B — GitHub + Vercel dashboard (auto-deploy on every push):**

1. Create an empty repo at https://github.com/new (e.g. `portfolio`).
2. Push:
   ```bash
   git remote add origin https://github.com/gitswagata1/portfolio.git
   git push -u origin main
   ```
3. On https://vercel.com → **Add New → Project** → import the repo → **Deploy**.

## Tech

React 18 · Vite 5 · Tailwind CSS v4 · @react-three/fiber + drei · three.js · GSAP-free CSS motion
