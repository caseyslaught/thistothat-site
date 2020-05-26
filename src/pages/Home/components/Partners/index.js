import React from "react";

import { useWindowDimensions } from "../../../../components/WindowDimensionsProvider";
import AskBobo from "../../../../assets/images/askbobo.png";
import Caracal from "../../../../assets/images/caracal.png";
import HeyThere from "../../../../assets/images/heythere.png";
import QuipLink from "../../../../assets/images/quiplink.png";

import { StyledPartnersWrapper, StyledPartners } from "./styles";

const Partners = () => {
  const { isDesktop } = useWindowDimensions();

  return (
    <StyledPartnersWrapper>
      <StyledPartners isDesktop={isDesktop}>
        <div className="trust-wrapper">Trusted by</div>
        <div className="partners-wrapper">
          <div className="partner">
            <img src={AskBobo} alt="AskBobo logo" />
          </div>
          <div className="partner">
            <img src={Caracal} alt="Caracal logo" />
          </div>
          <div className="partner">
            <img src={HeyThere} alt="HeyThere logo" />
          </div>
          <div className="partner">
            <img src={QuipLink} alt="quip.ink logo" />
          </div>
        </div>
      </StyledPartners>
    </StyledPartnersWrapper>
  );
};

export default Partners;
