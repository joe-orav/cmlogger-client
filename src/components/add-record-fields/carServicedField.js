import React from "react";
import Form from "react-bootstrap/Form";
import { getCars } from "../../store/selectors";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    carsList: getCars(state),
  };
};

export default connect(mapStateToProps)(
  ({ carsList, value, setValue, disabled }) => {
    return (
      <Form.Group className="col-6" controlId="servicedCar">
        <Form.Label>Car Serviced</Form.Label>
        <Form.Control
          as="select"
          value={value}
          disabled={disabled}
          onChange={(e) => setValue(e.target.value)}
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
  }
);
