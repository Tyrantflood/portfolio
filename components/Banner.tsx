import React, { MouseEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Reveal2 } from "./Reveal2";
import { scrollToSection } from "@/lib/scroll";

const WORDS = ["a developer.", "a book lover.", "an anime lover.", "a designer."];

/** The cycling "a developer. / a book lover. ..." line. Only mounted when motion is allowed. */
const Typed: React.FC = () => {
  const [text] = useTypewriter({
    words: WORDS,
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <>
      <span className="text-textGreen overflow-hidden">{text}</span>
      <Cursor cursorColor="#64ffda" />
    </>
  );
};

const Banner: React.FC = () => {
  // With reduced motion the line stays still instead of typing and deleting forever. Read after mount so the
  // first client render matches the server HTML.
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const goToContact = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection("contact");
  };

  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-32 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hello, {"my name is"}
      </motion.p>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Prince Obi.{" "}
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-textDark mt-2 lgl:mt-4"
        >
          I am{" "}
          {reduceMotion ? (
            <span className="text-textGreen">a developer.</span>
          ) : (
            <Typed />
          )}
        </motion.span>
      </motion.h1>
      {/* The first paragraph is what visitors see first, so it is not held back by an entrance animation */}
      <p className="text-textDark font-bodyFont text-lg lgl:text-xl font-semibold">
        I am a fullstack web developer. I have a strong foundation in front-end
        & back-end development. I am skilled in creating user-friendly and
        responsive web applications using React and its ecosystem.
      </p>

      <Reveal2>
        <a
          href="#contact"
          onClick={goToContact}
          className="mdl:mt-0 px-12 mt-4 rounded-md border max-w-[200px] border-textGreen h-[50px] bg-[#112240] text-textGreen font-bold hover:bg-textGreen active:opacity-30 active:duration-200 hover:text-textDark inline-flex items-center justify-center whitespace-nowrap"
        >
          Contact Me
        </a>
      </Reveal2>
    </section>
  );
};

export default Banner;
