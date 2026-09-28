# masaladose.co — Digital Product & Engineering Studio

> High-performance, interactive landing page for **masaladose.co** — building modern websites, AI-powered experiences, SaaS platforms, workflow automation systems, and custom digital solutions.

![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.4-0055FF?style=for-the-badge&logo=framer&logoColor=white)

---

## 📌 Overview

**masaladose.co** is a modern digital product and software engineering studio. This repository contains the official high-converting, motion-enhanced landing page engineered with React 19, TypeScript, Vite, Tailwind CSS v4, GSAP, and WebGL shader canvas effects.

The platform guides prospective clients through a structured 3-tier engagement model (**Presence**, **Growth**, and **Scale**), demonstrating how businesses can transition from basic web presence to scalable SaaS architectures and automated digital platforms.

---

## ✨ Key Features & Highlights

- **🎨 Bespoke Design System**: Custom warm golden visual aesthetic (`#f3b72b` background, `#200f07` deep dark warm charcoal elements, high contrast typography) using Google Fonts (*Syne*, *Plus Jakarta Sans*, *JetBrains Mono*).
- **🎯 Reticle Target Cursor (`TargetCursor.tsx`)**: Custom GSAP 3 animated target reticle cursor featuring magnetic element locking, smooth spring physics, scale dynamic feedback, and parallax tracking.
- **🌊 WebGL Dither Shader Veil (`DitherVeil.tsx`)**: Hardware-accelerated WebGL noise & dither grain canvas background rendered using `ogl`.
- **🚀 Stage Selector Architecture (`StageSelector.tsx`)**: Interactive centerpiece showcasing studio offerings across three distinct growth tiers:
  - **Stage 01: Presence** — Essential single-page digital foundation.
  - **Stage 02: Growth** — Interactive multi-section business platform with database & automation.
  - **Stage 03: Scale** — Full-stack SaaS architecture, custom APIs, and AI integrations.
- **📊 Comprehensive Stage Comparison Matrix (`StageComparison.tsx`)**: Side-by-side technical and feature matrix comparison across Stage 01, Stage 02, and Stage 03.
- **🔄 Step-by-Step Process Timeline (`Process.tsx`)**: Structured 4-stage client engagement lifecycle from discovery to launch.
- **🛠️ Studio Capabilities Grid (`Capabilities.tsx`)**: Detailed breakdown of technical capabilities (Web Apps, AI Platforms, SaaS Infrastructure, Workflow Automation).
- **💬 Interactive Inquiry Modal (`ContactModal.tsx`)**: Multi-step project onboarding modal with interactive options, form validation, and quick email copying.
- **⚡ Optimized Performance**: Built on Vite 8, featuring fast HMR, code splitting, and zero unnecessary runtime overhead.
- **♿ Inclusive Motion Design**: Respects user hardware preferences via `useReducedMotion` hook.

---

## 🛠️ Tech Stack

### Core Framework & Build Tools
- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Linting & Code Quality**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

### Styling & UI Design
- **CSS Framework**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Icons**: [Lucide React](https://lucide.react.dev/)

### Animation & WebGL Graphics
- **Motion & Physics**: [GSAP 3](https://gsap.com/) & [Framer Motion 13](https://framer.com/motion)
- **3D / Shader Rendering**: [OGL](https://github.com/oframe/ogl) (Minimal WebGL library)

---

## 📁 Repository Structure

```
landing_page_masaladose.co/
├── public/                 # Static public assets (favicons, og-images, icons)
├── src/
│   ├── assets/             # Brand graphics and vector illustrations
│   ├── components/         # Modular UI section components
│   │   ├── AnimatedMasalaDosa.tsx   # Custom animated SVG brand hero visual
│   │   ├── BlueprintVisual.tsx      # System blueprint visualization diagram
│   │   ├── BrandStatement.tsx       # Core studio philosophy statement
│   │   ├── Capabilities.tsx         # Capabilities breakdown grid
│   │   ├── ContactModal.tsx         # Interactive inquiry & booking modal
│   │   ├── CustomCursor.tsx         # Fallback pointer cursor component
│   │   ├── DitherVeil.tsx           # WebGL shader grain & noise canvas overlay
│   │   ├── FinalCTA.tsx             # Call-to-action conversion section
│   │   ├── Footer.tsx               # Footer with links & studio socials
│   │   ├── Hero.tsx                 # Main landing hero section
│   │   ├── IntroAnimation.tsx       # Interactive splash/preloader intro sequence
│   │   ├── Navbar.tsx               # Sticky navigation header
│   │   ├── Process.tsx              # 4-stage project delivery process
│   │   ├── ScrollIndicator.tsx      # Scroll progress visual indicator
│   │   ├── StageArchitecture.tsx    # Live dynamic architecture diagrams
│   │   ├── StageCard.tsx            # Reusable stage card component
│   │   ├── StageComparison.tsx      # Feature comparison matrix table
│   │   ├── StageSelector.tsx        # Interactive stage selector centerpiece
│   │   ├── TargetCursor.tsx         # GSAP target reticle cursor overlay
│   │   └── WhatWeDo.tsx             # Studio positioning overview
│   ├── config/             # Site configuration & external links
│   ├── data/               # Structured data schemas (stages, capabilities, etc.)
│   ├── hooks/              # Custom React hooks (scroll progress, reduced motion)
│   ├── lib/                # Contact handlers & utility helpers
│   ├── styles/             # Global CSS declarations & Tailwind imports
│   ├── types/              # TypeScript interface definitions
│   ├── App.tsx             # Main application orchestrator
│   └── main.tsx            # React application entry point
├── index.html              # HTML shell & SEO meta configuration
├── package.json            # Dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **Package Manager**: `npm` (v9+) or `pnpm` / `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MasalaDose-co/cataloge_masaladose.co_main.git
   cd cataloge_masaladose.co_main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with Hot Module Replacement (HMR). |
| `npm run build` | Compiles TypeScript and builds the production bundle in `dist/`. |
| `npm run preview` | Serves the production build locally for testing. |
| `npm run lint` | Runs Oxlint to analyze code for potential errors and styling rules. |

---

## 🌐 Deployment

The application is built as a static Single Page Application (SPA) and can be easily deployed to any hosting service:

### Vercel / Netlify / Cloudflare Pages
1. Connect your GitHub repository to your deployment provider.
2. Set Build Command: `npm run build`
3. Set Output Directory: `dist`
4. Deploy!

---

## 📄 License & Ownership

© **masaladose.co**. All rights reserved.  
Designed and engineered for [masaladose.co](https://masaladose.co).
