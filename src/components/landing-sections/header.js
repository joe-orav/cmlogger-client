import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import logo from "../../img/logo.png";
import landingImg from "../../img/landing-img.jpg";
import appMockup from "../../img/app-mockup.png";
import { Link } from "react-router-dom";

const HeroRow = styled(Row)`
  background: no-repeat
      linear-gradient(rgba(104, 104, 104, 0.8), rgba(0, 0, 0, 0.8)),
    url(${landingImg}) center / cover;
  justify-content: center;
`;

const HeroCol = styled(Col)`
  display: flex;
  flex-direction: column;
  padding: 0 1.3rem;

  @media (min-width: 768px) {
    padding: 0 4rem;
  }
`;

const NavHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 0 20px;
  align-items: center;
`;

const Summary = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0 40px;

  @media (min-width: 992px) {
    flex-direction: row;
    padding-top: 20px;
  }
`;

const HeaderImgContainer = styled.div`
  width: 150px;

  @media (min-width: 992px) {
    width: 200px;
  }
`;

const DashPageContainer = styled.div`
  max-width: 600px;
`;

const TextContent = styled.div`
  color: #fff;
  margin-right: 0px;
  text-align: center;
  margin-bottom: 30px;
  max-width: 600px;

  @media (min-width: 992px) {
    margin-right: 30px;
    text-align: left;
  }
`;

const TextContentHeader = styled.h1`
  font-size: 2rem;

  @media (min-width: 576px) {
    font-size: 2.5rem;
  }
`;

const TextContentSubText = styled.p`
  @media (min-width: 576px) {
    font-size: 1.3rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const HeroBtn = styled(Button)`
  margin: 0 10px;

  @media (min-width: 576px) {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }

  @media (min-width: 992px) {
    margin: 0;
    margin-right: 20px;
  }
`;

export default () => {
  return (
    <HeroRow>
      <HeroCol xl="auto">
        <NavHeader>
          <HeaderImgContainer>
            <Image src={logo} fluid />
          </HeaderImgContainer>
          <Button as={Link} to="/login" variant="outline-light">
            Log in
          </Button>
        </NavHeader>
        <Summary>
          <TextContent>
            <TextContentHeader>
              Track everything your car has been through
            </TextContentHeader>
            <TextContentSubText>
              Oil changes, tire replacements, car washes, CMLogger helps you to
              maintain a record of all the services provided for your car and
              more.
            </TextContentSubText>
            <ButtonContainer>
              <HeroBtn forwardedAs="a" variant="light" href="/login">
                Try it now
              </HeroBtn>
              <HeroBtn forwardedAs="a" href="#features" variant="outline-light">
                Features
              </HeroBtn>
            </ButtonContainer>
          </TextContent>
          <DashPageContainer>
            <Image src={appMockup} fluid />
          </DashPageContainer>
        </Summary>
      </HeroCol>
    </HeroRow>
  );
};
