import React from "react";
import Form from "react-bootstrap/Form";

const carTypes = {
  sedan: "Sedan",
  minivan: "Minivan",
  suv: "SUV",
  truck: "Truck",
  van: "Van",
};

export default ({ value, setValue }) => {
  return (
    <Form.Group controlId="carType">
      <Form.Label>Type</Form.Label>
      <Form.Control
        as="select"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      >
        {Object.keys(carTypes).map((k) => (
          <option key={k} value={k}>
            {carTypes[k]}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};
