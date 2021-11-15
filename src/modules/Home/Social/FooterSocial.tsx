import React from "react";
import { Button } from "../../../ui/Button";
import { Email } from "../../../ui/Icons/Email";
import { Github } from "../../../ui/Icons/Github";
import { Instagram } from "../../../ui/Icons/Instagram";
import { Twitter } from "../../../ui/Icons/Twitter";
import { SlideIn } from "../Slide/SlideIn";

export const FooterSocial: React.FC<{}> = ({}) => {
  return (
    <div className="flex flex-row p-10 xs:p-5 xs:w-1/2 xs:h-1/2 xs:transform xs:scale-75">
      <SlideIn delay={0.9}>
        <Button
          variant="rose"
          style={{
            marginRight: "15px",
          }}
        >
          <a href="https://github.com/fivanusec">
            <Github />
          </a>
        </Button>
      </SlideIn>
      <SlideIn delay={0.5}>
        <Button
          style={{
            marginRight: "15px",
          }}
          variant="rose"
        >
          <a href="https://twitter.com/fivanusec">
            <Twitter />
          </a>
        </Button>
      </SlideIn>
      <SlideIn delay={0.3}>
        <Button
          variant="rose"
          style={{
            marginRight: "15px",
          }}
        >
          <a href="https://www.instagram.com/ivanusecfilip/">
            <Instagram />
          </a>
        </Button>
      </SlideIn>
      <SlideIn>
        <Button variant="rose">
          <a href="mailto:fivanusec@gmail.com">
            <Email />
          </a>
        </Button>
      </SlideIn>
    </div>
  );
};
