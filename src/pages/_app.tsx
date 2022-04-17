import React from "react";
import type { AppProps } from "next/app";
import { isServer } from "../utils/isServer";
import { init_i18n } from "../lib/i18n";

import "animate.css";
import "../styles/Index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "tailwindcss/tailwind.css";

if (!isServer()) init_i18n();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
