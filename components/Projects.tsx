import React from "react";
import Image from "next/image";
import { portfolio, clone, ecommerce, store } from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { Reveal2 } from "./Reveal2";

function Projects() {
  return (
    <section
      id="projects"
      className="  max-w-contentContainer mx-auto py-24 mdl:py-28 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <Reveal2>
        <span className="text-textGreen mdl:text-4xl  text-3xl font-bold font-titleFont">
          {'<wrapper id="projects">'}
        </span>
      </Reveal2>

      <div className=" w-full flex flex-col items-center justify-between gap-28">
        {/* project 1 */}
        <div className=" w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className=" flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://disney-clone-master-three.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              <Reveal2>
                <div>
                  <Image
                    className=" rounded-md w-full h-full object-contain"
                    src={clone}
                    alt="Disney plus clone"
                  />
                </div>
              </Reveal2>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <Reveal2>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                  Featured Project
                </p>
              </Reveal2>
              <Reveal2>
                <h3 className=" text-2xl font-bold">Disney plus Clone</h3>
              </Reveal2>
              <Reveal2>
                <p className=" bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md font-semibold">
                  A disney home page clone built with{" "}
                  <a
                    href="https://vitejs.dev/"
                    target="_blank"
                    rel="noreferrer"
                    className=" text-textGreen"
                  >
                    {" "}
                    ViteJs{" "}
                  </a>
                  ,{" "}
                  <a
                    href="https://tailwindcss.com/docs/installation "
                    target="_blank"
                    rel="noreferrer"
                    className=" text-textGreen"
                  >
                    {" "}
                    Tailwindcss{" "}
                  </a>
                  and{" "}
                  <a
                    href="https://axios-http.com/docs/intro "
                    target="_blank"
                    rel="noreferrer"
                    className=" text-textGreen"
                  >
                    {" "}
                    Axios{" "}
                  </a>
                  . Able to view profile data and available movies. with an
                  implemented slider. it also has the movies from all the other
                  disney franchises.
                </p>
              </Reveal2>
              <ul className=" text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <Reveal2>
                  <li>ViteJs</li>
                </Reveal2>
                <Reveal2>
                  <li>TailwindCss</li>
                </Reveal2>
                <Reveal2>
                  <li>TypeScript</li>
                </Reveal2>
                <Reveal2>
                  <li>Axios</li>
                </Reveal2>
              </ul>
              <div className="  text-2xl flex gap-4 ">
                <Reveal2>
                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://github.com/Tyrantflood/Disney-Clone-master"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </a>
                </Reveal2>
                <Reveal2>
                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://disney-clone-master-three.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </Reveal2>
              </div>
            </div>
          </div>
        </div>
        {/* project 2 */}
        <div className=" w-full flex flex-col items-center py-16 justify-center gap-28 mt-10">
          <div className=" flex flex-col flex-reverse-row xl:flex-row  ">
            <div className=" w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start xl:-mr-16 text-left z-10">
              <Reveal2>
                <p className=" font-titleFont text-textGreen text-sm tracking-wide">
                  Featured Project
                </p>
              </Reveal2>
              <Reveal2>
                <h3 className=" text-2xl font-bold">My Portfolio</h3>
              </Reveal2>
              <Reveal2>
                <p className=" bg-[#112240] text-sm md:text-base p-2  md:p-6 rounded-md font-semibold ">
                  This portfolio that i built and designed myself using the
                  NextJs ecosystem . It is a responsive website that is able to
                  display my projects and skills. It is also a medium that other
                  people can use to contact me.
                </p>
              </Reveal2>
              <ul className=" text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <Reveal2>
                  <li>NextJs</li>
                </Reveal2>
                <Reveal2>
                  <li>TailwindCss</li>
                </Reveal2>
                <Reveal2>
                  <li>TypeScript</li>
                </Reveal2>
                <Reveal2>
                  <li>Styled Components</li>
                </Reveal2>
              </ul>
              <div className="  text-2xl flex gap-4 flex-start">
                <Reveal2>
                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://github.com/Tyrantflood/portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TbBrandGithub />
                  </a>
                </Reveal2>
                <Reveal2>
                  <a
                    className="hover:text-textGreen duration-300"
                    href="http://www.princeobi.com/"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </Reveal2>
              </div>
            </div>
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="http://www.princeobi.com/"
              rel="noreferrer"
              target="_blank"
            >
              <Reveal2>
                <div>
                  <Image
                    className="rounded-md w-full h-full object-contain"
                    src={portfolio}
                    alt="portfolio"
                  />
                </div>
              </Reveal2>
            </a>
          </div>
        </div>
        {/* project 3 */}
        <div className=" w-full flex flex-col items-center justify-center gap-28 mt-10 mdl:pb-16">
          <div className=" flex flex-col xl:flex-row gap-6 ">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/Tyrantflood/ecommerce-admin"
              rel="noreferrer"
              target="_blank"
            >
              <Reveal2>
                <div>
                  <Image
                    className=" rounded-md mw-full h-full object-contain"
                    src={ecommerce}
                    alt="Ecommerce-admin"
                  />
                </div>
              </Reveal2>
            </a>
            <div className=" w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text right xl:-ml-16 z-10">
              <Reveal2>
                <p className=" font-titleFont text-textGreen text-sm tracking-wide">
                  Featured Project
                </p>
              </Reveal2>
              <Reveal2>
                <h3 className=" text-2xl font-bold">Ecommerce store CMS</h3>
              </Reveal2>
              <Reveal2>
                <p className=" bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md font-semibold">
                  I developed a Content Management System {"CMS"} using REST
                  APIs, specifically tailored for supervising an e-commerce
                  website. This CMS empowers users to personalize a pre-made
                  store template to suit their unique preferences. Furthermore,
                  this administrative section offers the ability to efficiently
                  monitor and control multiple stores concurrently.
                </p>
              </Reveal2>
              <ul className=" text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <Reveal2>
                  <li>Nextjs</li>
                </Reveal2>
                <Reveal2>
                  <li>TailwindCss</li>
                </Reveal2>
                <Reveal2>
                  <li>TypeScript</li>
                </Reveal2>
                <Reveal2>
                  <li>Prisma</li>
                </Reveal2>
                <Reveal2>
                  <li>Axios</li>
                </Reveal2>
              </ul>
              <div className="  text-2xl flex gap-4 ">
                <Reveal2>
                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://github.com/Tyrantflood/ecommerce-admin"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </a>
                </Reveal2>
                <Reveal2>
                  <a className="hover:text-textGreen duration-300" href="">
                    <RxOpenInNewWindow />
                  </a>
                </Reveal2>
              </div>
            </div>
          </div>
        </div>
        {/* project 4 */}
        <div className=" w-full flex flex-col items-center py-16 justify-center gap-28 mt-10">
          <div className=" flex flex-col flex-reverse-row xl:flex-row  ">
            <div className=" w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start xl:-mr-16 text-left z-10">
              <Reveal2>
                <p className=" font-titleFont text-textGreen text-sm tracking-wide">
                  Featured Project
                </p>
              </Reveal2>
              <Reveal2>
                <h3 className=" text-2xl font-bold">Ecommerce Store</h3>
              </Reveal2>
              <Reveal2>
                <p className=" bg-[#112240] text-sm md:text-base p-2  md:p-6 rounded-md font-semibold ">
                  By utilizing the Content Management System {"CMS"} I
                  previously created, which has been configured to function as
                  an administrative tool, I have the capability to efficiently
                  oversee and control the content within this store.
                </p>
              </Reveal2>
              <ul className=" text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <Reveal2>
                  <li>NextJs</li>
                </Reveal2>
                <Reveal2>
                  <li>TailwindCss</li>
                </Reveal2>
                <Reveal2>
                  <li>TypeScript</li>
                </Reveal2>
                <Reveal2>
                  <li>Styled Components</li>
                </Reveal2>
                <Reveal2>
                  <li>Axios</li>
                </Reveal2>
              </ul>
              <div className="  text-2xl flex gap-4 flex-start">
                <Reveal2>
                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://github.com/Tyrantflood/ecommerce-store"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TbBrandGithub />
                  </a>
                </Reveal2>
                <Reveal2>
                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://github.com/Tyrantflood/ecommerce-store"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </Reveal2>
              </div>
            </div>
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/Tyrantflood/ecommerce-store"
              rel="noreferrer"
              target="_blank"
            >
              <Reveal2>
                <div>
                  <Image
                    className="rounded-md w-full h-full object-contain"
                    src={store}
                    alt="Ecommerce-Store"
                  />
                </div>
              </Reveal2>
            </a>
          </div>
        </div>
      </div>

      <Reveal2>
        <span className="text-textGreen  mdl:text-4xl text-3xl font-bold font-titleFont">
          {"</wrapper>"}
        </span>
      </Reveal2>
    </section>
  );
}

export default Projects;
