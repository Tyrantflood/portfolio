import React, { MouseEvent, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import NameComponent from "./Name";
import { MdOutlineClose } from "react-icons/md";
import { Reveal2 } from "./Reveal2";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandDribbble,
} from "react-icons/tb";
import { SiCodewars } from "react-icons/si";

interface NavbarProps {}

const Navbar = () => {
  const scrolltoHash = (element_id: string) => {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const [clickedButton, setClickedButton] = useState("");
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);

  const buttonHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    setShowMenu(false);
    const button = event.currentTarget;
    setClickedButton(button.getAttribute("data-scroll-id") || "");
    scrolltoHash(button.getAttribute("data-scroll-id") || "");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      // inside click
      setShowMenu(false);
      return;
    }
  }

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("hide-scroll");
    } else {
      document.body.classList.remove("hide-scroll");
    }
  }, [showMenu]);

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between text-textDark">
        {/* This is the name component */}

        <NameComponent />

        <div className="hidden mdl:flex gap-8 items-center">
          <ul className="flex text-[14px] gap-8">
            <li
              className="scroll-smooth flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              data-scroll-id="about"
              onClick={buttonHandler}
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                .about<span className="text-textGreen">( )</span>
              </motion.div>
            </li>

            <li
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              data-scroll-id="projects"
              onClick={buttonHandler}
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                .projects<span className="text-textGreen">( )</span>
              </motion.div>
            </li>

            <li
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              data-scroll-id="tools"
              onClick={buttonHandler}
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                .tools<span className="text-textGreen">( )</span>
              </motion.div>
            </li>

            <li
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              data-scroll-id="contact"
              onClick={buttonHandler}
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                .contact<span className="text-textGreen">( )</span>
              </motion.div>
            </li>
          </ul>
          <a
            href="/assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="group relative shadow overflow-hidden px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen cursor-pointer duration-300"
            >
              <div className="absolute inset-0 w-3 bg-textGreen transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative group-hover:text-bodyColor">
                Resume
              </span>
            </motion.button>
          </a>
        </div>

        {/* small icon section */}

        <div
          onClick={() => setShowMenu(true)}
          className="mdl:hidden flex w-6 h-5 flex-col justify-between text-4xl text-textGreen cursor-pointer overflow-hidden group items-center"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => {
              ref.current = node;
            }}
            onClick={handleClick}
            className="absolute top-0 right-0 w-full h-screen  bg-black bg-opacity-50 flex flex-col items-end mdl:hidden"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className=" w-[80%] h-full overflow-y-scroll  bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className=" text-3xl text-textGreen cursor-pointer absolute top-4 right-4 hover:text-textDark transition-all duration-300"
              />

              <div>
                <ul className="flex flex-col ml-14 gap-7 pt-14 text-base">
                  <li
                    className="scroll-smooth flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    data-scroll-id="about"
                    onClick={buttonHandler}
                  >
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      .about<span className="text-textGreen">( )</span>
                    </motion.div>
                  </li>

                  <li
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    data-scroll-id="projects"
                    onClick={buttonHandler}
                  >
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.1 }}
                    >
                      .projects<span className="text-textGreen">( )</span>
                    </motion.div>
                  </li>

                  <li
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    data-scroll-id="tools"
                    onClick={buttonHandler}
                  >
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.2 }}
                    >
                      .tools<span className="text-textGreen">( )</span>
                    </motion.div>
                  </li>

                  <li
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    data-scroll-id="contact"
                    onClick={buttonHandler}
                  >
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.3 }}
                    >
                      .contact<span className="text-textGreen">( )</span>
                    </motion.div>
                  </li>
                </ul>
                <a
                  href="/assets/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="group relative shadow overflow-hidden px-4 ml-14 py-2 mt-7 rounded-md text-textGreen text-[13px] border border-textGreen cursor-pointer duration-300"
                  >
                    <div className="absolute inset-0 w-3 bg-textGreen transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative group-hover:text-bodyColor">
                      Resume
                    </span>
                  </motion.button>
                </a>

                <div className=" w-full py-8 flex flex-row items-center justify-center gap-4 text-textLight">
                  <div className="flex flex-row gap-4 ">
                    <Reveal2>
                      <a
                        href="https://github.com/Tyrantflood"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="w-10 h-10 text-xl  inline-flex items-center justify-center bg-hoverColor rounded-full hover:text-textGreen cursor-pointer hover:translate-y-[-0.5rem] transition-all duration-300">
                          <TbBrandGithub />
                        </span>
                      </a>
                    </Reveal2>
                    <Reveal2>
                      <a
                        href="https://www.linkedin.com/in/prince-obi-2882bb261/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="w-10 h-10 text-xl  inline-flex items-center justify-center bg-hoverColor rounded-full hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                          <TbBrandLinkedin />
                        </span>
                      </a>
                    </Reveal2>
                    <Reveal2>
                      <a
                        href="https://dribbble.com/P_Obi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="w-10 h-10 text-xl  inline-flex items-center justify-center bg-hoverColor rounded-full hover:text-textGreen cursor-pointer hover:translate-y-[-0.5rem] transition-all duration-300">
                          <TbBrandDribbble />
                        </span>
                      </a>
                    </Reveal2>
                    <Reveal2>
                      <a
                        href="https://www.codewars.com/users/Tyrantflood"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="w-10 h-10 text-xl  inline-flex items-center justify-center bg-hoverColor rounded-full hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                          <SiCodewars />
                        </span>
                      </a>
                    </Reveal2>
                  </div>
                </div>
                <Reveal2>
                  <a
                    href="princeobi124@Gmail.com"
                    target="_blank"
                    className=" text-sm w-72 tracking-widest hover:text-textDark text-textGreen text-center mt-0"
                  >
                    princeobi124@gmail.com
                  </a>
                </Reveal2>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
