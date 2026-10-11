import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";

// Function component
const NameComponent: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
        <motion.button
          type="button"
          aria-label="P.O, back to top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:hidden flex font-bold text-[25px] hover:text-textGreen cursor-pointer duration-300"
          onClick={() => scrollToSection("home")}
        >
          P.O
        </motion.button>
      ) : (
        <motion.button
          type="button"
          aria-label="Prince.Obi, back to top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:flex font-bold text-[25px] hover:text-textGreen cursor-pointer duration-300"
          onClick={() => scrollToSection("home")}
        >
          Prince.Obi
        </motion.button>
      )}
    </>
  );
};

export default NameComponent;
