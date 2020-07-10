import React from "react";
import Form from "react-bootstrap/Form";

export default ({ value, setValue }) => {
  return (
    <Form.Group controlId="carMake">
      <Form.Label>Make</Form.Label>
      <Form.Control
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <Form.Control.Feedback type="invalid">
        Please enter the make of your car
      </Form.Control.Feedback>
    </Form.Group>
  );
};
