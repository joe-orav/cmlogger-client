import React, { useEffect } from "react";
import logo from "../img/logo.png";
import toggleIcon from "../img/collapsed-nav.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../store/selectors";
import styled, { keyframes, css } from "styled-components";
import ProfileNav from "./profileNav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const SiteContent = styled.div`
  align-self: stretch;

  @media (min-width: 768px) {
    padding-left: 173px;
  }

  @media (max-width: 767.98px) {
    padding-top: 75px;
  }
`;

const SiteNavBar = styled(Navbar)`
  position: fixed;
  justify-content: flex-start;
  z-index: 1;
  padding: 0.5rem 0;

  @media (min-width: 768px) {
    flex-direction: column;
    width: 175px;
    height: 100%;
  }

  @media (max-width: 767.98px) {
    width: 100%;
  }
`;

const NavbarToggleButton = styled(Navbar.Toggle)`
  padding: 0.25rem 2px;
  margin-left: 10px;
`;

const ToggleIcon = styled.span`
  background-image: url(${(props) => props.icon});
`;

const SiteBrand = styled(Link)`
  margin-right: 0;
  width: 140px;

  @media (min-width: 768px) {
    padding-top: 15px;
  }

  @media (max-width: 767.98px) {
    padding-left: 5px;
  }
`;

const SiteNav = styled(Nav)`
  align-self: start;

  @media (min-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const SiteNavLink = styled(Link).attrs(() => ({
  className: "nav-item nav-link pl-3 pl-md-3",
}))`
  color: #fff;
`;

const slideDown = keyframes`
  from {
    max-height: 0px;
  }

  to {
    max-height: 200px;
  }
`;

const SiteDropdown = styled(NavDropdown)`
  .dropdown-toggle.nav-link {
    padding-left: 1rem;
  }

  .dropdown-menu {
    min-width: 0;
    width: 100%;
    border: none;
    padding: 0.3rem 1rem;
    background: #535353;
    border-radius: 0;
  }
  
  .dropdown-menu.show {
    position: static;
    animation: ${slideDown} 0.6s linear;
    overflow: hidden;
  }
`;

const SiteDropdownItem = styled(NavDropdown.Item)`
  color: #fff;
  font-size: 0.9rem;
  padding: 0 0 0.5rem 0;

  &:first-child {
    padding-top: 0.5rem;
  }

  &.active, &:active {
    background: none;
  }

  &:hover {
    background: none;
    color: #cccccc;
  }
`;

const SiteLayout = ({ hideNavBar, user, children }) => {
  useEffect(() => {
    let toggleBtn = document.querySelector("#nav-toggle-btn");

    if (toggleBtn && !toggleBtn.classList.contains("collapsed")) {
      toggleBtn.click();
    }
  });

  return !hideNavBar ? (
    <LayoutWrapper>
      <SiteNavBar expand="md" variant="none" className="bg-primary">
        <NavbarToggleButton id="nav-toggle-btn" aria-controls="cm-navbar-nav">
          <ToggleIcon className="navbar-toggler-icon" icon={toggleIcon} />
        </NavbarToggleButton>
        <SiteBrand to="/" className="navbar-brand">
          <Image src={logo} fluid alt="CMLogger" className="d-block" />
        </SiteBrand>
        <ProfileNav.NavCondensed name={user.name} icon={user.default_pic} />
        <SiteNavBar.Collapse id="cm-navbar-nav" className="w-100">
          <SiteNav className="flex-column w-100">
            <SiteNavLink to="/overview">
              <i className="fas fa-home"></i> Overview
            </SiteNavLink>
            <SiteDropdown
              title={
                <>
                  <i className="fas fa-car"></i> My Cars
                </>
              }
            >
              <SiteDropdownItem forwardedAs={Link} to="/cars">View Cars</SiteDropdownItem>
              <SiteDropdownItem href="#/">Add New Car</SiteDropdownItem>
            </SiteDropdown>
            <SiteDropdown
              title={
                <>
                  <i className="fas fa-wrench"></i> Service History
                </>
              }
            >
              <SiteDropdownItem forwardedAs={Link} to="/service-history">View Records</SiteDropdownItem>
              <SiteDropdownItem href="#/">Add New Record</SiteDropdownItem>
            </SiteDropdown>
          </SiteNav>
        </SiteNavBar.Collapse>
        <ProfileNav.NavExpanded name={user.name} icon={user.default_pic} />
      </SiteNavBar>
      <SiteContent className="flex-fill bg-light">
        <Container fluid>{children}</Container>
      </SiteContent>
    </LayoutWrapper>
  ) : (
    <Container fluid className="h-100">
      {children}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  };
};

export default connect(mapStateToProps)(SiteLayout);
