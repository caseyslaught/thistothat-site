import React from "react";

import { useWindowDimensions } from "../WindowDimensionsProvider";

import StyledLayout from "./styles";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  const { isDesktop } = useWindowDimensions();

  return (
    <StyledLayout isDesktop={isDesktop}>
      <Header />
      <div className="content-wrapper">{children}</div>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
