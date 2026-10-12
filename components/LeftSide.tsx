import React from "react";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { SiCodewars } from "react-icons/si";

const iconClass =
  "w-10 h-10 text-xl  inline-flex items-center justify-center bg-hoverColor rounded-full hover:text-textGreen cursor-pointer hover:translate-y-2 motion-reduce:hover:translate-y-0 transition-all duration-300";

function LeftSide() {
  return (
    <div className=" w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4 ">
        <a
          href="https://github.com/Tyrantflood"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="GitHub (opens in a new tab)"
        >
          <span className={iconClass}>
            <TbBrandGithub aria-hidden="true" />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/prince-obi-2882bb261/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <span className={iconClass}>
            <TbBrandLinkedin aria-hidden="true" />
          </span>
        </a>
        <a
          href="https://www.codewars.com/users/Tyrantflood"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Codewars (opens in a new tab)"
        >
          <span className={iconClass}>
            <SiCodewars aria-hidden="true" />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
}

export default LeftSide;
