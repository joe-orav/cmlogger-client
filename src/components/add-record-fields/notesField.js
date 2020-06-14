import React from "react";
import Form from "react-bootstrap/Form";

export default ({ value, setValue }) => {
  return (
    <Form.Group className="col-12" controlId="notes">
      <Form.Label>Notes</Form.Label>
      <Form.Control
        as="textarea"
        rows="3"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Form.Group>
  );
};
