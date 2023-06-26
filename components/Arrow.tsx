import React, { MouseEvent } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

interface ArrowProps {}

const Arrow: React.FC<ArrowProps> = () => {
  const scrolltoHash = (element_id: string) => {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const buttonHandler = (event: MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    const button = event.currentTarget;
    const targetId = button.getAttribute("data-scroll-id");
    if (targetId) {
      scrolltoHash(targetId);
    }
  };

  return (
    <div className="pt-36 pb-20 mdl:pt-0">
      <Link href="#about" passHref>
        <motion.span
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="animate-bounce w-6 h-6 flex text-4xl max-w-contentContainer mx-auto cursor-pointer bg-hoverColor rounded-full hover:text-textGreen"
          data-scroll-id="about"
          onClick={buttonHandler}
        >
          <BsArrowDownCircleFill />
        </motion.span>
      </Link>
    </div>
  );
};

export default Arrow;
