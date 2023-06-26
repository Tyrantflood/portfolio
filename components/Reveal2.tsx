import React from "react";
import { useEffect, useRef } from "react";
import { useInView, motion, useAnimation, delay } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Reveal2 = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, controls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
