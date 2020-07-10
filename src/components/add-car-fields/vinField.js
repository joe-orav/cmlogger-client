import React from "react";
import Form from "react-bootstrap/Form";

export default ({value, setValue}) => {
  return (
    <Form.Group controlId="carVIN">
      <Form.Label>VIN #</Form.Label>
      <Form.Control
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Form.Group>
  );
};
