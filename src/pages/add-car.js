import React, { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useHistory } from "react-router-dom";
import ProfileFormPageWrapper from "../components/layouts/profileFormPageWrapper";
import queryString from "query-string";
import {
  getDemoModeState,
  getCars,
  getCarsDataLoading,
  getUserId,
} from "../store/selectors";
import { modifyCarData } from "../store/actions/car-actions";
import { useSelector, useDispatch } from "react-redux";
import TypeField from "../components/add-car-fields/typeField";
import YearField from "../components/add-car-fields/yearField";
import MakeField from "../components/add-car-fields/makeField";
import ModelField from "../components/add-car-fields/modelField";
import VinField from "../components/add-car-fields/vinField";

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

export function validateQuery(id, cars) {
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
  const [yearVal, setYearVal] = useState(
    formValues.year || new Date().getFullYear()
  );
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
    <ProfileFormPageWrapper
      title={dataID === -1 ? "Add Car" : `Edit Car: ${formValues.name}`}
    >
      <AddCarForm noValidate validated={validated} onSubmit={handleSubmission}>
        <TypeField value={typeVal} setValue={setTypeVal} />
        <YearField value={yearVal} setValue={setYearVal} />
        <MakeField value={makeVal} setValue={setMakeVal} />
        <ModelField value={modelVal} setValue={setModelVal} />
        <VinField value={vinVal} setValue={setVinVal} />
        <ButtonContainer>
          <FormButton type="submit">Save</FormButton>
          <FormButton forwardedAs={Link} to="/cars" variant="danger">
            Cancel
          </FormButton>
        </ButtonContainer>
      </AddCarForm>
    </ProfileFormPageWrapper>
  );
}

export default AddCar;
