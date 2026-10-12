import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { scrollToSection } from "@/lib/scroll";

function About() {
  return (
    <section
      id="about"
      className="max-w-contentContainer mx-auto py-24 mdl:py-28 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <h2 className="sr-only">About</h2>
      <Reveal>
        <span aria-hidden="true" className="text-textGreen overflow-hidden mdl:text-4xl text-3xl font-bold font-titleFont">
          {'<wrapper id="about">'}
        </span>
      </Reveal>

      <div className="max-w-containerSmall mx-auto lgl:mx-8 py-10 lgl:py-8 flex flex-col gap-8 text-textDark font-bodyFont font-semibold lgl:w-2/3 w-full text-base">
        <Reveal>
          <motion.p className="">
            Hello! My name is Prince and I enjoy creating things that live on
            the internet. My interest in web development started back in 2019,
            when I joined university. I began learning to code as a hobby, soon
            found out that I love it, and decided to pursue it as a career.
          </motion.p>
        </Reveal>

        <Reveal>
          <motion.p>
            I was a tech intern at a government agency. I have also worked at an
            auditing firm, on a wide variety of projects.
          </motion.p>
        </Reveal>

        <Reveal>
          <motion.p>
            My main focus these days is React and its ecosystem, and I build
            with AI-assisted workflows using Claude Code. I am open to
            full-time roles and freelance work, so if you have a role or a
            project in mind, or just fancy saying hey,{" "}
            <a
              href="#contact"
              className="text-textGreen cursor-pointer"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("contact");
              }}
            >
              get in touch.
            </a>
          </motion.p>
        </Reveal>

        <Reveal>
          <motion.p>
            Outside of code, I am a huge fan of books and anime. If you ever
            want to talk about either, I am your guy, especially if you are a
            fan of Lovecraftian mythos. Those are my best reads these days and
            I am always looking for new ones.
          </motion.p>
        </Reveal>
      </div>
      <Reveal>
        <span aria-hidden="true" className="text-textGreen overflow-hidden mdl:text-4xl text-3xl font-bold font-titleFont">
          {"</wrapper>"}
        </span>
      </Reveal>
    </section>
  );
}

export default About;
