# Moisés Jiménez — Portfolio

Personal portfolio website built with **Astro**, **Tailwind CSS** and **TypeScript**. Available in English and Spanish.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [TypeScript](https://www.typescriptlang.org) — type safety
- [Onest](https://fontsource.org/fonts/onest) — variable font

## Features

- **Bilingual (EN / ES)** — full English and Spanish support with a language switcher in the navbar
- Responsive layout (mobile, tablet, desktop)
- Animated typing effect in the hero section
- Projects showcase with grayscale-to-color hover effect
- Experience timeline
- Contact section

## Routes

| Path | Description |
|---|---|
| `/` | Home — English |
| `/projects` | All projects — English |
| `/es/` | Home — Spanish |
| `/es/projects` | All projects — Spanish |

## Project Structure

```
src/
├── components/       # Astro components (Header, Footer, Projects, Experience…)
├── i18n/
│   └── ui.ts         # EN/ES translation strings and helpers
├── icons/            # SVG icon components
├── layouts/
│   └── Layout.astro  # Base HTML layout
└── pages/
    ├── index.astro       # English home
    ├── projects.astro    # English projects
    └── es/
        ├── index.astro   # Spanish home
        └── projects.astro
```

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at localhost:4321
npm run build     # Type-check and build to ./dist/
npm run preview   # Preview the production build locally
```

## License

MIT
