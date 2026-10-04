# Portfolio

My self-designed portfolio site. It showcases my skills and projects and gives visitors a way to contact me.

## Tech stack

- [Next.js](https://nextjs.org/) 13 with React 18 and TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Formik](https://formik.org/) and [Yup](https://github.com/jquense/yup) for the contact form
- [react-scroll](https://github.com/fisshy/react-scroll), [react-simple-typewriter](https://github.com/awran5/react-simple-typewriter) and [react-icons](https://react-icons.github.io/react-icons/)

## Getting started

Install dependencies, then run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create a production build            |
| `npm start`     | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Project structure

- `pages/` – Next.js pages (`index.tsx`) and API routes (`api/`)
- `components/` – page sections such as Banner, About, Projects, Tools and Contact
- `styles/` – global styles
- `public/` – static assets

## Deploy

The easiest way to deploy is the [Vercel Platform](https://vercel.com/new). See the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for details.
