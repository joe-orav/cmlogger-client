import React from "react"
import ProfilePageWrapper from "../components/layouts/profilePageWrapper"
import Col from "react-bootstrap/Col"
import styled from "styled-components"
import Image from "react-bootstrap/Image"
import logoIcon from "../img/logo-icon.png"
import { SDLink, SDRouteLink } from "../components/defaultLink"

const AboutLink = styled(SDRouteLink)`
  display: block;
  margin: 10px 0;
`

const ImageContainer = styled.div`
  width: 80px;
  margin-top: 30px;
`

function About() {
  return (
    <ProfilePageWrapper pageTitle="About CMLogger" spacing="4">
      <Col>
        <p>
          CMLogger is developed and maintained by{" "}
          <SDLink href="https://josephoravbiere.com/">Joseph Oravbiere</SDLink>
        </p>
        <div>
          <AboutLink to="/contact">Report a Bug / Provide Feedback</AboutLink>
          <AboutLink to="/privacy-policy">View Privacy Policy</AboutLink>
          <AboutLink to="/terms">View Terms of Services</AboutLink>
        </div>
        <ImageContainer>
          <Image src={logoIcon} fluid />
        </ImageContainer>
      </Col>
    </ProfilePageWrapper>
  )
}

export default About
