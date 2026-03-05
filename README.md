<div align="center">

# 🛡️ Aakash Sapkota — Portfolio

**Cybersecurity Student | Full Stack Developer | Ethical Hacking Enthusiast**

A modern, animated developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion** — featuring a futuristic cybersecurity theme, glassmorphism design, and PPT-style scroll snapping.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

[🌐 Live Demo](https://aakashsapkota.in.net/) · [📧 Contact](mailto:sapkotaswikar123@gmail.com)

</div>  

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌙 **Dark/Light Toggle** | Theme switch with `localStorage` persistence, zero flash on reload |
| 🎨 **Glassmorphism** | Frosted glass cards with backdrop blur and neon borders |
| ⚡ **Framer Motion** | Smooth scroll-reveal animations on every section |
| 📺 **PPT Scroll Snap** | Full-viewport section snapping for a slide-like feel |
| ⌨️ **Typing Animation** | Auto-cycling role display in the hero section |
| 🔮 **Animated Background** | Cyber grid overlay, floating particles, gradient orbs |
| 🤖 **AI Bot (Coming Soon)** | Floating chat button with a teaser modal |
| 📱 **Fully Responsive** | Pixel-perfect on mobile, tablet, and desktop |
| 🔍 **SEO Optimized** | Meta tags, Open Graph, Twitter Cards, JSON-LD structured data |

---

## 📸 Sections

- **Hero** — Animated profile ring, typing text, CTA buttons, floating tech icons
- **About** — Bio, cybersecurity/development highlights, stats grid
- **Skills** — Category tabs (Frontend, Backend, Cybersecurity, Tools) with animated progress bars
- **Projects** — Filterable grid with status badges, tech tags, hover overlays
- **Experience** — Timeline + tabs for Education, Certifications, Achievements
- **GitHub Stats** — Self-contained stat cards, language bar, contribution heatmap
- **Blog** — Cybersecurity & development article cards
- **Contact** — Contact info cards, social links, validated form
- **Footer** — Social links, copyright

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + CSS Variables
- **Animations:** [Framer Motion](https://motion.dev/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Font Awesome + Simple Icons)
- **Typing Effect:** [React Type Animation](https://www.npmjs.com/package/react-type-animation)
- **Fonts:** Inter + Fira Mono (Google Fonts)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [npm](https://www.npmjs.com/) 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/aakashsapkotaa/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css           # Theme variables, glassmorphism, scroll-snap
│   ├── layout.tsx            # Root layout, SEO metadata, fonts, particles
│   └── page.tsx              # Main page composing all sections
├── components/
│   ├── Navbar.tsx             # Glass navbar, mobile menu, theme toggle
│   ├── Hero.tsx               # Typing animation, profile glow ring, CTAs
│   ├── About.tsx              # Bio, skill categories, stats
│   ├── Skills.tsx             # Category tabs, animated progress bars
│   ├── Projects.tsx           # Filter grid, hover overlays, status badges
│   ├── Experience.tsx         # Timeline, education/cert/achievement tabs
│   ├── GitHubStats.tsx        # Stat cards, language bar, heatmap
│   ├── Blog.tsx               # Blog post cards
│   ├── Contact.tsx            # Contact form, info cards, social links
│   ├── Footer.tsx             # Social links, copyright
│   ├── AIBot.tsx              # Floating AI button + Coming Soon modal
│   └── ui/
│       └── Particles.tsx      # Client-side floating particles
├── context/
│   └── ThemeContext.tsx        # Dark/light theme with localStorage
└── data/
    ├── social.ts              # Social links & personal info
    ├── skills.ts              # Skills by category
    ├── projects.ts            # Project data
    └── experience.ts          # Experience, education, certs, achievements
```

---

## ⚙️ Customization

### Personal Info
Edit `src/data/social.ts` to update your name, links, and resume path.

### Skills
Edit `src/data/skills.ts` to modify skill categories and proficiency levels.

### Projects
Edit `src/data/projects.ts` to add, remove, or update projects.

### Experience
Edit `src/data/experience.ts` for your work history, education, and certifications.

### Theme Colors
Edit the CSS variables in `src/app/globals.css` under `:root` to change the accent colors.

---

## 📄 License

This project is open source under the [MIT License](./LICENSE).

---

<div align="center">

**Built with ❤️ by [Aakash Sapkota](https://github.com/aakashsapkotaa)**

</div>
