import styled from "styled-components";

export const StyledPartnersWrapper = styled.div`
  width: 100%;
  padding: 20px 0px;
  background: #b3c0c9;
`;

export const StyledPartners = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  .trust-wrapper {
    margin-bottom: 10px;
    color: #fafafa;
  }

  .partners-wrapper {
    width: 100%;
    display: flex;
    flex-direction: "row";
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .partners-wrapper .partner {
    margin: 10px;
  }

  .partner img {
    height: 35px;
    width: auto;
  }
`;
