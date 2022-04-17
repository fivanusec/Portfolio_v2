import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from "react-i18next";
import { Card } from "../../../ui/Card/Card";
import { Fork } from "../../../ui/Icons/Fork";
import { Star } from "../../../ui/Icons/Star";
import { fetchApi } from "../../../utils/fetchApi";

export const DevWork: React.FC = () => {
  const [repos, setRepos] = useState<Array<GithubRepo> | undefined>([]);
  const [showCase, setShowCase] = useState<Array<GithubRepo> | undefined>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      return await fetchApi().then((r: GithubRepo[]) => {
        setRepos(r);
        setShowCase(extractRepos(repos) as GithubRepo[]);
      });
    };
    fetchRepos();
  }, [repos]);

  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col w-full justify-center items-center font-sans"
      id="mywork"
    >
      <ScrollAnimation
        animateIn="animate__flipInX"
        className="flex flex-col justify-items-center items-center"
      >
        <h2 className="text-primary text-4xl uppercase font-bold">
          {t("my-work.title")}
        </h2>
        <hr className="w-1/12 mt-3 border-b-4 border-purple" />
      </ScrollAnimation>
      <div className="flex flex-col w-1/2 mt-10">
        <p className="text-xl xs:text-l">{t("my-work.text")}</p>
        <p className="text-xl xs:text-l mt-5">{t("my-work.text-2")}</p>
      </div>
      <div className="grid grid-cols-4 gap-4 p-20">
        {showCase!.map((element: GithubRepo | undefined, idx: number) => (
          <ScrollAnimation animateIn="animate__zoomIn" key={idx}>
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
                  <Star /> <p className="ml-3">{element?.stargazers_count}</p>
                </div>
                <div className="flex flex-row ml-5">
                  <Fork /> <p className="ml-3">{element?.forks_count}</p>
                </div>
              </div>
            </Card>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

const extractRepos = (repos: Array<GithubRepo> | undefined) =>
  [...new Array(8)]
    .map(() => {
      let rand = Math.floor(Math.random() * repos!.length);
      return repos!.at(rand);
    })
    .flat();
