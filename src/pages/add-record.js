import React, { useState } from "react";
import FormPage from "../components/formPage";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getExpandedServiceHistory,
  getUserId,
  getDataLoaded,
} from "../store/selectors";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import DateField from "../components/add-record-fields/dateField";
import CarServicedField from "../components/add-record-fields/carServicedField";
import LocationFieldsGroup from "../components/add-record-fields/locationFieldsGroup";
import ServicesField from "../components/add-record-fields/servicesField";
import TotalCostField from "../components/add-record-fields/costField";
import AddlServicesField from "../components/add-record-fields/addlServicesField";
import NotesField from "../components/add-record-fields/notesField";
import { modifyServiceHistory } from "../store/actions/service-history-actions";
import { useHistory } from "react-router-dom";

const AddRecordForm = styled(Form)`
  max-width: 90%;
  margin: auto;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: flex-end;
`;

const FormButton = styled(Button)`
  margin-left: 20px;
`;

function validateQuery(query, serviceHistory) {
  let queryID = /^\d+$/.test(query.id) ? parseInt(query.id, 10) : 0;
  let carID = /^\d+$/.test(query.carid) ? parseInt(query.carid, 10) : 0;

  if (queryID > 0) {
    let recordItem = serviceHistory.filter((record) => record.id === queryID);
    if (recordItem.length > 0) {
      let { car, cost, parsedDate, location, notes, services } = recordItem[0];

      let locationData =
        location === null
          ? { savedLocID: -1 }
          : {
              savedLocID: location.id,
              locName: location.name,
              address: location.address,
              city: location.city,
              state: location.state,
              zip: location.zip_code,
            };

      return Object.assign(locationData, {
        id: queryID,
        carID: car.id,
        cost: cost,
        date: `${parsedDate.getFullYear()}-${
          parsedDate.getMonth() + 1
        }-${parsedDate.getDate()}`,
        notes: notes,
        services: services.map((service) => service.id),
      });
    }
  }

  return { id: 0, carID: carID, carFieldDisabled: carID > 0 };
}

function AddRecord({
  serviceHistory,
  userId,
  dataLoaded,
  modifyServiceHistory,
}) {
  let urlQuery = queryString.parse(useLocation().search);
  let history = useHistory();
  let currentDate = new Date();
  let formValues = {};

  if (dataLoaded) {
    formValues = validateQuery(urlQuery, serviceHistory);
  }

  const [dataId] = useState(formValues.id || 0);
  const [dateValue, setDateValue] = useState(
    formValues.date ||
      `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`
  );
  const [carServicedValue, setCarServicedValue] = useState(
    formValues.carID || 0
  );
  const [carFieldDisabled] = useState(formValues.carFieldDisabled || false);
  const [savedLocValue, setSavedLocValue] = useState(
    formValues.savedLocID || -1
  );
  const [locName, setLocName] = useState(formValues.locName || "");
  const [locAddress, setLocAddress] = useState(formValues.address || "");
  const [locCity, setLocCity] = useState(formValues.city || "");
  const [locState, setLocState] = useState(formValues.state || "");
  const [locZIP, setLocZIP] = useState(formValues.zip || "");
  const [servicesValues, setServicesValues] = useState(
    formValues.services || []
  );
  const [addlServices, setAddlServices] = useState("");
  const [totalCost, setTotalCost] = useState(formValues.cost || "");
  const [notesValue, setNotesValues] = useState(formValues.notes || "");
  const [validated, setValidated] = useState(false);

  function handleSubmission(ev) {
    ev.preventDefault();
    const form = ev.target;

    if (form.checkValidity()) {
      let formData = {
        id: dataId,
        user_id: userId,
        date: dateValue,
        car_id: carServicedValue,
        location_id: savedLocValue,
        location_name: locName,
        address: locAddress,
        city: locCity,
        state: locState,
        zip_code: locZIP,
        new_services: addlServices.length > 0 ? addlServices.split(",") : [],
        services: servicesValues,
        cost: totalCost.length === 0 ? "0.00" : totalCost,
        notes: notesValue,
      };

      let request = dataId === 0 ? "post" : "put";
      modifyServiceHistory(formData, request);
      history.goBack();
    }

    setValidated(true);
  }

  return (
    <FormPage
      title={`${dataId ? "Edit" : "Add"} Service Record`}
      contentWidth="500"
    >
      <AddRecordForm
        id="add-record-form"
        noValidate
        validated={validated}
        onSubmit={handleSubmission}
      >
        <Form.Row>
          <DateField value={dateValue} setValue={setDateValue} />
          <CarServicedField
            value={carServicedValue}
            setValue={setCarServicedValue}
            disabled={carFieldDisabled}
          />
          <LocationFieldsGroup
            values={{
              savedLocValue,
              locName,
              locAddress,
              locCity,
              locState,
              locZIP,
            }}
            setValues={{
              setSavedLocValue,
              setLocName,
              setLocAddress,
              setLocCity,
              setLocState,
              setLocZIP,
            }}
          />
          <ServicesField
            value={servicesValues}
            setValue={setServicesValues}
            required={addlServices.length === 0}
          />
          <AddlServicesField
            value={addlServices}
            setValue={setAddlServices}
            required={servicesValues.length === 0}
          />
          <TotalCostField value={totalCost} setValue={setTotalCost} />
          <NotesField value={notesValue} setValue={setNotesValues} />
        </Form.Row>
        <ButtonContainer>
          <FormButton type="submit">Save</FormButton>
          <FormButton forwardedAs={Link} to="/service-history" variant="danger">
            Cancel
          </FormButton>
        </ButtonContainer>
      </AddRecordForm>
    </FormPage>
  );
}

const mapStateToProps = (state) => {
  return {
    serviceHistory: getExpandedServiceHistory(state),
    userId: getUserId(state),
    dataLoaded: getDataLoaded(state),
  };
};

const mapDispatchToProps = { modifyServiceHistory };

export default connect(mapStateToProps, mapDispatchToProps)(AddRecord);
