import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface SlideInYProps {
  className?: string | undefined;
  delay?: number;
}

export const SlideInY: React.FC<SlideInYProps> = ({
  className,
  children,
  delay = 0,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ translateY: 1000 }}
        animate={{
          translateY: 0,
        }}
        transition={{
          delay: delay,
          duration: 2,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
