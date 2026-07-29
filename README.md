# Keepr — Landing Page (Next.js + TypeScript)

The Keepr marketing landing page, exported as a **Next.js 14 (App Router) + TypeScript** project.

_"Your files, your storage, your rules."_ — an open-source, self-hostable personal file & media store.

## Getting started

```bash
cd nextjs
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server (hot reload) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run Next.js lint |

## Project structure

```
nextjs/
├── app/
│   ├── globals.css          # Brand tokens (light/dark) + resets
│   ├── layout.tsx           # <html>/<head>, fonts, metadata, no-flash theme script
│   ├── page.tsx             # The landing page (client component: theme toggle, copy)
│   ├── content.ts           # Typed content: features, steps, FAQs, mock items
│   └── components/
│       └── icons.tsx        # <Icon>, <LogoMark>, shared icon path sets
├── package.json
├── tsconfig.json
├── next.config.js
└── next-env.d.ts
```

## Design system

Styling is 100% CSS custom properties defined in `app/globals.css`, forked from the Cove
design system: cream/paper surfaces, a terracotta accent (`--accent`), teal secondary,
and the Sora (display) + Manrope (body) type pairing loaded from Google Fonts in
`layout.tsx`.

**Theming** — light/dark is driven by the `data-theme` attribute on `<html>`. An inline
script in `layout.tsx` sets it before paint (respecting `prefers-color-scheme` and a saved
`localStorage['keepr-theme']`) so there's no flash. The nav toggle flips it at runtime.

To adjust the palette, edit the `:root` and `[data-theme="dark"]` token blocks in
`globals.css` — every component reads from those variables.

## Content

All copy lives in `app/content.ts` as typed arrays, so features/steps/FAQs can be edited
without touching layout. Only shipping features are claimed; sharing is explicitly labeled
roadmap / coming soon.

## Notes

- The hero app mockup (folder grid + live quota meter) is pure HTML/CSS/SVG — no images.
- The CTA links (`#demo`, GitHub) are placeholders — wire them to your real demo/signup and
  repository URLs.
- Fonts load from Google Fonts over the network. For a fully self-contained deploy, swap to
  `next/font` (`next/font/google`) to self-host them.
