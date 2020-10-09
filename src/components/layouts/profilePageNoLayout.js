import React from "react";
import Container from "react-bootstrap/Container";

export default ({ children }) => (
  <Container fluid className="h-100 bg-light">
    {children}
  </Container>
)
