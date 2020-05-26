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

const InfoSection = () => {
  const { isDesktop } = useWindowDimensions();

  return (
    <StyledInfoSectionWrapper isDesktop={isDesktop}>
      <StyledInfoSection isDesktop={isDesktop}>
        <div className="info-card">
          <div className="info-title">Data you can trust</div>
          <div className="info-row">
            <AlertOutlined style={{ fontSize: "2em", marginRight: 20 }} />
            <div>
              <div className="info-row-title">Be cool my friend</div>
              <div>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </div>
            </div>
          </div>
          <div className="info-row">
            <DatabaseOutlined style={{ fontSize: "2em", marginRight: 20 }} />
            <div>
              <div className="info-row-title">Easy as pie</div>
              <div>
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo.
              </div>
            </div>
          </div>
          <div className="info-row">
            <FileProtectOutlined style={{ fontSize: "2em", marginRight: 20 }} />
            <div>
              <div className="info-row-title">Take a break and chill</div>
              <div>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit.
              </div>
            </div>
          </div>
        </div>
        <div className="info-card">
          <div className="info-title">Built for developers</div>
          <div className="info-row">
            <OneToOneOutlined style={{ fontSize: "2em", marginRight: 20 }} />
            <div>
              <div className="info-row-title">Focus on other stuff</div>
              <div>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam.
              </div>
            </div>
          </div>
          <div className="info-row">
            <ClockCircleOutlined style={{ fontSize: "2em", marginRight: 20 }} />
            <div>
              <div className="info-row-title">Look some stuff up</div>
              <div>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur.
              </div>
            </div>
          </div>
          <div className="info-row">
            <BranchesOutlined style={{ fontSize: "2em", marginRight: 20 }} />
            <div>
              <div className="info-row-title">Have a good time</div>
              <div>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </div>
            </div>
          </div>
        </div>
      </StyledInfoSection>
    </StyledInfoSectionWrapper>
  );
};

export default InfoSection;
