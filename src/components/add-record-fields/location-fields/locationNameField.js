import React from "react"
import Form from "react-bootstrap/Form"

export default ({ value, disabled, onChange, required }) => (
  <Form.Group className="col-12" controlId="location">
    <Form.Label>Location Name</Form.Label>
    <Form.Control
      type="text"
      value={value}
      disabled={disabled}
      onChange={onChange}
      required={required}
    />
    <Form.Control.Feedback type="invalid">
      Please enter the location name
    </Form.Control.Feedback>
  </Form.Group>
)
