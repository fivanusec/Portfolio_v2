import { CustomValueType, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface LazyShowProps {
  x: string | number | CustomValueType | undefined;
  opacity?: number;
  className?: string | undefined;
}

function useOnScreen(ref: React.RefObject<HTMLDivElement>, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let currentRef: Element | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      currentRef = ref.current;
      observer.observe(currentRef);
    }
    return () => {
      observer.unobserve(currentRef as Element);
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
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
