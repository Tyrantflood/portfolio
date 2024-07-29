import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const About: React.FC = () => {
  const scrolltoHash = (element_id: string) => {
    const element = document.getElementById(element_id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      console.warn(`Element with ID ${element_id} not found.`);
    }
  };

  return (
    <section
      id="about"
      className="max-w-contentContainer mx-auto py-24 mdl:py-28 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <Reveal>
        <span className="text-textGreen overflow-hidden mdl:text-4xl text-3xl font-bold font-titleFont">
          {"<wrapper id='about'>"}
        </span>
      </Reveal>

      <div className="max-w-containerSmall mx-auto lgl:mx-8 py-10 lgl:py-8 flex flex-col gap-8 text-textDark font-bodyFont font-semibold lgl:w-2/3 w-full text-base">
        <Reveal>
          <motion.p>
            Hello! My name is Prince and I enjoy creating things that live on
            the internet. My interest in web development started back in 2019
            when I just joined the university. Learning code as a hobby, I soon
            found out that I love coding and I decided to pursue it as a career.
          </motion.p>
        </Reveal>

        <Reveal>
          <motion.p>
            Fast-forward to today,{" I've "}
            had the privilege of working as a tech intern at a government
            agency, and currently at a massive auditing firm where I work on a
            wide variety of interesting and inclusive projects on a daily basis.
          </motion.p>
        </Reveal>

        <Reveal>
          <motion.p>
            My main focus these days is upgrading my skills in React and its
            available ecosystem. I am also trying to get into the freelance
            scheme of things. so if you have a project that you want to get
            started, think you need my help with something or just fancy saying
            hey,{" "}
            <span
              className="text-textGreen cursor-pointer"
              onClick={() => scrolltoHash("contact")}
            >
              then get in touch.
            </span>
          </motion.p>
        </Reveal>

        <Reveal>
          <motion.p>
            Besides all the technical stuff I am also a huge fan of books and
            anime. if you ever want to talk about any of these, I am your guy.
            especially if you are a fan of the{" "}
            <a
              href="https://www.google.com/search?q=lovecraftian+meaning&oq=lovecraftian+m&aqs=chrome.2.69i57j0i512l2j46i340i512j46i512j0i512l4.5996j0j7&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noreferrer"
              className="text-textGreen cursor-pointer"
            >
              lovecraftian mythos.
            </a>{" "}
            Those are my best reads these days and I am always looking for new
            ones.
          </motion.p>
        </Reveal>
      </div>
      <Reveal>
        <span className="text-textGreen overflow-hidden mdl:text-4xl text-3xl font-bold font-titleFont">
          {"</wrapper>"}
        </span>
      </Reveal>
    </section>
  );
};

export default About;
