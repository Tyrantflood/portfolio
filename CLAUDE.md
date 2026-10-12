# CLAUDE.md

Prince Obi's personal portfolio: one page, dark "code" theme, deployed on Vercel at https://princeobi.vercel.app/ (repo `Tyrantflood/portfolio`).
`princeobi.com` no longer resolves (NXDOMAIN, checked 2026-10-10); do not link to it.

## Working agreements

- **Commit and push straight to `main`** unless the user asks for a branch. Do not open a side branch on your own.
- **Read `AGENTS.md` before changing code.** It is written by Next.js (`next dev` generates it) and warns that this Next.js has breaking changes, pointing at the
  version-matched docs in `node_modules/next/dist/docs/`. Keep it committed.
- **Node 24.x** (`engines` in `package.json`). The Vercel project must be set to Node 24.x too (dashboard, Settings, Node.js Version). There is no `.nvmrc`.

## Stack

Next.js 16.4 **Pages Router** (not App Router; Turbopack builds), React 18, TypeScript 5.9, Tailwind 3.4 (+ `tailwind-scrollbar`), Framer Motion 10, Formik + Yup,
`react-simple-typewriter`, `react-icons`. ESLint 9 flat config (`eslint.config.mjs`, `eslint-config-next/core-web-vitals` only). No tests.
Next 16 prints a warning that React 18 support is deprecated and goes away in Next 17; moving to React 19 means checking framer-motion 10, formik and
react-simple-typewriter first.

```bash
npm run dev      # development
npm run build    # production build (type-checks; Next 16 no longer lints during build)
npm run lint     # eslint . (`next lint` was removed in Next 16)
npm start        # serve the build
```

## Layout

- `pages/index.tsx`: the only page. Holds `<Head>` (title, description, Open Graph/Twitter tags, canonical, favicon) and stacks
  Navbar, LeftSide (fixed social rail, `xl` and up), Banner, Arrow, About, Projects, Tools, Contact, Footer.
- `pages/_app.tsx`: loads Google Analytics (`G-LNCMR69Y1X`) after interactive. `pages/_document.tsx`: `lang="en"`, font preconnects.
- `pages/api/hello.ts` and `lib/api.tsx` are unused leftovers (the form posts straight to Formspree).
- `components/`: one file per section. `Reveal` / `Reveal2` are scroll-in wrappers (Framer Motion `useInView`, once).
- `public/assets/`: logo, resume PDF, `images/` (project screenshots, imported through `public/assets/index.ts`).
  `public/og-image.png` is the 1200x630 link-preview image.
- Tailwind theme (`tailwind.config.js`): colours `bodyColor #0A192F`, `textGreen #64ffda`, `textLight #ccd6f6`, `textDark #8892b0`;
  fonts `bodyFont` (Montserrat) and `titleFont` (Inter); custom breakpoints `xs 320 / sm 375 / sml 500 / md 667 / mdl 768 / lg 960 / lgl 1024 / xl 1280`.

## Things that are easy to get wrong

- **`<main>` is the scroll container** (`h-screen overflow-y-scroll`), not the window. Anything that listens to `window` scroll or measures the
  document height will not see the page scroll. The nav scrolls with `element.scrollIntoView`.
- **Section navigation** goes through `scrollToSection(id)` in `lib/scroll.ts` (smooth scroll, plain jump under reduced motion). Every nav control is a real
  `<a href="#id">` or `<button>`, never a `div`/`li` with `onClick`. Do not nest a `<button>` inside an `<a>` (two tab stops): style the `<a>` as the button.
- **Mobile menu** (`Navbar.tsx`) is a dialog: the hamburger is a `<button aria-expanded aria-controls>`, the panel has `role="dialog" aria-modal`, focus moves to Close on open,
  Tab is trapped inside, Escape and a backdrop click close it, and focus goes back to the hamburger (with `preventScroll`, otherwise it cancels the smooth scroll to the chosen section).
