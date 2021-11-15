import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Card } from "../../../ui/Card/Card";
import { Fork } from "../../../ui/Icons/Fork";
import { Star } from "../../../ui/Icons/Star";
import { fetchApi } from "../../../utils/fetchApi";

export const DevWork: React.FC<{}> = ({}) => {
  const [repos, setRepos]: Array<any> = useState([]);
  useEffect(() => {
    fetchApi().then(setRepos);
  }, []);
  const showCase = extractRepos(repos);
  return (
    <div className="flex flex-col w-full justify-center" id="mywork">
      <ScrollAnimation
        animateIn="animate__flipInX"
        className="flex flex-col justify-items-center items-center"
      >
        <h2 className="text-primary text-4xl uppercase font-bold">My work</h2>
        <hr className="w-1/12 mt-3 border-b-4 border-purple" />
      </ScrollAnimation>
      <div className="grid grid-cols-4 gap-4 p-20">
        {showCase.map((element: any) => (
          <ScrollAnimation animateIn="animate__zoomIn" key={element?.id}>
            <Card>
              <div className="flex flex-row text-xl font-medium text-primary">
                <a
                  className="hover:underline"
                  href={"https://github.com/fivanusec/" + element?.name}
                >
                  {element?.name}
                </a>
              </div>
              <p className="text-gray-500">{element?.description}</p>
              <div className="flex flex-row mt-2">
                <div className="flex flex-row">
                  <Star /> {element?.stargazers_count}
                </div>
                <div className="flex flex-row ml-5">
                  <Fork /> {element?.forks_count}
                </div>
              </div>
            </Card>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

// Needs improvment ASAP!
const extractRepos = (repos: any) => {
  const showCase: any = [];
  let rand = Math.floor(Math.random() * repos.length);
  for (let index = 0; index < 4; index++) {
    showCase.push(
      repos[
        !showCase.indexOf(rand)
          ? rand
          : Math.floor(Math.random() * repos.length)
      ]
    );
  }
  return showCase;
};
