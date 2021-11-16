module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: { max: "640px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
    extend: {
      colors: {
        primary: "#145494",
        secondary: "#7fb0da",
        background: "#e2e9fb",
        purple: "#b3b4d5",
        rose: "#baafce",
      },
    },
    fontFamily: {
      sans: ["Open\\ Sans"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
