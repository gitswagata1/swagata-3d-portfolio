# Swagata Banerjee — 3D Portfolio

An interactive 3D portfolio website built with **React**, **Vite** and **Three.js**.
It features a custom gooey cursor, a react-three-fiber hero scene, an animated
gradient-mesh contact section, and showcases projects, certifications and skills.

## Tech stack

| Area      | Tools                                      |
| --------- | ------------------------------------------ |
| UI        | React 18, Tailwind CSS v4                  |
| 3D        | three.js, @react-three/fiber, @react-three/drei |
| Motion    | GSAP, CSS animations                       |
| Tooling   | Vite 5                                     |
| Hosting   | Vercel                                     |

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

### Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the dev server             |
| `npm run build`   | Build for production to `dist/`  |
| `npm run preview` | Preview the production build     |

## Project structure

```
.
├── public/            Static assets (favicon, Open Graph images)
├── src/
│   ├── components/    Hero, Scene3D, Work, About, Contact, Navbar, ...
│   ├── App.jsx        Page composition
│   ├── main.jsx       Entry point
│   └── index.css      Global styles and design tokens
├── index.html
├── vite.config.js
└── package.json
```

## Deployment

The site deploys to Vercel with zero configuration. Vercel detects Vite
(build command `vite build`, output directory `dist`). Connect the repository
in the Vercel dashboard for automatic deploys on every push.

## Author

**Swagata Banerjee** — [GitHub](https://github.com/gitswagata1)
