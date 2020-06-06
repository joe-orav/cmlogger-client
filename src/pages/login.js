import React, { useEffect } from "react";
import logo from "../img/logo.png";
import googleLogo from "../img/google-logo.svg";
import facebookLogo from "../img/facebook-logo.svg";
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
  font-size: 1.5rem;

  @media (max-width: 575.98px) {
    font-size: 1.3rem;
  }
`;

const LoginBtn = styled.a.attrs((props) => ({
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
      default:
        return css``
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

const DemoInfoText = styled.p`
  color: #fff;
  margin-top: 10px;
`;

const DemoLink = styled.a`
  color: #3395ff;

  &:hover {
    color: #0062cc;
  }
`;

function Login(props) {
    
  useEffect(() => {
    setPageTitle("Login");
  });

  return props.user.id != null ? (
    <Redirect to="/overview" />
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
          </Card.Body>
        </LoginCard>
        <DemoInfoText>
          Don't want to sign in? Try the{" "}
          <DemoLink
            target="_blank"
            rel="noopener noreferrer"
            href="http://cmlogger-demo.now.sh/"
          >
            demo
          </DemoLink>
        </DemoInfoText>
      </PageCol>
    </PageRow>
  );
}

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  };
};

export default connect(mapStateToProps)(Login);
