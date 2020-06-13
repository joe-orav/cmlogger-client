import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import FormPage from "../components/formPage";
import queryString from "query-string";
import { getCars, getCarsDataLoading } from "../store/selectors";
import { connect } from "react-redux";

const YEAR_MAX = new Date().getFullYear(),
  YEAR_MIN = YEAR_MAX - 85;
const yearRange = Array.from(
  { length: YEAR_MAX - YEAR_MIN + 1 },
  (v, i) => YEAR_MAX - i
);
const carTypes = {
  sedan: "Sedan",
  minivan: "Minivan",
  suv: "SUV",
  truck: "Truck",
  van: "Van",
};

const AddCarForm = styled(Form)`
  max-width: 90%;
  margin: auto;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: flex-end;
`;

const FormButton = styled(Button)`
  margin-left: 20px;
`;

function AddCar({ cars, carsDataLoading }) {
  let urlQuery = queryString.parse(useLocation().search);
  let queryID = 0;
  let defaultValues = {};

  if (!carsDataLoading) {
    queryID = /^\d+$/.test(urlQuery.id) ? parseInt(urlQuery.id, 10) : 0;

    if (queryID > 0) {
      let carData = cars.filter((car) => car.id === queryID);
      if (carData.length > 0) {
        let { car_year, make, model, vin, fullname } = carData[0];
        defaultValues = {
          year: car_year,
          make: make,
          model: model,
          vin: vin,
          name: fullname,
        };
      } else {
        queryID = 0;
      }
    }
  }

  return (
    <FormPage
      title={
        defaultValues.name ? `Edit Car: ${defaultValues.name}` : "Add New Car"
      }
      backTo="/cars"
    >
      <AddCarForm>
        <Form.Group controlId="carType">
          <Form.Label>Type</Form.Label>
          <Form.Control as="select">
            {Object.keys(carTypes).map((k) => (
              <option key={k}>{carTypes[k]}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="carYear">
          <Form.Label>Year</Form.Label>
          <Form.Control as="select" defaultValue={defaultValues.year}>
            {yearRange.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="carMake">
          <Form.Label>Make</Form.Label>
          <Form.Control type="text" defaultValue={defaultValues.make} />
        </Form.Group>
        <Form.Group controlId="carModel">
          <Form.Label>Model</Form.Label>
          <Form.Control type="text" defaultValue={defaultValues.model} />
        </Form.Group>
        <Form.Group controlId="carVIN">
          <Form.Label>VIN #</Form.Label>
          <Form.Control type="text" defaultValue={defaultValues.vin} />
        </Form.Group>
        <ButtonContainer>
          <FormButton type="submit">Save</FormButton>
          <FormButton forwardedAs={Link} to="/cars" variant="danger">
            Cancel
          </FormButton>
        </ButtonContainer>
      </AddCarForm>
    </FormPage>
  );
}

const mapStateToProps = (state) => {
  return {
    cars: getCars(state),
    carsDataLoading: getCarsDataLoading(state),
  };
};

export default connect(mapStateToProps)(AddCar);
