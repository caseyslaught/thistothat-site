import React from "react";
import { Button } from "antd";

import { useWindowDimensions } from "../../../../components/WindowDimensionsProvider";

import { StyledExploreWrapper, StyledExplore } from "./styles";

const Explore = () => {
  const { isDesktop } = useWindowDimensions();

  return (
    <StyledExploreWrapper>
      <StyledExplore isDesktop={isDesktop}>
        <Button
          href="https://thistothat.docs.apiary.io/"
          target="_blank"
          size={isDesktop ? "large" : ""}
        >
          EXPLORE THE DOCS
        </Button>
      </StyledExplore>
    </StyledExploreWrapper>
  );
};

export default Explore;
