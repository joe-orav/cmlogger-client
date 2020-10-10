import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import setPageTitle from "../../utils/pageTitle";

export default ({ pageTitle, children, spacing }) => {
  useEffect(() => {
    setPageTitle(pageTitle);
  });

  return (
    <Row className="pt-2 pt-md-4 pb-4 bg-light">
      <Col xs="12" className={spacing ? `pb-${spacing}`: ''}>
        <h3>{pageTitle}</h3>
      </Col>
      {children}
    </Row>
  );
};
