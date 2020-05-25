import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  background: #314159;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 2;

  padding: 0px 10px;
  box-shadow: ${(props) =>
    props.isShrunk ? "0 8px 15px -7px rgba(0, 0, 0, 0.2)" : "none"};
  height: ${(props) => (props.isShrunk ? "50px" : "64px")};
  transition: all 350ms ease;
`;

export const StyledHeader = styled.header`
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  color: white;

  .header-title {
    font-size: 1.4em;
    font-weight: bold;
    color: white;
  }

  .logo {
    height: 60%;
    width: auto;
  }
`;
