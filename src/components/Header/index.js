import React from "react";

import { useWindowDimensions } from "../WindowDimensionsProvider";
import { StyledHeaderWrapper, StyledHeader } from "./styles";

const DesktopNavbar = ({ selectedTab, setSelectedTab }) => {
  return <div className="desktop-menu-wrapper"></div>;
};

const MobileNavbar = ({ selectedTab, setSelectedTab }) => {
  //const [menuOpen, setMenuOpen] = React.useState(false);
  return <div className="mobile-menu"></div>;
};

const Header = ({ selectedTab, setSelectedTab }) => {
  const { isDesktop } = useWindowDimensions();
  const [isShrunk, setIsShrunk] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsShrunk(window.pageYOffset > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <StyledHeaderWrapper isDesktop={isDesktop} isShrunk={isShrunk}>
      <StyledHeader isDesktop={isDesktop} isShrunk={isShrunk}>
        <div className="header-title">ThisToThat</div>
        {isDesktop ? (
          <DesktopNavbar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ) : (
          <MobileNavbar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        )}
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default Header;
