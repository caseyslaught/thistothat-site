import React from "react";

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
    </StyledHome>
  );
};

export default Home;
