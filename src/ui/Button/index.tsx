import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "purple" | "rose";
  style?: React.CSSProperties | undefined;
}

export const Button: React.FC<ButtonProps> = ({ children, style, variant }) => {
  switch (variant) {
    case "primary":
      return (
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={style}
          className="py-2 px-10 font-semibold rounded-full shadow-md text-white bg-primary"
        >
          {children}
        </motion.button>
      );
    case "secondary":
      return (
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={style}
          className="py-2 px-10 font-semibold rounded-full shadow-md text-white bg-secondary"
        >
          {children}
        </motion.button>
      );
    case "purple":
      return (
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={style}
          className="py-2 px-10 font-semibold rounded-full shadow-md text-white bg-purple"
        >
          {children}
        </motion.button>
      );
    case "rose":
      return (
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={style}
          className="py-2 px-10 font-semibold rounded-full shadow-md text-white bg-rose"
        >
          {children}
        </motion.button>
      );
    default:
      return (
        <motion.button
          style={style}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="py-2 px-10 font-semibold rounded-full shadow-md text-white bg-primary"
        >
          {children}
        </motion.button>
      );
  }
};
