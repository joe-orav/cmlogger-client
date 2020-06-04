import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default ({ pageTitle, children }) => {
  return (
    <Row className="pt-2 pt-md-4 pb-4">
      <Col xs="12">
        <h3>{pageTitle}</h3>
      </Col>
      {children}
    </Row>
  );
};
