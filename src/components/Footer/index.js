import React from "react";
import { CopyrightOutlined } from "@ant-design/icons";

import { useWindowDimensions } from "../WindowDimensionsProvider";

import { StyledFooterWrapper, StyledFooter } from "./styles";

const Footer = () => {
  const { isDesktop } = useWindowDimensions();

  return (
    <StyledFooterWrapper>
      <StyledFooter isDesktop={isDesktop}>
        <span>
          <CopyrightOutlined style={{ marginRight: 10 }} />
          <span>ThisToThat 2020</span>
        </span>
      </StyledFooter>
    </StyledFooterWrapper>
  );
};

export default Footer;
