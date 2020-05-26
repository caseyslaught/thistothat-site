import styled from "styled-components";

export const StyledPartnersWrapper = styled.div`
  width: 100%;
  padding: 20px 0px;
  background: #b3c0c9;
`;

export const StyledPartners = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  .partner {
    flex: 1;
    padding: 5px;
    text-align: center;
  }

  .partner img {
    height: 30px;
    width: auto;
  }
`;
