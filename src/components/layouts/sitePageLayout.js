import React from "react"
import Footer from "../footer"
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import logo from "../../img/logo.png"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { SDRouteLink } from "../defaultLink"
import Container from "react-bootstrap/Container"

const NavBarCol = styled(Col)`
  padding: 0;
`

const NavImgContainer = styled.div`
  width: 150px;
`

const NavContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 80%;
  }
`

export default ({ children }) => (
  <Container fluid className="h-100 bg-light">
    <Row>
      <NavBarCol xs="12">
        <Navbar
          bg="primary"
          variant="dark"
          className="px-4 py-3 align-items-center"
        >
          <NavContentWrapper>
            <Navbar.Brand>
              <NavImgContainer>
                <SDRouteLink to="/">
                  <Image src={logo} fluid />
                </SDRouteLink>
              </NavImgContainer>
            </Navbar.Brand>
            <Button
              as={Link}
              className="ml-auto"
              to="/login"
              variant="outline-light"
            >
              Log in
            </Button>
          </NavContentWrapper>
        </Navbar>
      </NavBarCol>
      <Col xs="12" className="py-4 bg-light">
        {children}
      </Col>
      <Col>
        <Footer />
      </Col>
    </Row>
  </Container>
)
