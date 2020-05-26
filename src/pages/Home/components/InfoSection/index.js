import React from "react";

import { useWindowDimensions } from "../../../../components/WindowDimensionsProvider";
import { StyledInfoSectionWrapper, StyledInfoSection } from "./styles";

const InfoSection = () => {
  const { isDesktop } = useWindowDimensions();

  return (
    <StyledInfoSectionWrapper>
      <StyledInfoSection isDesktop={isDesktop}>
        <div className="info-card">
          <h3>Data you can trust</h3>
        </div>
        <div className="info-card">
          <h3>Built for developers</h3>
        </div>
      </StyledInfoSection>
    </StyledInfoSectionWrapper>
  );
};

export default InfoSection;
