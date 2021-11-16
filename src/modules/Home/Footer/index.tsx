import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FooterSocial } from "../Social/FooterSocial";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const Footer: React.FC<{}> = ({}) => {
  return (
    <div className="flex flex-col justify-items-center items-center justify-center w-full bg-gray-400 p-20 mt-10 font-sans">
      <div className="flex flex-col">
        <ScrollAnimation
          animateIn="animate__flipInX"
          className="flex flex-col justify-items-center items-center"
        >
          <h2 className="text-primary text-4xl uppercase font-bold">
            Contact me
          </h2>
          <hr className="w-1/12 mt-3 border-b-4 border-purple" />
        </ScrollAnimation>
      </div>
      <FooterSocial />
    </div>
  );
};
