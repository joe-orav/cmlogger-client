import React from "react";
import Form from "react-bootstrap/Form";
import { getCars } from "../../store/selectors";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    carsList: getCars(state),
  };
};

export default connect(mapStateToProps)(({ carsList, value, setValue }) => {
  return (
    <Form.Group className="col-6" controlId="servicedCar">
      <Form.Label>Car Serviced</Form.Label>
      <Form.Control as="select" value={value} onChange={(e) => setValue(e.target.value)}>
        <option value={0}></option>
        {carsList.map((car) => (
          <option key={car.id} value={car.id}>
            {car.fullname}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
});
