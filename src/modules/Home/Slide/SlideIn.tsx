import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface SlideInProps {
  className?: string | undefined;
  delay?: number;
}

export const SlideIn: React.FC<SlideInProps> = ({
  className,
  children,
  delay = 0,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ translateX: -1000 }}
        animate={{
          translateX: 0,
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
