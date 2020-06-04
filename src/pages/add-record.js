import React from "react";
import FormPage from "../components/formPage";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCars,
  getLocations,
  getServices,
  getUserId,
} from "../store/selectors";

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

function AddRecord() {
  return (
    <FormPage
      title="Add Service Record"
      backTo="/service-history"
      contentWidth="500"
    >
      <AddRecordForm>
        <Form.Row>
          <Form.Group className="col-6" controlId="serviceDate">
            <Form.Label>Date of Service</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="col-6" controlId="servicedCar">
            <Form.Label>Car Serviced</Form.Label>
            <Form.Control as="select">
              <option>2019 Nissan Altima</option>
              <option>2004 Ford Taurus</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="col-12" controlId="savedLocations">
            <Form.Label>Saved Locations</Form.Label>
            <Form.Control as="select">
              <option>--- Enter a new location ---</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="col-12" controlId="location">
            <Form.Label>Location Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="col-12" controlId="fullAddress">
            <Form.Row>
              <Form.Group className="col-12" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="col-5" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="col-3" controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>AA</option>
                  <option>AB</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="col-4" controlId="state">
                <Form.Label>ZIP Code</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form.Row>
          </Form.Group>
          <Form.Group className="col-12" controlId="services">
            <Form.Label>Services</Form.Label>
            <InputGroup>
                <Form.Control type="text" />
                <InputGroup.Append>
                </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Group className="col-12" controlId="cost">
            <Form.Label>Total Cost of Service</Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="0.00" />
            </InputGroup>
          </Form.Group>
          <Form.Group className="col-12" controlId="notes">
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
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
    carsList: getCars(state),
    locationsList: getLocations(state),
    servicesList: getServices(state),
    user_id_from_state: getUserId(state),
  };
};

export default connect(mapStateToProps)(AddRecord);
