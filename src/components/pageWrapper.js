import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default ({ pageTitle, children, spacing }) => {
  return (
    <Row className="pt-2 pt-md-4 pb-4">
      <Col xs="12" className={spacing ? `pb-${spacing}`: ''}>
        <h3>{pageTitle}</h3>
      </Col>
      {children}
    </Row>
  );
};
