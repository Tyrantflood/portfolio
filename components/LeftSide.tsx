import React from "react";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandDribbble,
} from "react-icons/tb";
import { SiCodewars } from "react-icons/si";

function LeftSide() {
  return (
    <div className=" w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4 ">
        <a
          href="https://github.com/Tyrantflood"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl  inline-flex items-center justify-center bg-hoverColor rounded-full hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/prince-obi-2882bb261/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl  inline-flex items-center justify-center bg-hoverColor rounded-full hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <TbBrandLinkedin />
          </span>
        </a>
        <a
          href="https://dribbble.com/P_Obi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="w-10 h-10 text-xl  inline-flex items-center justify-center bg-hoverColor rounded-full hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <TbBrandDribbble />
          </span>
        </a>
        <a
          href="https://www.codewars.com/users/Tyrantflood"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl  inline-flex items-center justify-center bg-hoverColor rounded-full hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <SiCodewars />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
}

export default LeftSide;
