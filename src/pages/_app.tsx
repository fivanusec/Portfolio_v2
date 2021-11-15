import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import "animate.css";
import "../styles/Index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
