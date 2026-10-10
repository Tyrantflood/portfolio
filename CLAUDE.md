# CLAUDE.md

Prince Obi's personal portfolio: one page, dark "code" theme, deployed on Vercel at https://princeobi.vercel.app/ (repo `Tyrantflood/portfolio`).
`princeobi.com` no longer resolves (NXDOMAIN, checked 2026-10-10); do not link to it.

## Stack

Next.js 13.5 **Pages Router** (not App Router), React 18, TypeScript, Tailwind 3.3 (+ `tailwind-scrollbar`), Framer Motion 10, Formik + Yup,
`react-simple-typewriter`, `react-icons`. ESLint 8 with `eslint-config-next` 12. No tests.

```bash
npm run dev      # development
npm run build    # production build (also lints and type-checks)
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
- Section navigation is hand-rolled (`scrolltoHash` is copy-pasted in Navbar, Name, Banner, Arrow, About). The same four nav links
  and the resume button are duplicated for the mobile menu.
- **Contact form** posts JSON to Formspree (`https://formspree.io/f/xaygjqvq`). The endpoint was checked on 2026-10-10 and answers 200.
- **Project links.** Project cards are hand-written blocks in `Projects.tsx`. Do not add a live-demo icon without a real URL; an empty `href=""`
  just reloads the page. Only link URLs that were checked.
- **Resume**: `public/assets/Prince_Obi_resume.pdf`, linked as `/assets/Prince_Obi_resume.pdf` (forward slashes).
- The fonts named in the Tailwind config are **not actually loaded** (`_document.tsx` only preconnects). The site renders in the system sans-serif.
- Window-size logic: `Name.tsx` swaps "Prince.Obi" for "P.O" with a matchMedia listener, so the first paint can differ from the server HTML.

## Verification notes

- Lighthouse was run against the production build with Playwright's Chromium (`chrome-launcher` can't spawn Chrome in this sandbox, so start
  Chromium with `--remote-debugging-port` and give Lighthouse that port).
- Metadata checks: `curl localhost:3100 | grep og:` and open `/og-image.png`.
