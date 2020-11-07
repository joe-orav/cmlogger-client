import React from "react"
import Form from "react-bootstrap/Form"

export default ({ value, onChange, list }) => (
  <Form.Group className="col-12" controlId="savedLocations">
    <Form.Label>Saved Locations</Form.Label>
    <Form.Control as="select" value={value} onChange={onChange}>
      <option value={-1}>--- Don't include location ---</option>
      <option value={0}>--- Enter a new location ---</option>
      {list.map((loc) => (
        <option key={loc.id} value={loc.id}>
          {loc.name}
        </option>
      ))}
    </Form.Control>
  </Form.Group>
)
