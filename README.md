# robertauguste.dev

Personal portfolio for Robert Carl Auguste — built with Next.js 16 (App Router),
React 19, Tailwind CSS v4, and Framer Motion.

The site walks through the story behind building intelligent systems (Kevin,
ConversationOS) that eliminate repetitive work for professionals.

## Stack

- **Framework**: Next.js 16 (Turbopack)
- **UI**: React 19, Tailwind CSS v4
- **Motion**: Framer Motion
- **Language**: TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Project Structure

- `src/app` — routes, layout, and metadata (including generated icon/OG image)
- `src/components` — page sections (`Hero`, `Why`, `Story`, `Kevin`, `ConversationOS`)
- `src/components/ui` — shared building blocks (`WorkflowCard`, `WorkflowConnector`)
