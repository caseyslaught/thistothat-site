import styled from "styled-components";

export const StyledDataSourcesWrapper = styled.div`
  width: 100%;
  background: #ebebeb;
  padding: ${(props) => (props.isDesktop ? "40px 10px" : "20px 10px")};
`;

export const StyledDataSources = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  justify-content: space-evenly;

  .card {
    position: relative;
    min-height: 300px;
    width: ${(props) => (props.isDesktop ? "100%" : "")};
    background: #b3c0c9;
    margin: 10px;
    border-radius: 3px;
    padding: 20px;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card img {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .card .status {
    position: absolute;
    bottom: 20px;
    right: 20px;
    margin: 0px;
  }

  .title {
    color: #314150;
    font-size: 1.2em;
    margin-bottom: 40px;
  }

  .description {
    text-align: left;
  }

  .sources-list {
  }

  .source-row {
    color: #576c82;
    text-align: left;
    border-bottom: 1px solid #576c82;
    padding: 10px;
    margin: 5px;
  }

  .source-row:hover {
    border-bottom: 1px solid #314159;
    color: #314159;
  }

  a {
    color: #576c82;
  }

  a:hover {
    color: #314159;
  }
`;
