import React from "react";
import { Button } from "antd";
import { CodeBlock, monoBlue } from "react-code-blocks";

import { useWindowDimensions } from "../../../../components/WindowDimensionsProvider";
import SubmitEmail from "../SubmitEmail";
import { StyledHero } from "./styles";

const code = `
// Lookup Harmonized System code description

const baseUrl = "https://data.thistothat.io"
const queryParams = "?api_key="+API_KEY

fetch(baseUrl + "/commodities/hs/01" + query)
  .then(res => res.json())
  .then(data => console.log(data))

/*
  {
    "code": "01",
    "description": "Animals; live",
    "level": "chapter"
  }
*/
`;

const Hero = () => {
  const { isDesktop } = useWindowDimensions();

  return (
    <StyledHero isDesktop={isDesktop}>
      <div className="text-column">
        <div className="title">Convert stuff from one format to another</div>
        <div className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </div>
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
  );
};

export default Hero;
