import React from "react"
import Form from "react-bootstrap/Form"

export default ({ value, disabled, onChange, required }) => (
  <Form.Group className="col-12" controlId="address">
    <Form.Label>Address</Form.Label>
    <Form.Control
      type="text"
      value={value}
      disabled={disabled}
      onChange={onChange}
      required={required}
    />
    <Form.Control.Feedback type="invalid">
      Please enter the address
    </Form.Control.Feedback>
  </Form.Group>
)
