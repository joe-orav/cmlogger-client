import React, { useState } from "react";
import FormPage from "../components/formPage";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getExpandedServiceHistory,
  getServiceHistoryDataLoading,
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

function validateQuery(id, serviceHistory) {
  let queryID = /^\d+$/.test(id) ? parseInt(id, 10) : 0;

  if (queryID > 0) {
    let recordItem = serviceHistory.filter((record) => record.id === queryID);
    if (recordItem.length > 0) {
      let { car, cost, parsedDate, location, notes, services } = recordItem[0];
      return {
        id: queryID,
        carID: car.id,
        cost: cost,
        date: parsedDate,
        savedLocID: location.id,
        locName: location.name,
        address: location.address,
        city: location.city,
        state: location.state,
        zip: location.zip_code,
        notes: notes,
        services: services.map((service) => service.id),
      };
    }
  }

  return { id: 0 };
}

function AddRecord({ serviceHistory, serviceHistoryLoading }) {
  let urlQuery = queryString.parse(useLocation().search);
  let formValues = { id: 0 };

  if (!serviceHistoryLoading) {
    formValues = validateQuery(urlQuery.id, serviceHistory);
  }

  const [dataID] = useState(formValues.id);
  const [dateValue, setDateValue] = useState(formValues.date || new Date());
  const [carServicedValue, setCarServicedValue] = useState(formValues.carID || 0);
  const [savedLocValue, setSavedLocValue] = useState(formValues.savedLocID || 0);
  const [locName, setLocName] = useState(formValues.locName || "");
  const [locAddress, setLocAddress] = useState(formValues.address || "");
  const [locCity, setLocCity] = useState(formValues.city || "");
  const [locState, setLocState] = useState(formValues.state || "");
  const [locZIP, setLocZIP] = useState(formValues.zip || "");
  const [servicesValues, setServicesValues] = useState(formValues.services || []);
  const [addlServices, setAddlServices] = useState("");
  const [totalCost, setTotalCost] = useState(formValues.cost || "");
  const [notesValue, setNotesValues] = useState(formValues.notes || "");

  function handleSubmission(e) {
    e.preventDefault();
  }

  return (
    <FormPage
      title={`${dataID ? 'Edit' : 'Add'} Service Record`}
      backTo="/service-history"
      contentWidth="500"
    >
      <AddRecordForm id="add-record-form" onSubmit={handleSubmission}>
        <Form.Row>
          <DateField value={dateValue} setValue={setDateValue} />
          <CarServicedField
            value={carServicedValue}
            setValue={setCarServicedValue}
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
          <ServicesField value={servicesValues} setValue={setServicesValues} />
          <AddlServicesField value={addlServices} setValue={setAddlServices} />
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
    serviceHistoryLoading: getServiceHistoryDataLoading(state),
  };
};

export default connect(mapStateToProps)(AddRecord);
