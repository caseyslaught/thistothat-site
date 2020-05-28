import React from "react";

import {
  AlertOutlined,
  BranchesOutlined,
  ClockCircleOutlined,
  DatabaseOutlined,
  FileProtectOutlined,
  OneToOneOutlined,
} from "@ant-design/icons";

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
          <InfoRow
            title="Be cool my friend"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam."
            IconComponent={AlertOutlined}
          />
          <InfoRow
            title="Easy as pie"
            description="Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo."
            IconComponent={DatabaseOutlined}
          />
          <InfoRow
            title="Take a break and chill"
            description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit."
            IconComponent={FileProtectOutlined}
          />
        </div>
        <div className="info-card">
          <div className="info-title">Built for developers</div>
          <InfoRow
            title="Focus on other stuff"
            description="Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam."
            IconComponent={OneToOneOutlined}
          />
          <InfoRow
            title="Look some stuff up"
            description="Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur."
            IconComponent={ClockCircleOutlined}
          />
          <InfoRow
            title="Have a good time"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti."
            IconComponent={BranchesOutlined}
          />
        </div>
      </StyledInfoSection>
    </StyledInfoSectionWrapper>
  );
};

export default InfoSection;
