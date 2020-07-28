import React from "react";
import Form from "react-bootstrap/Form";

export default ({ value, setValue, required }) => {
  return (
    <Form.Group className="col-12" controlId="addlServices">
      <Form.Label>Services (New)</Form.Label>
      <Form.Control
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      />
      <Form.Text muted>
        Newly entered services must be separated by commas
      </Form.Text>
    </Form.Group>
  );
};
