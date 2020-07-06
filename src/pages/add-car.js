import React, { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import FormPage from "../components/formPage";
import queryString from "query-string";
import {
  getDemoModeState,
  getCars,
  getCarsDataLoading,
  getUserId,
} from "../store/selectors";
import { modifyCarData } from "../store/actions/car-actions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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

function validateQuery(id, cars) {
  let queryID = /^\d+$/.test(id) ? parseInt(id, 10) : 0;

  if (queryID > 0) {
    let carData = cars.filter((car) => car.id === queryID);
    if (carData.length > 0) {
      let { type, car_year, make, model, vin, fullname } = carData[0];
      return {
        id: queryID,
        type: type,
        year: car_year,
        make: make,
        model: model,
        vin: vin,
        name: fullname,
      };
    }
  }

  return { id: -1 };
}

function AddCar() {
  const demoModeEnabled = useSelector(getDemoModeState);
  const cars = useSelector(getCars);
  const carsDataLoading = useSelector(getCarsDataLoading);
  const userId = useSelector(getUserId);
  const dispatch = useDispatch();

  let urlQuery = queryString.parse(useLocation().search);
  let history = useHistory();
  let formValues = { id: -1 };

  if (!carsDataLoading) {
    formValues = validateQuery(urlQuery.id, cars);
  }

  const [dataID] = useState(formValues.id);
  const [typeVal, setTypeVal] = useState(formValues.type || "sedan");
  const [yearVal, setYearVal] = useState(formValues.year || yearRange[0]);
  const [makeVal, setMakeVal] = useState(formValues.make || "");
  const [modelVal, setModelVal] = useState(formValues.model || "");
  const [vinVal, setVinVal] = useState(formValues.vin || "");
  const [validated, setValidated] = useState(false);

  function handleSubmission(ev) {
    ev.preventDefault();
    const form = ev.target;

    if (form.checkValidity()) {
      let formData = {
        user_id: userId,
        id: dataID,
        type: typeVal,
        car_year: yearVal,
        make: makeVal,
        model: modelVal,
        vin: vinVal,
      };
      let request = dataID === -1 ? "post" : "put";
      dispatch(modifyCarData(formData, request, demoModeEnabled));
      history.goBack();
    }

    setValidated(true);
  }

  return (
    <FormPage title={dataID === -1 ? "Add Car" : `Edit Car: ${formValues.name}`}>
      <AddCarForm noValidate validated={validated} onSubmit={handleSubmission}>
        <Form.Group controlId="carType">
          <Form.Label>Type</Form.Label>
          <Form.Control
            as="select"
            value={typeVal}
            onChange={(e) => setTypeVal(e.target.value)}
            required
          >
            {Object.keys(carTypes).map((k) => (
              <option key={k} value={k}>
                {carTypes[k]}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="carYear">
          <Form.Label>Year</Form.Label>
          <Form.Control
            as="select"
            value={yearVal}
            onChange={(e) => setYearVal(e.target.value)}
            required
          >
            {yearRange.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="carMake">
          <Form.Label>Make</Form.Label>
          <Form.Control
            type="text"
            value={makeVal}
            onChange={(e) => setMakeVal(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter the make of your car
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="carModel">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="text"
            value={modelVal}
            onChange={(e) => setModelVal(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter the model of your car
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="carVIN">
          <Form.Label>VIN #</Form.Label>
          <Form.Control
            type="text"
            value={vinVal}
            onChange={(e) => setVinVal(e.target.value)}
          />
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

export default AddCar;