- **Icon-only links need an `aria-label`** that says where they go, and the icon gets `aria-hidden="true"`. A button's `aria-label` must contain its visible text.
- **Reduced motion:** `_app.tsx` wraps the page in `MotionConfig reducedMotion="user"` (drops Framer transforms). The typewriter (`Banner.tsx`) is not mounted at all when the visitor
  prefers reduced motion, and the preference is read in an effect so the first client render matches the server HTML (`framer-motion`'s `useReducedMotion` returns the real value on the first
  client render, which caused hydration errors #418/#423/#425). Tailwind animations use `motion-safe:`; hover movement has `motion-reduce:hover:translate-y-0`.
- **Hero:** the first paragraph has no entrance animation. Delaying it by about 1 s made it the LCP element and cost about 3 s of mobile LCP (5.2 s down to 1.7 s). Keep
  hero delays short and keep the LCP text visible from the first paint.
- **Contact form** posts JSON to Formspree (`https://formspree.io/f/xaygjqvq`). The endpoint was checked on 2026-10-10 and answers 200, and its CORS preflight allows
  `https://princeobi.vercel.app`. "Message successfully sent!" is shown **only when `response.ok`**; a failed status, a network error or the 15 s timeout shows a `role="alert"`
  error and keeps what was typed. The Send button is disabled while sending. Never set the success state before the request returns.
- **Projects** are data in the `PROJECTS` array in `Projects.tsx`, rendered by one `ProjectCard` (cards alternate image left / image right by index). Current order:
  Pokédex, Backtester, Ecommerce store CMS, Ecommerce Store, Disney plus Clone, My Portfolio. Each has `alt` text that describes the screenshot, a tech list (rendered as `<li>`s) and
  link labels. Do not add a live-demo link without a real URL (an empty `href=""` just reloads the page). Only link URLs that were checked.
- **Project screenshots** live in `public/assets/images/` and are imported from `public/assets/index.ts`. The Pokédex and Backtester images are WebP (about 50-60 KB each, 1280 px wide,
  captured from the live sites with Playwright at 1.5x and converted with `sharp`, which ships with Next). The Backtester shot is the sample data with RSI in "both" mode (a plain
  moving-average run on that sample loses money, so it was not used); park the mouse before capturing or a chart crosshair label shows. The Disney and Ecommerce PNGs are large (1-1.7 MB) and unoptimised
  (Next serves resized WebP/AVIF, but the repo holds the originals), and `portfolio.png` is out of date (old hero text, the email side rail and a Dribbble icon).
- **Headings:** one `<h1>` (the hero name). Each section has an `<h2>` (About, Projects and Tools use a visually hidden one; Contact's is "Get in touch"), project titles are `<h3>`. The
  `<wrapper id="...">` code labels are decorative and `aria-hidden`. Do not turn "Hello, my name is" or other decoration back into headings.
- **Dribbble** (`dribbble.com/P_Obi`) returned 404 and was removed everywhere on 2026-10-12. Social links now: GitHub, LinkedIn, Codewars.
- **Resume**: `public/assets/Prince_Obi_resume.pdf`, linked as `/assets/Prince_Obi_resume.pdf` (forward slashes).
- The fonts named in the Tailwind config are **not actually loaded** (`_document.tsx` only preconnects). The site renders in the system sans-serif.
- Window-size logic: `Name.tsx` swaps "Prince.Obi" for "P.O" with a matchMedia listener, so the first paint can differ from the server HTML.

## Dependencies and audit

- `npm audit --omit=dev` is clean (0). Build-only tooling (`tailwindcss`, `postcss`, `autoprefixer`, eslint, typescript, `@types/*`) lives in
  `devDependencies`: it never ships to visitors, and Vercel installs devDependencies for the build.
- The full `npm audit` still reports about 10 findings, all in Tailwind 3's build chain (`braces`/`micromatch`/`chokidar`/`postcss-selector-parser`).
  `braces` has no patched release; the audit's only fix is Tailwind 4, which is a real migration (CSS-first config, changed defaults for
  `border`/`ring`/`shadow`, a new `tailwind-scrollbar` major), not a version bump.
- Next dev (16.4, Pages Router) logs a harmless `[HMR] Invalid message: isrManifest` warning in the browser console. It is dev-only.
- `next dev` (re)writes `AGENTS.md` in the repo root; it is kept on purpose (see Working agreements).

## Verification notes

- Accessibility is 100 on mobile and desktop (Lighthouse). Known gap not caught by Lighthouse: the contact form fields have empty `<label>`s and rely on placeholders.
- Interleave before/after Lighthouse runs against two builds on two ports (3 runs each) and compare medians; one-off numbers swing by 2x with machine load.
- Checks that must stay green: form with 200 / 500 / network down / hang (timeout); full Tab order; mobile menu (focus in, trapped, Escape, focus back); reduced motion (no
  infinite animations, no typewriter, no hover movement); no link or button without an accessible name.

- Lighthouse was run against the production build with Playwright's Chromium (`chrome-launcher` can't spawn Chrome in this sandbox, so start
  Chromium with `--remote-debugging-port` and give Lighthouse that port).
- Upgrade check: build the old and new versions on two ports and pixel-diff screenshots (reduced motion, animations disabled, typewriter hidden); keep a
  control that compares two different sections and must differ. Lighthouse scores move a lot with machine load (mobile LCP read 2.3 s one day and 5.0 s the next on the same
  code), so compare old and new back to back, never against a number from an earlier session.
- Metadata checks: `curl localhost:3100 | grep og:` and open `/og-image.png`.
