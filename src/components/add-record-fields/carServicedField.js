import React from "react";
import Form from "react-bootstrap/Form";
import { getCars } from "../../store/selectors";
import { useSelector } from "react-redux";

export default ({ value, setValue, disabled }) => {
  const carsList = useSelector(getCars);

  return (
    <Form.Group className="col-6" controlId="servicedCar">
      <Form.Label>Car Serviced</Form.Label>
      <Form.Control
        as="select"
        value={value}
        disabled={disabled}
        onChange={(e) => setValue(parseInt(e.target.value))}
        required
      >
        <option></option>
        {carsList.map((car) => (
          <option key={car.id} value={car.id}>
            {car.fullname}
          </option>
        ))}
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        Please select a vehicle
      </Form.Control.Feedback>
    </Form.Group>
  );
};
