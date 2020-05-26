import React from "react";

import Caracal from "../../../../assets/images/caracal.png";
import { StyledPartnersWrapper, StyledPartners } from "./styles";

const Partners = () => {
  return (
    <StyledPartnersWrapper>
      <StyledPartners>
        <div className="partner">Trusted by:</div>
        <div className="partner">
          <img src={Caracal} alt="Caracal logo" />
        </div>
        <div className="partner">
          <img src={Caracal} alt="Caracal logo" />
        </div>
        <div className="partner">
          <img src={Caracal} alt="Caracal logo" />
        </div>
      </StyledPartners>
    </StyledPartnersWrapper>
  );
};

export default Partners;
