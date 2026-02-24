# dennisdiepolder.com

Personal portfolio site for Dennis Diepolder — Software & Platform Engineer.

## Tech Stack

- **Next.js 16** (App Router)
- **next-intl** — i18n with DE/EN locale routing
- **Tailwind CSS v4** — utility-first styling
- **next-themes** — dark/light mode (dark default)
- **Lucide React** — icons
- **TypeScript**

## Features

- Single-page portfolio with 7 sections (Hero, What I Do, Projects, Skills, Background, Blog, Contact)
- Full i18n support (German / English) with locale prefix routing
- Dark mode default with light mode toggle
- 4 blog posts with dedicated pages
- GitHub contribution chart embed
- Mobile-first responsive design with monospace accent font (Geist Mono)
- SEO: OpenGraph, Twitter cards, JSON-LD structured data, sitemap.xml, robots.txt, hreflang alternates

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── globals.css                # Tailwind config + theme
│   ├── sitemap.ts                 # Dynamic sitemap generation
│   └── [locale]/
│       ├── layout.tsx             # Locale layout (fonts, providers, SEO)
│       ├── page.tsx               # Homepage (all sections)
│       └── blog/
│           ├── page.tsx           # Blog index
│           └── [slug]/page.tsx    # Blog post pages
├── components/                    # All UI components
├── i18n/                          # Routing, request config, navigation
└── middleware.ts                  # Locale detection + redirect
messages/
├── en.json                        # English copy + blog content
└── de.json                        # German copy + blog content
```

## Deployment

Hosted on AWS Amplify with Route53 DNS. Subdomains (`monti.`, `monti-grafana.`, etc.) are handled independently via Route53 records.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
