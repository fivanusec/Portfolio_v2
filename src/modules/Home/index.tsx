import React from "react";
import { Wave } from "../../ui/Wave";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Aboutme } from "./Aboutme";
import { Introduction } from "./Introduction";
import { MyPhotography } from "./MyPhotography";
import { MyServices } from "./MyServices/MyServices";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <DefaultLayout>
      <Introduction />
      <Wave />
      <Aboutme />
      <MyServices />
      <MyPhotography />
    </DefaultLayout>
  );
};
