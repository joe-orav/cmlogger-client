import React from "react";
import Form from "react-bootstrap/Form";

export default ({ value, setValue }) => {
  return (
    <Form.Group className="col-12" controlId="addlServices">
      <Form.Label>Additional Services</Form.Label>
      <Form.Control
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Form.Text muted>
        Additional services must be separated by commas
      </Form.Text>
    </Form.Group>
  );
};
