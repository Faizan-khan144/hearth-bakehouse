# Hearth — Bakehouse & Coffee

A marketing site for a small artisan bakehouse in the old market. Sourdough,
viennoiserie and cakes, baked before sunrise and sold until they run out.

Built as an original concept. The section patterns follow ordinary hospitality
landing page conventions — navigation, hero, product grid, story, gallery, visit
details — but the brand, copy, colour system and component design are written from
scratch.

---

## Table of contents

- [Overview](#overview)
- [Design direction](#design-direction)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Sections](#sections)
- [Motion system](#motion-system)
- [Content model](#content-model)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Customising](#customising)
- [Scripts](#scripts)

---

## Overview

Hearth is a single-page site for a fictional bakery. The goal is a warm, editorial
page that still loads fast: React and Tailwind, with hand-written CSS for motion
rather than an animation library.

There is no ordering system, CMS or backend. The order and visit blocks are
front-end only.

---

## Design direction

A bakery site should feel warm without turning into brown mush. The palette keeps
one dark crust tone, a light cream base, and two accents used with restraint.

| Token | Value | Used for |
| --- | --- | --- |
| `cream` | `#faf6ef` | Page background |
| `cream-dark` | `#f1e9dc` | Alternating sections |
| `crust` | `#2b1d16` | Headings, dark sections, footer |
| `crust-soft` | `#4a362b` | Secondary dark surfaces |
| `wheat` | `#d9a441` | Highlights, price accents |
| `ember` | `#b4531f` | Primary accent — eyebrows, buttons, links |
| `mocha` | `#8c7a6b` | Muted body text |

Type is split: a serif display face (`Fraunces`, falling back to Iowan Old Style and
Georgia) carries headings and pull quotes; `Inter` with system fallbacks handles body
copy and interface labels.

---

## Tech stack

- **React 19** — components and hooks
- **Vite 8** — dev server and production build
- **Tailwind CSS 4** — via `@tailwindcss/vite`, theme tokens in the `@theme` block
- **lucide-react** — icon set
- **oxlint** — linting

Deliberately absent: no router, no animation library, no state library, no CSS-in-JS.
Reveal effects run on `IntersectionObserver` plus CSS transitions.

---

## Getting started

Requires Node 18 or newer.

```bash
npm install
npm run dev
```

Dev server runs at `http://127.0.0.1:1470`.

```bash
npm run build    # production build to dist/
npm run preview  # serve the built output
npm run lint     # oxlint
```

---

## Project structure

```
hearth/
├── index.html                 # document shell, meta, font preload
├── vite.config.js             # React + Tailwind plugins
├── package.json
└── src/
    ├── main.jsx               # entry point
    ├── App.jsx                # section order
    ├── index.css              # Tailwind import, @theme tokens, motion CSS
    ├── data/
    │   └── content.js         # all copy, products, gallery, image helper
    └── components/
        ├── Header.jsx         # sticky nav + mobile drawer
        ├── Hero.jsx           # full-bleed hero with split heading
        ├── Ticker.jsx         # scrolling baked-today strip
        ├── Menu.jsx           # product grid with prices
        ├── Story.jsx          # the bakehouse story + counters
        ├── Process.jsx        # numbered baking steps
        ├── Gallery.jsx        # image grid
        ├── Testimonials.jsx   # quotes carousel
        ├── Visit.jsx          # hours, address, order CTA
        ├── Footer.jsx         # links, contact, legal
        └── Motion.jsx         # Reveal, MaskImage, SplitHeading, CountUp
```

---

## Sections

**Header** — transparent over the hero, then switches to a blurred cream background
after 40px of scroll. Desktop shows inline links with an underline that grows on
hover; mobile opens a slide-in drawer that locks body scroll.

**Hero** — full-bleed bakery photograph, dark gradient scrim, animated per-word
headline, opening-hours badge and two actions.

**Ticker** — a continuously scrolling strip of what came out of the oven today.

**Menu** — product cards for bread, viennoiserie and cakes, each with photo, price
and a short description. Cards lift on hover with an image zoom.

**Story** — two-column narrative with overlapping images, a pull quote and animated
counters for loaves per day, hours of fermentation and years on the street.

**Process** — three numbered steps on the dark crust background: mix, ferment, bake.

**Gallery** — a masonry-style grid of photographs with captions revealed on hover.

**Testimonials** — quote card with initials avatar, driven by buttons and dots.

**Visit** — opening hours by day, address, phone, and an order-ahead block.

**Footer** — brand blurb, navigation, contact details and legal row on crust.

---

## Motion system

All motion lives in `src/index.css` and `src/components/Motion.jsx`.

**Primitives**

| Export | Purpose |
| --- | --- |
| `Reveal` | Fades and lifts children into place on scroll, with stagger delay |
| `MaskImage` | Reveals an image with a top-to-bottom clip-path wipe |
| `SplitHeading` | Splits copy into words and slides each one up from behind a mask |
| `CountUp` | Eases an integer to its target when it enters the viewport |

**CSS classes**

- `.rise`, `.mask`, `.word` — the three reveal primitives
- `.shine` — sweeping highlight for primary buttons
- `.ticker` — the baked-today marquee
- `.steam` / `.steam-2` / `.steam-3` — staggered steam wisps for the hero mark
- `.spin-slow` — slow rotation for decorative marks
- `.grain` — SVG noise overlay on dark sections

**What animates, and when**

| Element | Trigger | Effect | Duration |
| --- | --- | --- | --- |
| Section eyebrows | Enters viewport | Fade + 24px lift | 0.8s |
| Headings | Enters viewport | Word-by-word rise from a mask, 55ms stagger | 0.9s |
| Images | Enters viewport | Top-to-bottom clip wipe + 1.06 → 1 scale | 1.1s |
| Product cards | Hover | Lift 6px, shadow deepen, image zoom | 0.5s |
| Stat counters | Enters viewport | Ease-out count from 0 to target | 1.5s |
| Primary buttons | Hover | Shine sweep across the surface | 3.4s loop |
| Ticker strip | Always | Linear left scroll, seamless loop | 40s loop |
| Hero steam mark | Always | Rise, fade, widen — three staggered wisps | 3.4s, 0.8s offset |
| Nav links | Hover | Underline grows from left | 0.3s |
| Mobile drawer | Open / close | Slide from right, backdrop blur in | 0.5s |
| Testimonial dots | Click | Width grows from 16px to 36px | 0.5s |

Everything above uses `transform`, `opacity` or `clip-path` only, so animation stays
on the compositor and never triggers layout.

**Easing and stagger** — reveals share one curve, `cubic-bezier(0.16, 1, 0.3, 1)`
(expo out). Stagger is passed per component through a `--d` custom property on the
inline style, so delays compose without extra CSS classes.

**Observer thresholds** — tuned per primitive so elements trigger as they genuinely
enter view rather than at the screen edge: `0.14` with a negative bottom `rootMargin`
for reveals, `0.3` for headings, `0.5` for counters.

**Reduced motion** — every animation and transition is disabled under
`prefers-reduced-motion: reduce`, reveal components resolve straight to their final
state, and observers are not attached at all.

**Known pitfall** — `MaskImage` must observe its unclipped wrapper, not the element
carrying `clip-path: inset(0 0 100% 0)`. Chrome reports `intersectionRatio: 0` for a
fully clipped element, so a threshold above zero never fires and the reveal stays
permanently hidden. This bit an earlier build; the wrapper-observation fix is in
`Motion.jsx`.

---

## Content model

All copy lives in `src/data/content.js`. Components do not hard-code text, so the
brand can be rebranded by editing one file.

Images are served from Unsplash through a single helper:

```js
img('1509440159596-0249088772ff', 1200)
// → https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=68&auto=format&fit=crop
```

Point the helper at your own CDN or `public/` assets and the whole site follows.

---

## Performance

- No animation or state library in the bundle
- Images below the fold use `loading="lazy"` and `decoding="async"`
- The hero image is preloaded in `index.html` with `fetchpriority="high"`
- Responsive image sizing via the `img()` helper — explicit width per slot
- Motion uses transforms and opacity only
- Scroll listener is passive
- Two font families, both with system fallbacks

---

## Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `footer`
- `aria-label` on every icon-only button
- `aria-current` on the active testimonial indicator
- Decorative images carry `alt=""` and `aria-hidden`
- Headings keep an `aria-label` where visible text is split into animated spans
- Focus-visible outlines with offset
- Mobile drawer sets `aria-hidden` when closed and restores scroll on unmount
- Full `prefers-reduced-motion` support
- Text contrast targets AA on every background used

---

## Customising

**Rebrand** — edit the colour tokens in the `@theme` block of `src/index.css` and the
font stacks beside them.

**Rewrite the property** — edit `src/data/content.js`.

**Swap images** — replace the `img()` helper, or drop files into `public/`.

**Change section order** — reorder or remove components in `src/App.jsx`.

**Wire up ordering** — the order block already collects name, item and pickup time in
component state; point the submit handler at your API.

---

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server on `127.0.0.1:1470` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run oxlint |

---

## Notes

- Hearth is a fictional bakehouse created for demonstration purposes.
- Photography is loaded from Unsplash and is not included in this repository.
- The order form is UI-only; no data is transmitted or stored.