import React, { useEffect } from "react";
import openMapImg from "../img/open-map.png";
import setPageTitle from "../utils/pageTitle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { SDRouteLink } from "../components/defaultLink";

const ImageContainer = styled.div`
  margin: auto;
  width: 200px;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const HeaderText = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-bottom: 0;
`;

const SubText = styled.p`
  font-size: 1.5rem;
`;

function NotFoundPage() {
  useEffect(() => {
    setPageTitle("Page Not Found");
  });

  return (
    <Row className="h-100 align-items-center">
      <Col>
        <ImageContainer>
          <Image src={openMapImg} fluid />
        </ImageContainer>
        <TextContainer>
          <HeaderText>GPS Signal Lost</HeaderText>
          <SubText>
            You'll need to <SDRouteLink to="/">reroute</SDRouteLink>!
          </SubText>
        </TextContainer>
      </Col>
    </Row>
  );
}

export default NotFoundPage;
