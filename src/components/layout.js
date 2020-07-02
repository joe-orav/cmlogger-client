import React, { useEffect } from "react";
import logo from "../img/logo.png";
import toggleIcon from "../img/collapsed-nav.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../store/selectors";
import styled from "styled-components";
import ProfileNav from "./profileNav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const SiteContent = styled.div`
  align-self: stretch;
  padding-top: 75px;

  @media (min-width: 768px) {
    padding-left: 175px;
    padding-top: 0;
  }
`;

const SiteNavBar = styled(Navbar)`
  position: fixed;
  width: 100%;
  z-index: 1;

  @media (min-width: 768px) {
    flex-direction: column;
    width: 175px;
    height: 100%;
  }
`;

const NavbarToggleButton = styled(Navbar.Toggle)`
  padding: 0.25rem 2px;
`;

const ToggleIcon = styled.span`
  background-image: url(${(props) => props.icon});
`;

const SiteBrand = styled(Link)`
  width: 140px;
  padding-left: 5px;

  @media (min-width: 768px) {
    padding-top: 15px;
    margin-right: 0;
  }
`;

const SiteNav = styled(Nav)`
  align-self: start;

  @media (min-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const SiteNavLink = styled(Link).attrs(() => ({
  className: "nav-item nav-link",
}))`
  color: #fff;

  @media (min-width: 768px) {
    padding-left: 0.3rem !important;
    padding-right: 0.3rem !important;
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
            <SiteNavLink to="/dashboard">
              <i className="fas fa-home"></i> Dashboard
            </SiteNavLink>
            <SiteNavLink to="/cars">
              <i className="fas fa-car"></i> My Cars
            </SiteNavLink>
            <SiteNavLink to="/service-history">
              <i className="fas fa-wrench"></i> Service History
            </SiteNavLink>
          </SiteNav>
        </SiteNavBar.Collapse>
        <ProfileNav.NavExpanded name={user.name} icon={user.default_pic} />
      </SiteNavBar>
      <SiteContent className="flex-fill bg-light">
        <Container fluid>{children}</Container>
      </SiteContent>
    </LayoutWrapper>
  ) : (
    <Container fluid className="h-100 bg-light">
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
