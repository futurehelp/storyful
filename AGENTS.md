# Storyful implementation notes

## Source of truth

- Editorial content lives in `src/lib/site-content.ts`.
- Page composition lives in `src/components/site-page.tsx`.
- Reusable layout primitives live in `src/components/layout`.
- Section-level behavior lives in `src/components/sections`.
- Shared motion and link primitives live in `src/components/motion.tsx` and `src/components/ui`.
- Original downloaded assets live in `public/images/source`.

## Guardrails

- Keep the homepage native. Do not add an iframe or restore WordPress markup.
- Keep client-only behavior limited to components that need state, events, or Framer Motion.
- Preserve Storyful's editorial credibility, verified video positioning, and orange and blush accent system while modernizing the interface.
- Use local assets for visible imagery.
- Run `npm run lint`, `npm run typecheck`, and `npm run build` before deployment.
