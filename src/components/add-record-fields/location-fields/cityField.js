import React from "react"
import Form from "react-bootstrap/Form"

export default ({ value, disabled, onChange, required }) => (
  <Form.Group className="col-4" controlId="city">
    <Form.Label>City/Town</Form.Label>
    <Form.Control
      type="text"
      value={value}
      disabled={disabled}
      onChange={onChange}
      required={required}
    />
    <Form.Control.Feedback type="invalid">
      Please enter the city
    </Form.Control.Feedback>
  </Form.Group>
)
