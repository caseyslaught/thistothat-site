import styled from "styled-components";

export const StyledHero = styled.div`
  max-width: 1000px;
  margin: 20px auto 20px auto;

  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  justify-content: ${(props) => (props.isDesktop ? "space-evenly" : "center")};
  padding: ${(props) => (props.isDesktop ? "10px" : "10px")};

  .title {
    font-size: ${(props) => (props.isDesktop ? "1.8em" : "1.4em")};
    color: #314159;
    margin-bottom: ${(props) => (props.isDesktop ? "20px" : "10px")};
  }

  .subtitle {
    font-size: ${(props) => (props.isDesktop ? "1.2em" : "1em")};
    color: #555555;
    margin-bottom: ${(props) => (props.isDesktop ? "60px" : "20px")};
  }

  .message {
    font-size: ${(props) => (props.isDesktop ? "0.8em" : "0.8em")};
    color: #999999;
    margin-top: 5px;
  }

  .text-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: ${(props) => (props.isDesktop ? "30px" : "0px")};
    margin-bottom: ${(props) => (props.isDesktop ? "10px" : "20px")};
  }

  .example-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: ${(props) => (props.isDesktop ? "30px" : "0px")};
    margin-bottom: ${(props) => (props.isDesktop ? "10px" : "20px")};
  }
`;
