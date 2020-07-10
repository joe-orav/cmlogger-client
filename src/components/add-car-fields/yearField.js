import React from "react";
import Form from "react-bootstrap/Form";

const YEAR_MAX = new Date().getFullYear(),
  YEAR_MIN = YEAR_MAX - 85;
const yearRange = Array.from(
  { length: YEAR_MAX - YEAR_MIN + 1 },
  (v, i) => YEAR_MAX - i
);

export default ({ value, setValue }) => {
  return (
    <Form.Group controlId="carYear">
      <Form.Label>Year</Form.Label>
      <Form.Control
        as="select"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      >
        {yearRange.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};
