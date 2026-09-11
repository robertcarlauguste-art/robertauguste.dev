# Robert Auguste — Portfolio v2

Next.js App Router portfolio positioning Robert Carl Auguste as an Applied AI Engineer. Built on the existing React, TypeScript, Tailwind, Geist, and Netlify foundation.

## Development

- `npm ci`
- `npm run dev` (http://localhost:3000)
- `npm run lint`
- `npm run build`
- `npm run start`

## Content and routes

- `/`: Applied AI Engineer hero, flagship JobOps, ConversationOS, Kevin, Engineering Journey, About/toolkit, selected credentials, contact.
- `/projects/jobops-ai`: engineering case study.
- `src/lib/portfolio.ts`: verified external links, technology lists, and selected credentials.
- `public/Robert_Auguste_Resume_v38.pdf`: actual supplied v38 résumé.
- `src/components`: reusable page sections and site navigation/footer.
- `src/app/globals.css`: responsive monochrome/cyan theme, keyboard focus, reduced motion, and print treatment.

All principal portfolio content is server rendered and statically prerendered. It does not depend on animation or client JavaScript for visibility. Résumé text remains searchable in the original PDF.

See [PORTFOLIO_V2_AUDIT.md](./PORTFOLIO_V2_AUDIT.md) for audit findings, factual sources, missing assets, and the deployment checklist.

## Existing deployment

The repository's `netlify.toml` is retained. Build command: `npm run build`; publish directory: `.next`; existing Netlify Next.js plugin. Set `SITE_URL=https://robertauguste.dev` in Netlify; the canonical production origin is also the code fallback. No DNS or domain changes are needed if the existing GitHub/Netlify connection is still active.
