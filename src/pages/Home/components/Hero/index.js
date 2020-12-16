import React from "react";
import { Button } from "antd";
import { CodeBlock, monoBlue } from "react-code-blocks";

import { title, subtitle, code } from "../../../../assets/text/heroSection";
import { useWindowDimensions } from "../../../../components/WindowDimensionsProvider";
import SubmitEmail from "../SubmitEmail";
import { StyledHeroWrapper, StyledHero } from "./styles";

const Hero = () => {
  const { isDesktop } = useWindowDimensions();

  return (
    <StyledHeroWrapper>
      <StyledHero isDesktop={isDesktop}>
        <div className="text-column">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
          <SubmitEmail />
        </div>
        <div className="example-column">
          <CodeBlock
            className="code-wrapper"
            language="javascript"
            showLineNumbers={false}
            text={code}
            theme={monoBlue}
            wrapLines
          />
          <Button
            href="https://thistothat.docs.apiary.io/"
            target="_blank"
            size={isDesktop ? "large" : ""}
            style={{ marginTop: 10 }}
          >
            EXPLORE THE DOCS
          </Button>
        </div>
      </StyledHero>
    </StyledHeroWrapper>
  );
};

export default Hero;
