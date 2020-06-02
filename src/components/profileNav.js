import React from "react";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const IconContainer = styled.div`
  display: block;
  border-radius: 50%;
  overflow: hidden;
  width: 35px;
  margin-bottom: 10px;

  @media (max-width: 767.98px) {
    margin-bottom: 0;
  }
`;

const ProfileLink = styled.a`
  display: inline-block;
  color: #d9d9d9;
  font-size: 1.3rem;
  margin: 0 10px;

  &:last-child {
    margin-bottom: 20px;
  }

  &:hover {
    color: #a6a6a6;
  }
`;

const DropdownToggle = styled(Dropdown.Toggle)`
  cursor: pointer;
  display: block;
  margin-right: 15px;
  &.dropdown-toggle::after {
      content: none;
  }
`;

const DropdownItem = styled(Dropdown.Item)`
    font-size: 0.85rem;
`; 

const NavExpanded = ({ name, icon }) => {
  return (
    <Nav className="flex-column d-none d-md-flex align-items-center">
      <IconContainer>
        <Image src={icon} title={name} fluid />
      </IconContainer>
      <div>
        <ProfileLink as={Link} to="/settings" title="Settings">
          <i className="fas fa-cog"></i>
        </ProfileLink>
        <ProfileLink href="/logout" title="Sign out">
          <i className="fas fa-sign-out-alt"></i>
        </ProfileLink>
      </div>
    </Nav>
  );
};

const NavCondensed = ({ name, icon }) => {
  return (
    <Dropdown className="d-md-none ml-auto">
      <DropdownToggle forwardedAs="a">
        <IconContainer><Image src={icon} title={name} fluid /></IconContainer>
      </DropdownToggle>
      <Dropdown.Menu alignRight>
        <Dropdown.Header as="h5">{name}</Dropdown.Header>
        <DropdownItem forwardedAs={Link} to="/settings">Settings</DropdownItem>
        <Dropdown.Divider />
        <DropdownItem href="/logout">Sign Out</DropdownItem>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default { NavExpanded, NavCondensed };
