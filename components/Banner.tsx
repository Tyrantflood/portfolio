import React, { MouseEvent } from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import { Reveal2 } from "./Reveal2";

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  const [text, count] = useTypewriter({
    words: ["a developer.", "a book lover.", "an anime lover.", "a designer."],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  const scrolltoHash = (element_id: string) => {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const buttonHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button = event.currentTarget;
    const targetId = button.getAttribute("data-scroll-id");
    if (targetId) {
      scrolltoHash(targetId);
    }
  };

  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-32 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hello, {"my name is"}
      </motion.h3>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Prince Obi.{" "}
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-textDark mt-2 lgl:mt-4"
        >
          I am <span className="text-textGreen overflow-hidden">{text}</span>
          <Cursor cursorColor="#64ffda" />
        </motion.span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-textDark font-bodyFont text-lg lgl:text-xl font-semibold"
      >
        I am a fullstack web developer. I have a strong foundation in front-end
        & back-end development. I am skilled in creating user-friendly and
        responsive web applications using React and its ecosystem.
      </motion.p>

      <Reveal2>
        <Link href="#contact" passHref>
          <button
            className="mdl:mt-0 px-12 mt-4 rounded-md border max-w-[200px] border-textGreen h-[50px] bg-[#112240] text-textGreen font-bold hover:bg-textGreen active:opacity-30 active:duration-200 hover:text-textDark"
            data-scroll-id="contact"
            onClick={buttonHandler}
          >
            Contact Me
          </button>
        </Link>
      </Reveal2>
    </section>
  );
};

export default Banner;
