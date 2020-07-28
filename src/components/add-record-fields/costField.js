import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default ({ value, setValue }) => {
  function handleInputValidation(e) {
    let newValue = e.target.value.trim();

    if (isNaN(newValue) || newValue < 0) {
      setValue(value);
    } else {
      setValue(newValue);
    }
  }

  return (
    <Form.Group className="col-12" controlId="cost">
      <Form.Label>Total Cost of Service(s)</Form.Label>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type="text"
          placeholder="0.00"
          value={value}
          onChange={handleInputValidation}
        />
      </InputGroup>
    </Form.Group>
  );
};
