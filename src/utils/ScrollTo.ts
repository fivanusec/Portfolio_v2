import { scroller } from "react-scroll";

export const scrollToDiv = (classname: string) => {
  scroller.scrollTo(classname, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};
