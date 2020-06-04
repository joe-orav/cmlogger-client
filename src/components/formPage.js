import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const PageContent = styled.div`
  border: 1px solid #cfcfcf;
  max-width: ${(props) =>
    props.contentWidth ? props.contentWidth + "px" : "400px"};
  padding: 20px 0;
  margin: auto;
`;

const FormHeader = styled.p`
  margin: auto;
  max-width: 90%;
  margin-bottom: 10px;
`;

const LinkContainer = styled.div`
  margin: 20px auto;
  text-align: center;
`;

const BackLink = styled(Link)`
  color: #007bff;
  font-size: 1.1rem;
  &:hover {
    color: #003e80;
  }
`;

export default ({ title, children, backTo, contentWidth }) => {
  return (
    <Row className="bg-light">
      <Col xs="12" className="pt-4">
        <PageContent contentWidth={contentWidth}>
          <FormHeader className="h4">{title}</FormHeader>
          {children}
        </PageContent>
        <LinkContainer>
          <BackLink to={backTo}>
            <i className="fas fa-arrow-left"></i> Go back
          </BackLink>
        </LinkContainer>
      </Col>
    </Row>
  );
};
