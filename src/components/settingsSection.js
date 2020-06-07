import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const SectionItem = ({ label, description, children }) => {
  return (
    <Row className="mb-lg-4 mb-3">
      <Col lg="3">
        <p className="font-weight-bold">{label}</p>
      </Col>
      <Col xs>
        {children}
        {description && <p className="font-italic mt-1">{description}</p>}
      </Col>
    </Row>
  );
};

export const SettingsSection = ({ label, children }) => {
  return (
    <Col xs="12">
      <Row>
        <Col xs="12">
          <p className="h5">{label}</p>
          <hr className="mt-0" />
        </Col>
        <Col xs="12">{children}</Col>
      </Row>
    </Col>
  );
};
