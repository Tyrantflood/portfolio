import React, { MouseEvent } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";

const Arrow: React.FC = () => {
  const goToAbout = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection("about");
  };

  return (
    <div className="pt-36 pb-20 mdl:pt-0">
      <a href="#about" onClick={goToAbout} aria-label="Scroll to the About section">
        <motion.span
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="motion-safe:animate-bounce w-6 h-6 flex text-4xl max-w-contentContainer mx-auto cursor-pointer bg-hoverColor rounded-full hover:text-textGreen"
        >
          <BsArrowDownCircleFill aria-hidden="true" />
        </motion.span>
      </a>
    </div>
  );
};

export default Arrow;
