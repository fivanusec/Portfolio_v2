import React from "react";
import { Button } from "../../../ui/Button";
import { Github } from "../../../ui/Icons/Github";
import { Instagram } from "../../../ui/Icons/Instagram";
import { Twitter } from "../../../ui/Icons/Twitter";
import { SlideIn } from "../Slide/SlideIn";

export const Social: React.FC = () => {
  return (
    <div className="flex flex-row p-10 xs:p-5 xs:w-1/2 xs:h-1/2 xs:transform xs:scale-75">
      <SlideIn delay={0.7}>
        <a href="https://github.com/fivanusec">
          <Button
            variant="purple"
            style={{
              marginRight: "15px",
            }}
          >
            <Github />
          </Button>
        </a>
      </SlideIn>
      <SlideIn delay={0.3}>
        <a href="https://twitter.com/fivanusec">
          <Button
            style={{
              marginRight: "15px",
            }}
            variant="purple"
          >
            <Twitter />
          </Button>
        </a>
      </SlideIn>
      <SlideIn>
        <a href="https://www.instagram.com/ivanusecfilip/">
          <Button variant="purple">
            <Instagram />
          </Button>
        </a>
      </SlideIn>
    </div>
  );
};
