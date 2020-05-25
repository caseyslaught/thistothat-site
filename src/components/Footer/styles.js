import styled from "styled-components";

export const StyledFooterWrapper = styled.div`
  background: #314159;
  width: 100%;
  height: 64px;
`;

export const StyledFooter = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;

  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  justify-content: ${(props) => (props.isDesktop ? "space-evenly" : "center")};
  align-items: center;

  color: white;
`;
