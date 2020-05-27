import styled from "styled-components";

export const StyledInfoSectionWrapper = styled.div`
  width: 100%;
  background: #576c82;
  padding: ${(props) => (props.isDesktop ? "40px 10px" : "20px 10px")};
`;

export const StyledInfoSection = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  justify-content: space-evenly;

  .info-card {
    width: ${(props) => (props.isDesktop ? "100%" : "")};
    background: #708a9e;
    margin: 10px;
    border-radius: 3px;
    padding: 20px;
    text-align: center;
  }

  .info-title {
    color: white;
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  .info-row {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    font-size: 1em;
    color: white;
  }

  .info-row-title {
    font-weight: bold;
  }
`;
