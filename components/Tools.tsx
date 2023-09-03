import React from "react";
import { Reveal2 } from "./Reveal2";

function Tools() {
  return (
    <section
      id="tools"
      className="  max-w-contentContainer mx-auto py-24 mdl:py-28 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4  "
    >
      <Reveal2>
        <span className="text-textGreen mdl:text-4xl  text-3xl font-bold font-titleFont">
          {'<wrapper id="tools">'}
        </span>
      </Reveal2>

      <div className=" py-12 flex flex-col md:flex-row gap-6">
        <div className="w-full xl:w-1/3 h-auto relative group ml-12 text-left  ">
          <Reveal2>
            <span className="text-textGreen text-xl xl:text-2xl font-bold">
              {" "}
              Back-End
            </span>
          </Reveal2>

          <Reveal2>
            <ul className=" text-left text-xl font-bodyFont font-semibold xls:text-lg py-4">
              <li className="text-textDark py-4">Node.js</li>
              <li className="text-textDark py-4">Express.js</li>
              <li className="text-textDark py-4">MongoDB</li>
              <li className="text-textDark py-4">PostgreSQL</li>
              <li className="text-textDark py-4">MySQL</li>
              <li className="text-textDark py-4">Firebase</li>
              <li className="text-textDark py-4">Prisma</li>
            </ul>
          </Reveal2>
        </div>
        <div className="w-full xl:w-1/3 h-auto relative  group text-left ml-12  font-bold">
          <Reveal2>
            <span className="text-textGreen text-xl xl:text-2xl font-bold">
              Front-End
            </span>
          </Reveal2>
          <Reveal2>
            <ul className=" text-left text-xl font-bodyFont font-semibold xls:text-lg py-4">
              <li className="text-textDark py-4">React.js</li>
              <li className="text-textDark py-4">Next.js</li>
              <li className="text-textDark py-4">Vite.js</li>
              <li className="text-textDark py-4">Tailwind CSS</li>
              <li className="text-textDark py-4">Material UI</li>
              <li className="text-textDark py-4">Bootstrap</li>
              <li className="text-textDark py-4">ShadcnUi</li>
              <li className="text-textDark py-4">HTML</li>
              <li className="text-textDark py-4">CSS</li>
              <li className="text-textDark py-4">JavaScript</li>
              <li className="text-textDark py-4">TypeScript</li>
              <li className="text-textDark py-4">Styled Components</li>
            </ul>
          </Reveal2>
        </div>
        <div className="w-full xl:w-1/3 h-auto relative  group text-left ml-12  font-bold">
          <Reveal2>
            <span className="text-textGreen text-xl xl:text-2xl font-bold">
              Other
            </span>
          </Reveal2>
          <Reveal2>
            <ul className=" text-left text-xl font-bodyFont font-semibold xls:text-lg py-4">
              <li className="text-textDark py-4">Git</li>
              <li className="text-textDark py-4">Netlify</li>
              <li className="text-textDark py-4">Java</li>
              <li className="text-textDark py-4">Python</li>
              <li className="text-textDark py-4">Figma</li>
              <li className="text-textDark py-4">Microsoft Access</li>
              <li className="text-textDark py-4">Microsoft Excel</li>
              <li className="text-textDark py-4">Microsoft PowerPoint</li>
              <li className="text-textDark py-4">Microsoft Word</li>
            </ul>
          </Reveal2>
        </div>
      </div>

      <Reveal2>
        <span className="text-textGreen mdl:text-4xl  text-3xl font-bold font-titleFont">
          {"</wrapper>"}
        </span>
      </Reveal2>
    </section>
  );
}

export default Tools;
