import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  portfolio,
  clone,
  ecommerce,
  store,
  pokedex,
  backtester,
} from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { Reveal2 } from "./Reveal2";

interface ProjectLink {
  kind: "github" | "live";
  href: string;
  label: string;
}

interface Project {
  title: string;
  description: React.ReactNode;
  image: StaticImageData;
  alt: string;
  /** where the screenshot links to */
  imageHref: string;
  tech: string[];
  links: ProjectLink[];
}

const externalLink = (href: string, text: string) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className=" text-textGreen"
  >
    {text}
  </a>
);

const PROJECTS: Project[] = [
  {
    title: "Pokédex",
    description:
      "A retro field-scanner Pokédex for all 1,351 Pokémon and forms. The grid is virtualised, so scrolling stays at 60fps. Opening a Pokémon plays an animated scan reveal, and a live oscilloscope draws its cry from Web Audio data. Compare two Pokémon at true scale, check dual-type matchups with the type calculator, and build a six-slot team that flags what the whole team is weak to.",
    image: pokedex,
    alt: "The Pokédex detail view for Charizard: official artwork, base stat bars, type matchups showing a 4 times weakness to Rock, and the cry oscilloscope drawing a live waveform.",
    imageHref: "https://pokedex-tau-murex.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Web Audio"],
    links: [
      {
        kind: "github",
        href: "https://github.com/Tyrantflood/pokedex",
        label: "Pokédex source code on GitHub (opens in a new tab)",
      },
      {
        kind: "live",
        href: "https://pokedex-tau-murex.vercel.app/",
        label: "Pokédex live demo (opens in a new tab)",
      },
    ],
  },
  {
    title: "Backtester",
    description:
      "A strategy backtester that runs entirely in the browser. Import candles from a CSV file or rebuild them from a chart screenshot, then test moving-average and RSI strategies long, short or both, with spread, slippage and commission applied to every fill. Signals are read at the close and filled at the next open, so the simulation is look-ahead-safe, and the logic is covered by property tests and deliberate bug injection.",
    image: backtester,
    alt: "The Backtester results view: a candlestick chart with Buy, Sell, Short and Cover markers above an equity curve plotted against buy and hold.",
    imageHref: "https://backtester-pied.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "lightweight-charts"],
    links: [
      {
        kind: "github",
        href: "https://github.com/Tyrantflood/backtester",
        label: "Backtester source code on GitHub (opens in a new tab)",
      },
      {
        kind: "live",
        href: "https://backtester-pied.vercel.app/",
        label: "Backtester live demo (opens in a new tab)",
      },
    ],
  },
  {
    title: "Ecommerce store CMS",
    description:
      "I developed a Content Management System CMS using REST APIs, specifically tailored for supervising an e-commerce website. This CMS empowers users to personalize a pre-made store template to suit their unique preferences. Furthermore, this administrative section offers the ability to efficiently monitor and control multiple stores concurrently.",
    image: ecommerce,
    alt: "The Ecommerce store CMS dashboard for a store called Test Store, with navigation for billboards, categories, sizes, colors, products and orders, revenue, sales and stock cards, and an empty monthly revenue chart.",
    imageHref: "https://github.com/Tyrantflood/ecommerce-admin",
    tech: ["Nextjs", "TailwindCss", "TypeScript", "Prisma", "Axios"],
    links: [
      {
        kind: "github",
        href: "https://github.com/Tyrantflood/ecommerce-admin",
        label: "Ecommerce store CMS source code on GitHub (opens in a new tab)",
      },
    ],
  },
  {
    title: "Ecommerce Store",
    description:
      "By utilizing the Content Management System CMS I previously created, which has been configured to function as an administrative tool, I have the capability to efficiently oversee and control the content within this store.",
    image: store,
    alt: "The Ecommerce Store front page: a header with Dresses, glasses and shorts categories and a cart button, a large billboard image of a notebook, phone, earbuds and laptop on a dark desk, and a Featured Products heading.",
    imageHref: "https://github.com/Tyrantflood/ecommerce-store",
    tech: ["NextJs", "TailwindCss", "TypeScript", "Styled Components", "Axios"],
    links: [
      {
        kind: "github",
        href: "https://github.com/Tyrantflood/ecommerce-store",
        label: "Ecommerce Store source code on GitHub (opens in a new tab)",
      },
      {
        kind: "live",
        href: "https://github.com/Tyrantflood/ecommerce-store",
        label: "Ecommerce Store repository (opens in a new tab)",
      },
    ],
  },
  {
    title: "Disney plus Clone",
    description: (
      <>
        A disney home page clone built with{" "}
        {externalLink("https://vitejs.dev/", "ViteJs")},{" "}
        {externalLink("https://tailwindcss.com/docs/installation", "Tailwindcss")}{" "}
        and {externalLink("https://axios-http.com/docs/intro", "Axios")}. Able
        to view profile data and available movies. with an implemented slider.
        it also has the movies from all the other disney franchises.
      </>
    ),
    image: clone,
    alt: "The Disney plus clone home page: a hero banner of a scene from a film above a row of Disney, Pixar, Marvel, Star Wars and National Geographic brand tiles and a row of movie posters.",
    imageHref: "https://disney-clone-master-three.vercel.app/",
    tech: ["ViteJs", "TailwindCss", "TypeScript", "Axios"],
    links: [
      {
        kind: "github",
        href: "https://github.com/Tyrantflood/Disney-Clone-master",
        label: "Disney plus Clone source code on GitHub (opens in a new tab)",
      },
      {
        kind: "live",
        href: "https://disney-clone-master-three.vercel.app/",
        label: "Disney plus Clone live demo (opens in a new tab)",
      },
    ],
  },
  {
    title: "My Portfolio",
    description:
      "This portfolio that i built and designed myself using the NextJs ecosystem . It is a responsive website that is able to display my projects and skills. It is also a medium that other people can use to contact me.",
    image: portfolio,
    alt: "The portfolio home page: a dark navy page with a navigation bar, a social icon rail, the heading Prince Obi, a typed line starting I am, and a short introduction.",
    imageHref: "https://princeobi.vercel.app/",
    tech: ["NextJs", "TailwindCss", "TypeScript", "Styled Components"],
    links: [
      {
        kind: "github",
        href: "https://github.com/Tyrantflood/portfolio",
        label: "My Portfolio source code on GitHub (opens in a new tab)",
      },
      {
        kind: "live",
        href: "https://princeobi.vercel.app/",
        label: "My Portfolio live site (opens in a new tab)",
      },
    ],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Cards alternate: even ones have the screenshot on the left, odd ones on the right
  const imageLeft = index % 2 === 0;

  const screenshot = (
    <a
      className="w-full xl:w-1/2 h-auto relative group"
      href={project.imageHref}
      rel="noreferrer"
      target="_blank"
    >
      <Reveal2>
        <div>
          <Image
            className=" rounded-md w-full h-full object-contain"
            src={project.image}
            alt={project.alt}
            sizes="(min-width: 1280px) 570px, 100vw"
          />
        </div>
      </Reveal2>
    </a>
  );

  const text = (
    <div
      className={
        imageLeft
          ? "w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10"
          : "w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start xl:-mr-16 text-left z-10"
      }
    >
      <Reveal2>
        <p className="font-titleFont text-textGreen text-sm tracking-wide">
          Featured Project
        </p>
      </Reveal2>
      <Reveal2>
        <h3 className=" text-2xl font-bold">{project.title}</h3>
      </Reveal2>
      <Reveal2>
        <p className=" bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md font-semibold">
          {project.description}
        </p>
      </Reveal2>
      <ul
        aria-label="Technologies used"
        className=" text-xs md:text-sm font-titleFont tracking-wide flex flex-wrap gap-x-2 gap-y-1 md:gap-x-5 justify-between text-textDark"
      >
        {project.tech.map((name) => (
          <li key={name}>
            <Reveal2>
              <span>{name}</span>
            </Reveal2>
          </li>
        ))}
      </ul>
      <div className="  text-2xl flex gap-4 ">
        {project.links.map((link) => (
          <Reveal2 key={link.label}>
            <a
              className="hover:text-textGreen duration-300"
              href={link.href}
              rel="noreferrer"
              target="_blank"
              aria-label={link.label}
            >
              {link.kind === "github" ? (
                <TbBrandGithub aria-hidden="true" />
              ) : (
                <RxOpenInNewWindow aria-hidden="true" />
              )}
            </a>
          </Reveal2>
        ))}
      </div>
    </div>
  );

  return imageLeft ? (
    <div className=" w-full flex flex-col items-center justify-center gap-28 mt-10">
      <div className=" flex flex-col xl:flex-row gap-6">
        {screenshot}
        {text}
      </div>
    </div>
  ) : (
    <div className=" w-full flex flex-col items-center py-16 justify-center gap-28 mt-10">
      <div className=" flex flex-col flex-reverse-row xl:flex-row  ">
        {text}
        {screenshot}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="  max-w-contentContainer mx-auto py-24 mdl:py-28 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <h2 className="sr-only">Projects</h2>
      <Reveal2>
        <span
          aria-hidden="true"
          className="text-textGreen mdl:text-4xl  text-3xl font-bold font-titleFont"
        >
          {'<wrapper id="projects">'}
        </span>
      </Reveal2>

      <div className=" w-full flex flex-col items-center justify-between gap-28">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <Reveal2>
        <span
          aria-hidden="true"
          className="text-textGreen  mdl:text-4xl text-3xl font-bold font-titleFont"
        >
          {"</wrapper>"}
        </span>
      </Reveal2>
    </section>
  );
}

export default Projects;
