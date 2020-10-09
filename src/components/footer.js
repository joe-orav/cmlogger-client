import React from "react"
import styled from "styled-components"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import logoIcon from "../img/logo-icon.png"
import Image from "react-bootstrap/Image"
import { SDRouteLink } from "./defaultLink"

const Divider = styled.div`
  border-bottom: 1px solid #cfcfcf;
  margin: 0 auto;
  width: 80%;
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    margin: 20px auto;
    padding: 0 30px;
  }
`

const FooterImgContainer = styled.div`
  width: 50px;
  margin-bottom: 20px;
`

const FooterLink = styled(SDRouteLink)`
  margin-bottom: 20px;
`

export default () => {
  return (
    <Row className="bg-light">
      <Col xs="12">
        <Divider />
      </Col>
      <Col>
        <FooterContent>
          <FooterImgContainer>
            <SDRouteLink to="/">
              <Image src={logoIcon} fluid />
            </SDRouteLink>
          </FooterImgContainer>
          <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink to="/terms">Terms of Services</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterContent>
      </Col>
    </Row>
  )
}
