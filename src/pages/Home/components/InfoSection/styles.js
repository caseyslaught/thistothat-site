import styled from "styled-components";

export const StyledInfoSectionWrapper = styled.div`
  width: 100%;
  height: 400px;
  background: #576c82;
  padding: 20px;
`;

export const StyledInfoSection = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  justify-content: space-evenly;
  align-items: center;

  .info-card {
    height: 100%;
    width: 100%;
    background: #708a9e;
    margin: 10px;
    border-radius: 3px;
    padding: 10px;
    text-align: center;
  }

  .info-card h3 {
    color: white;
  }
`;
