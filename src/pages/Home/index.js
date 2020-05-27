import React from "react";

import DataSources from "./components/DataSources";
import Explore from "./components/ExploreSection";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Partners from "./components/Partners";

import { StyledHome } from "./styles";

const Home = () => {
  return (
    <StyledHome>
      <Hero />
      <Partners />
      <InfoSection />
      <Explore />
      <DataSources />
    </StyledHome>
  );
};

export default Home;
