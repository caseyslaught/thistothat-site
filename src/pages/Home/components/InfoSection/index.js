import React from "react";

import {
  dataSection,
  developerSection,
} from "../../../../assets/text/InfoSection";
import { useWindowDimensions } from "../../../../components/WindowDimensionsProvider";
import { StyledInfoSectionWrapper, StyledInfoSection } from "./styles";

const InfoRow = ({ title, description, IconComponent }) => {
  return (
    <div className="info-row">
      <IconComponent style={{ fontSize: "2em", marginRight: 20 }} />
      <div>
        <div className="info-row-title">{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

const InfoSection = () => {
  const { isDesktop } = useWindowDimensions();

  return (
    <StyledInfoSectionWrapper isDesktop={isDesktop}>
      <StyledInfoSection isDesktop={isDesktop}>
        <div className="info-card">
          <div className="info-title">Data you can trust</div>

          {dataSection.map((row) => (
            <InfoRow
              key={row.title}
              title={row.title}
              description={row.description}
              IconComponent={row.iconComponent}
            />
          ))}
        </div>
        <div className="info-card">
          <div className="info-title">Built for developers</div>

          {developerSection.map((row) => (
            <InfoRow
              key={row.title}
              title={row.title}
              description={row.description}
              IconComponent={row.iconComponent}
            />
          ))}
        </div>
      </StyledInfoSection>
    </StyledInfoSectionWrapper>
  );
};

export default InfoSection;
