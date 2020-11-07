import React from "react"
import Form from "react-bootstrap/Form"

export default ({ value, disabled, onChange }) => (
  <Form.Group className="col-12" controlId="other">
    <Form.Label>Other Address Information</Form.Label>
    <Form.Control
      type="text"
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  </Form.Group>
)
