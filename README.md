# 🧪 Digital Sandbox

**An experimental personal portfolio for Priyan Saxena** — built to feel less like a resume and more like a lab you get to explore.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-r160-000000?style=flat&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat&logo=greensock&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen?style=flat)

**[🔗 Live Demo](#)** &nbsp;•&nbsp; **[LinkedIn](https://www.linkedin.com/in/priyan-saxena25/)** &nbsp;•&nbsp; **[GitHub](https://github.com/Priyan-Saxena)**

> Replace the Live Demo link above once deployed (Netlify/Vercel/GitHub Pages).

---

## 📑 Table of Contents

- [Why This Exists](#-why-this-exists)
- [The Experience](#-the-experience)
- [Features, In Detail](#-features-in-detail)
- [Preview](#️-preview)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Customizing This for Yourself](#-customizing-this-for-yourself)
- [Browser Support](#-browser-support)
- [Featured Projects](#-featured-projects)
- [Hackathons](#-hackathons)
- [Credits](#-credits)
- [Connect](#-connect)
- [License](#-license)

---

## 💡 Why This Exists

Most student portfolios look the same: a hero section, an about paragraph, a grid of project cards, a contact form. **Digital Sandbox** intentionally ignores that template. Instead of asking a visitor to *read* a portfolio, it asks them to *boot into* one — like logging into a terminal, watching a system initialize, and then stepping into a 3D space where the "sections" of a normal resume site (projects, hackathons, interests) are reframed as exhibits in a lab.

The goal wasn't just visual flair — it was to make the site itself demonstrate the kind of front-end/creative-coding skill that a static resume can't show on its own.

---

## 🖥️ The Experience

The site is designed to be walked through in order, not skimmed:

1. **Boot sequence** — a terminal-style typewriter animation simulates a system starting up, setting the tone before any content is shown.
2. **Entry** — the visitor clicks **ENTER →** (or presses <kbd>Enter</kbd>) to pass through the terminal and into the main site.
3. **The Sandbox** — a live Three.js scene (wireframe geometry + a particle field) runs continuously in the background as an ambient, reactive layer behind the content.
4. **Scroll-driven storytelling** — as the visitor scrolls, GSAP + ScrollTrigger animate sections into view and drive number counters (e.g., stats, years, project counts) upward from zero.
5. **The Lab** — project and hackathon cards use a tilt-on-hover effect (cards respond to cursor position with a subtle 3D tilt), reinforcing the "interactive lab" metaphor.

---

## ✨ Features, In Detail

| Feature | What it does |
|---|---|
| **Terminal boot sequence** | Typewriter-animated lines simulate a CLI boot log before revealing the site |
| **Three.js background** | A persistent, lightweight 3D wireframe + particle field rendered with WebGL |
| **GSAP + ScrollTrigger** | Scroll-position-based animations, including animated number counters |
| **Tilt-on-hover cards** | Project/hackathon cards react to mouse position with a 3D tilt effect |
| **Noise overlay + type pairing** | A subtle film-grain-style noise texture layered over a mono/display font pairing for a "lab equipment" aesthetic |
| **Fully responsive** | Layout, 3D scene, and animations adapt across desktop, tablet, and mobile |

---

## 🖼️ Preview

> Add real screenshots or a screen recording once available — this sells the project far better than text.

```md
![Boot sequence](./assets/preview-boot.gif)
![3D sandbox scene](./assets/preview-scene.png)
![Lab cards with tilt effect](./assets/preview-cards.gif)
```

---

## 🛠️ Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Markup / Styling | HTML5, CSS3 | No framework overhead — full control over custom type/noise/layout |
| Logic | Vanilla JavaScript | Keeps the boot sequence and interactions dependency-light |
| 3D / WebGL | Three.js (r160) | Renders the wireframe + particle field background |
| Animation | GSAP 3 + ScrollTrigger | Scroll-linked reveals and animated counters |

---

## 📁 Project Structure

> Update this to match your actual file/folder names before publishing.

```
digital-sandbox/
├── index.html            # Entry point — boot sequence + main site
├── assets/
│   ├── images/
│   └── fonts/
├── css/
│   └── style.css
├── js/
│   ├── boot.js            # Terminal typewriter sequence
│   ├── scene.js           # Three.js wireframe + particle field
│   ├── scroll.js          # GSAP + ScrollTrigger animations, counters
│   └── tilt.js            # Tilt-on-hover lab cards
└── README.md
```

---

## 🚀 Getting Started

**Prerequisites:** a modern browser with WebGL support (Chrome, Firefox, or Edge recommended).

```bash
# Clone the repo
git clone https://github.com/Priyan-Saxena/digital-sandbox.git
cd digital-sandbox

# Serve locally (any static server works)
npx serve .
```

Then open the local URL shown in your terminal, wait for the boot sequence, and press **Enter**.

> Opening `index.html` directly via `file://` may block some WebGL/module features in certain browsers — a local server is the safer option.

---

## ☁️ Deployment

Zero-config deploy on any static host:

| Platform | Steps |
|---|---|
| **Netlify** | Drag-and-drop the folder, or connect the GitHub repo for auto-deploys |
| **Vercel** | Import the GitHub repo — no build command needed for static HTML |
| **GitHub Pages** | Push to `main`, enable Pages in repo settings, root directory |

---

## 🎨 Customizing This for Yourself

If you're forking this as a starting point for your own site:

- **Boot text** — edit the typewriter lines in `boot.js` to your own intro
- **3D scene** — tweak particle count, wireframe geometry, and colors in `scene.js`
- **Counters/stats** — update the numbers and labels driven by ScrollTrigger
- **Cards** — swap in your own projects/hackathons in the lab card markup
- **Type & color** — the noise overlay and mono/display font pairing are controlled via CSS variables in `style.css`

---

## 🌐 Browser Support

| Browser | Supported |
|---|---|
| Chrome | ✅ Recommended |
| Firefox | ✅ Recommended |
| Edge | ✅ Recommended |
| Safari | ⚠️ WebGL/animation performance may vary |
| Mobile browsers | ✅ Responsive, reduced particle count recommended for performance |

---

## 🗂️ Featured Projects

- **Hostel Allocation System** — *add a one-line description*
- **Movie Recommendation System** — *add a one-line description*
- **ET Smart News** — *add a one-line description*

---

## 🏆 Hackathons

- Women Who Master Hackathon (Zonal)
- ISRO — Bharatiya Antariksh Hackathon
- Climate Data Hackathon

---

## 🙏 Credits

- [Three.js](https://threejs.org/) — 3D wireframe + particle field
- [GSAP](https://gsap.com/) — scroll animations and counters

---

## 🔗 Connect

- **LinkedIn:** [priyan-saxena25](https://www.linkedin.com/in/priyan-saxena25/)
- **GitHub:** [Priyan-Saxena](https://github.com/Priyan-Saxena)

---

## 📄 License

This project is currently unlicensed. Add a `LICENSE` file (MIT is a common default for personal portfolio sites) if you want to define usage terms for others.
