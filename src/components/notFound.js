import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Content = styled.p`
  text-align: center;
  margin: 5px 0;
  color: rgba(0, 0, 0, 0.7);
`;

const Title = styled(Content)`
  font-weight: bold;
  text-transform: uppercase;
`;

const NotFound = ({ title, children, noDivider }) => {
  return (
    <Row>
      <Col>
        {noDivider || <hr />}
        <div className="py-2">
          <Title>{title}</Title>
          <Content>{children}</Content>
        </div>
      </Col>
    </Row>
  );
};

export default NotFound;
