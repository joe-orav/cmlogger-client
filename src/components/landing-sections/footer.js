import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SDRouteLink, SDLink } from "../../components/defaultLink";

const Divider = styled.div`
  border-bottom: 1px solid #cfcfcf;
  margin: 0 auto;
  width: 80%;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: 20px auto;
    padding: 0 30px;
  }
`;

const PolicyLink = styled(SDRouteLink)`
  margin-bottom: 20px;
`;

export default () => {
  return (
    <Row className="bg-light">
      <Col xs="12">
        <Divider />
      </Col>
      <Col>
        <FooterContent>
          <PolicyLink to="/privacy-policy" target="_blank">
            Privacy Policy
          </PolicyLink>
          <p>
            Made by{" "}
            <SDLink href="http://josephoravbiere.com/" target="_blank">
              Joseph Oravbiere
            </SDLink>
          </p>
        </FooterContent>
      </Col>
    </Row>
  );
};
