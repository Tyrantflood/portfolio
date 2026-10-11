import React, { MouseEvent, KeyboardEvent, useState, useRef, useEffect } from "react";
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
import { scrollToSection } from "@/lib/scroll";

const SECTIONS = ["about", "projects", "tools", "contact"] as const;
const RESUME = "/assets/Prince_Obi_resume.pdf";
const MENU_ID = "mobile-menu";

const FOCUSABLE = "a[href], button:not([disabled])";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  const goTo = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setShowMenu(false);
    scrollToSection(id);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("hide-scroll");
      closeRef.current?.focus({ preventScroll: true });
      wasOpen.current = true;
    } else {
      document.body.classList.remove("hide-scroll");
      // give focus back to the button that opened the menu (preventScroll, or it would cancel a smooth scroll to the chosen section)
      if (wasOpen.current) burgerRef.current?.focus({ preventScroll: true });
      wasOpen.current = false;
    }
  }, [showMenu]);

  // Escape closes the menu; Tab stays inside it while it is open
  const onMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      setShowMenu(false);
      return;
    }
    if (event.key !== "Tab" || !menuRef.current) return;
    const items = Array.from(menuRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const navLink = (id: string, index: number) => (
    <li
      key={id}
      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
    >
      <a href={`#${id}`} onClick={goTo(id)}>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        >
          .{id}
          <span className="text-textGreen">( )</span>
        </motion.div>
      </a>
    </li>
  );

  const resumeButton = (className: string) => (
    <motion.a
      href={RESUME}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className={`group relative inline-block shadow overflow-hidden px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen cursor-pointer duration-300 ${className}`}
    >
      <div className="absolute inset-0 w-3 bg-textGreen transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span className="relative group-hover:text-bodyColor">Resume</span>
      <span className="sr-only"> (PDF, opens in a new tab)</span>
    </motion.a>
  );

  const socialClass =
    "w-10 h-10 text-xl inline-flex items-center justify-center bg-hoverColor rounded-full hover:text-textGreen cursor-pointer transition-all duration-300 motion-reduce:hover:translate-y-0";

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between text-textDark">
        {/* This is the name component */}

        <NameComponent />

        <nav aria-label="Main" className="hidden mdl:flex gap-8 items-center">
          <ul className="flex text-[14px] gap-8">
            {SECTIONS.map((id, index) => navLink(id, index))}
          </ul>
          {resumeButton("")}
        </nav>

        {/* small icon section */}

        <button
          ref={burgerRef}
          type="button"
          onClick={() => setShowMenu(true)}
          aria-label="Open menu"
          aria-expanded={showMenu}
          aria-controls={MENU_ID}
          className="mdl:hidden flex w-6 h-5 flex-col justify-between text-4xl text-textGreen cursor-pointer overflow-hidden group items-center"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </button>
        {showMenu && (
          <div
            onClick={(event) => {
              // a click on the dimmed backdrop (not the panel) closes the menu
              if (event.target === event.currentTarget) setShowMenu(false);
            }}
            className="absolute top-0 right-0 w-full h-screen  bg-black bg-opacity-50 flex flex-col items-end mdl:hidden"
          >
            <motion.div
              id={MENU_ID}
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              onKeyDown={onMenuKeyDown}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className=" w-[80%] h-full overflow-y-scroll  bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={() => setShowMenu(false)}
                aria-label="Close menu"
                className="absolute top-4 right-4 text-textGreen cursor-pointer hover:text-textDark transition-all duration-300"
              >
                <MdOutlineClose aria-hidden="true" className="text-3xl" />
              </button>

              <div>
                <ul className="flex flex-col ml-14 gap-7 pt-14 text-base">
                  {SECTIONS.map((id, index) => navLink(id, index))}
                </ul>
                {resumeButton("ml-14 mt-7")}

                <div className=" w-full py-8 flex flex-row items-center justify-center gap-4 text-textLight">
                  <div className="flex flex-row gap-4 ">
                    <Reveal2>
                      <a
                        href="https://github.com/Tyrantflood"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub (opens in a new tab)"
                      >
                        <span className={`${socialClass} hover:translate-y-[-0.5rem]`}>
                          <TbBrandGithub aria-hidden="true" />
                        </span>
                      </a>
                    </Reveal2>
                    <Reveal2>
                      <a
                        href="https://www.linkedin.com/in/prince-obi-2882bb261/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn (opens in a new tab)"
                      >
                        <span className={`${socialClass} hover:translate-y-2`}>
                          <TbBrandLinkedin aria-hidden="true" />
                        </span>
                      </a>
                    </Reveal2>
                    <Reveal2>
                      <a
                        href="https://dribbble.com/P_Obi"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Dribbble (opens in a new tab)"
                      >
                        <span className={`${socialClass} hover:translate-y-[-0.5rem]`}>
                          <TbBrandDribbble aria-hidden="true" />
                        </span>
                      </a>
                    </Reveal2>
                    <Reveal2>
                      <a
                        href="https://www.codewars.com/users/Tyrantflood"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Codewars (opens in a new tab)"
                      >
                        <span className={`${socialClass} hover:translate-y-2`}>
                          <SiCodewars aria-hidden="true" />
                        </span>
                      </a>
                    </Reveal2>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
