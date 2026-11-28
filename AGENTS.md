# Repository notes

Vite + React 19 + Tailwind CSS v4 single-page site for TEDxCrucibleLusaka.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run preview` — preview the production build

## Conventions

- Brand red is `#EB0028`. Use the Tailwind utility `ted-red` (defined in
  `tailwind.config.js` and `src/index.css`) in JSX class names, and import
  `BRAND_RED` / `BRAND_RED_HOVER` from `src/theme.js` for inline styles and
  canvas/animation props. Do not introduce other red hex values.
- Page views are switched in `src/App.jsx` via `activeView`
  (`home`, `speakers`, `contact`, `apply`); there is no router.
- Components live in `src/components`; reusable canvas/UI widgets in
  `src/components/ui`.
- The homepage is editorial and split (`Hero.jsx`, `MainContent.jsx`). Keep
  the section anchors (`about`, `program`, `apply`) with `scroll-mt` offsets for
  the floating navbar. Ambient particle effects live in `HomeAmbient.jsx` (3D
  fixed backdrop) and `Hero.jsx` (`ParticleDrift` lines + cursor-driven red
  links); keep them subtle, reduced-motion aware, and away from body copy. The
  hero canvas stays pointer-events:none and tracks the pointer from `window` so
  CTA buttons remain clickable.
- Every hero is exactly one viewport tall (`min-h-svh`). The homepage uses
  `Hero.jsx`; the Speakers, Contact, and Apply pages use the shared `PageHero`
  (`eyebrow`, `title`, `description`, `actions`, `meta`, `background`). Keep
  hero content one screen tall: `.hide-on-short` and `.hero-shell` in
  `src/index.css` condense it below 660px viewport height, and `ScrollCue`
  (`.hero-scroll-cue`) only appears when there is room.
- Keep event dates consistent across `Hero.jsx`, `MainContent.jsx`, and
  `SpeakerForm.jsx` (applications close 10 October 2026; event 15 December 2026).
