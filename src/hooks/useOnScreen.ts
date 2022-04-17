import { useState, useEffect } from "react";

export const useOnScreen = (
  ref: React.RefObject<HTMLDivElement>,
  rootMargin = "0px"
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let currentRef: Element | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
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
  }, [ref, rootMargin]);

  return isIntersecting;
};
