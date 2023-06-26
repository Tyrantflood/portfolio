import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Function component
const NameComponent: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const scrolltoHash = (element_id: string) => {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const [clickedButton, setClickedButton] = useState("");

  const buttonHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    const button = event.currentTarget;
    setClickedButton(button.getAttribute("data-scroll-id") || "");
    scrolltoHash(button.getAttribute("data-scroll-id") || "");
  };

  useEffect(() => {
    // Check if the screen size matches a media query for small screens
    const handleResize = () => {
      const mq = window.matchMedia("(max-width: 667px)");
      setIsSmallScreen(mq.matches);
    };

    handleResize();

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:hidden flex font-bold text-[25px] hover:text-textGreen cursor-pointer duration-300"
          onClick={() => scrolltoHash("home")}
        >
          P.O
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:flex font-bold text-[25px] hover:text-textGreen cursor-pointer duration-300"
          onClick={() => scrolltoHash("home")}
        >
          Prince.Obi
        </motion.div>
      )}
    </>
  );
};

export default NameComponent;
