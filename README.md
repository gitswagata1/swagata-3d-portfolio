<div align="center">

# Swagata Banerjee — 3D Portfolio

An interactive personal portfolio with a real-time 3D hero, a custom gooey cursor and
smooth scroll-reveal motion.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r169-000000?logo=threedotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
[![CI](https://github.com/gitswagata1/swagata-3d-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/gitswagata1/swagata-3d-portfolio/actions/workflows/ci.yml)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Customising the content](#customising-the-content)
- [Performance](#performance)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Citation](#citation)
- [License](#license)

## Overview

A single-page portfolio that presents projects, certifications, skills and contact
details. The hero renders a WebGL scene with `react-three-fiber`, while the rest of the
page uses lightweight CSS and GSAP motion so it stays fast on ordinary hardware.

## Features

- **3D hero scene** rendered with Three.js and react-three-fiber
- **Custom gooey cursor** and animated gradient-mesh contact section
- **Scroll-reveal animation** on every section through a reusable `Reveal` component
- **Animated counters and a skills marquee**
- **Projects and certifications** sections driven by plain data arrays
- **Open Graph and social preview** images for rich link sharing
- **Optimised bundle**: Three.js, react-three-fiber and React are split into separate cached chunks

## Tech stack

| Area    | Tools                                           |
| ------- | ----------------------------------------------- |
| UI      | React 18, Tailwind CSS v4                       |
| 3D      | three.js, @react-three/fiber, @react-three/drei |
| Motion  | GSAP, CSS animations                            |
| Build   | Vite 5                                          |
| Hosting | Vercel                                          |

## Getting started

**Prerequisites:** Node.js 18 or newer.

```bash
git clone https://github.com/gitswagata1/swagata-3d-portfolio.git
cd swagata-3d-portfolio
npm install
npm run dev          # http://localhost:5173
```

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build         |

## Project structure

```
swagata-3d-portfolio/
├── public/                  Static assets served as-is
│   ├── favicon.svg
│   └── og.png / og.svg      Open Graph preview images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           Site navigation
│   │   ├── Hero.jsx             Landing section
│   │   ├── Scene3D.jsx          react-three-fiber 3D scene
│   │   ├── Marquee.jsx          Scrolling skills strip
│   │   ├── About.jsx            About section
│   │   ├── Work.jsx             Projects list
│   │   ├── Certifications.jsx   Certifications list
│   │   ├── Contact.jsx          Contact links and gradient mesh
│   │   ├── Counter.jsx          Animated number counter
│   │   ├── Cursor.jsx           Custom gooey cursor
│   │   ├── GradientMesh.jsx     Animated background
│   │   └── Reveal.jsx           Scroll-reveal wrapper
│   ├── App.jsx              Page composition and loader
│   ├── main.jsx             Application entry point
│   └── index.css            Global styles and design tokens
├── index.html               HTML shell and meta tags
├── vite.config.js           Vite config with chunk splitting
├── package.json
├── LICENSE
└── README.md
```

## Customising the content

Most content lives in plain arrays inside the components, so no data layer is needed:

| To change              | Edit                                |
| ---------------------- | ----------------------------------- |
| Projects               | `src/components/Work.jsx`           |
| Certifications         | `src/components/Certifications.jsx` |
| Contact links          | `src/components/Contact.jsx`        |
| Colours and typography | `src/index.css`                     |
| Page title and meta    | `index.html`                        |

## Performance

`vite.config.js` splits the heavy 3D libraries into separate chunks (`three`, `r3f`,
`react`) so they are cached independently and the initial paint is not blocked by
unchanged vendor code.

## Deployment

The project deploys to [Vercel](https://vercel.com) with zero configuration. Vercel
detects Vite (build command `vite build`, output directory `dist`). Import the
repository in the Vercel dashboard to get automatic deploys on every push.

## Roadmap

Planned work, ideas for taking the project further and open research questions are in
[ROADMAP.md](ROADMAP.md). Good first tasks are labelled
[`good first issue`](https://github.com/gitswagata1/swagata-3d-portfolio/labels/good%20first%20issue).

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) and the
[Code of Conduct](CODE_OF_CONDUCT.md) first. To report a vulnerability, follow
[SECURITY.md](SECURITY.md).

## Citation

If you use this project in research or a product, you can cite it using
[CITATION.cff](CITATION.cff) (GitHub shows a "Cite this repository" button).

## License

Released under the [MIT License](LICENSE).

---

Built by **Swagata Banerjee** · [GitHub](https://github.com/gitswagata1) · [LinkedIn](https://linkedin.com/in/theswagata1)
