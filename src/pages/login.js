import React, { useEffect } from "react";
import logo from "../img/logo.png";
import googleLogo from "../img/google-logo.svg";
import facebookLogo from "../img/facebook-logo.svg";
import demoPerson from "../img/demo-person.svg";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../store/selectors";
import setPageTitle from "../utils/pageTitle";
import styled, { css } from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import loginBg from "../img/login-bg.jpg";
import { Link } from "react-router-dom";
import { setDemoModeStateTo } from "../store/actions/demo-actions";

const PageRow = styled(Row)`
  height: 100%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$bg}) center no-repeat;
`;

const PageCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginCard = styled(Card)`
  text-align: center;
  max-width: 400px;
`;

const SubTitle = styled(Card.Title)`
  color: #fff;
  font-size: 1.3rem;

  @media (min-width: 576px) {
    font-size: 1.5rem;
  }
`;

const LoginBtn = styled.a.attrs(() => ({
  className: "my-3 py-2",
}))`
  position: relative;
  display: block;
  text-align: left;
  border-radius: 4px;
  font-size: 17px;
  opacity: 1;
  padding-left: 60px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: none;
  }

  ${(props) => {
    switch (props.service) {
      case "google":
        return css`
          background: #fff;
          color: #444;

          &:hover {
            background: rgba(255, 255, 255, 0.9);
            color: rgba(68, 68, 68, 0.9);
          }
        `;
      case "facebook":
        return css`
          background: #4267b2;
          color: #fff;

          &:hover {
            background: rgba(66, 103, 178, 0.9);
            color: rgba(255, 255, 255, 0.9);
          }
        `;
      case "demo":
        return css`
          background: #323232;

          &:hover {
            background: rgba(50,50,50, 0.9);
            color: rgba(255, 255, 255, 0.9);
          }
        `;
      default:
        return css``;
    }
  }}
`;

const LoginBtnLogoCtr = styled.span`
  position: absolute;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  left: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  width: 45px;
  padding: 0 10px;
`;

const InfoText = styled.p`
  color: #fff;
  margin-top: 10px;
  text-align: center;
`;

const InfoLink = styled.a`
  text-decoration: underline;
`; 

function Login({user, setDemoModeStateTo}) {
  useEffect(() => {
    setPageTitle("Login");
  });

  return user.id != null ? (
    <Redirect to="/dashboard" />
  ) : (
    <PageRow $bg={loginBg}>
      <PageCol>
        <LoginCard className="rounded" bg="primary">
          <Card.Img
            variant="top"
            className="p-3"
            src={logo}
            alt="CMLogger - The Car Maintenance Log"
          />
          <Card.Body className="py-0">
            <SubTitle className="pb-3">YOUR CAR MAINTENANCE LOG</SubTitle>
            <LoginBtn href="/auth/google" service="google">
              <LoginBtnLogoCtr>
                <Image src={googleLogo} fluid />
              </LoginBtnLogoCtr>
              Continue with Google
            </LoginBtn>
            <LoginBtn href="/auth/fb" service="facebook">
              <LoginBtnLogoCtr>
                <Image src={facebookLogo} fluid />
              </LoginBtnLogoCtr>
              Continue with Facebook
            </LoginBtn>
            <LoginBtn onClick={() => setDemoModeStateTo(true)} href="#/" service="demo">
              <LoginBtnLogoCtr>
                <Image src={demoPerson} fluid />
              </LoginBtnLogoCtr>
              Continue as Demo User
            </LoginBtn>
          </Card.Body>
        </LoginCard>
        <InfoText>
          <InfoLink as={Link} target="_blank" to="/privacy-policy">Privacy Policy</InfoLink> |
          Made by { " " } 
          <InfoLink target="_blank" href="http://josephoravbiere.com/">Joseph Oravbiere</InfoLink>
        </InfoText>
      </PageCol>
    </PageRow>
  );
}

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  };
};

const mapDispatchToProps = { setDemoModeStateTo };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
