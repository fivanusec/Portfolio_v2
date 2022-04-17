import { CustomValueType, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useOnScreen } from "../../../hooks/useOnScreen";

interface LazyShowProps {
  x: string | number | CustomValueType | undefined;
  opacity?: number;
  className?: string | undefined;
}

const LazyShow: React.FC<LazyShowProps> = ({
  children,
  x,
  opacity,
  className,
}) => {
  const controls = useAnimation();
  const rootRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(rootRef);
  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      });
    }
  }, [onScreen, controls]);
  return (
    <motion.div
      className={className}
      ref={rootRef}
      initial={{ opacity: opacity, x: x }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default LazyShow;
