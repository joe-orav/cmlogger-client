import React from "react"
import Form from "react-bootstrap/Form"

export default ({ value, disabled, onChange, required }) => (
  <Form.Group className="col-5" controlId="state">
    <Form.Label>State/Province</Form.Label>
    <Form.Control
      type="text"
      value={value}
      disabled={disabled}
      onChange={onChange}
      required={required} 
    />
    <Form.Control.Feedback type="invalid">
      Please enter a state/province
    </Form.Control.Feedback>
  </Form.Group>
)
