import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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

const PageContent = styled.div`
  border: 1px solid #cfcfcf;
  max-width: 400px;
  padding: 20px 0;
  margin: auto;
`;

const FormHeader = styled.p`
  margin: auto;
  max-width: 90%;
  margin-bottom: 10px;
`;

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

const LinkContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
`;

const BackLink = styled(Link)`
  color: #007bff;
  font-size: 1.1rem;
  &:hover {
    color: #003e80;
  }
`;

function AddCar() {
  return (
    <Row>
      <Col xs="12" className="pt-4">
        <PageContent>
          <FormHeader className="h4">Add New Car</FormHeader>
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
              <Form.Control as="select">
                {yearRange.map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="carMake">
              <Form.Label>Make</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="carModel">
              <Form.Label>Model</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="carVIN">
              <Form.Label>VIN #</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <ButtonContainer>
              <FormButton type="submit">Save</FormButton>
              <FormButton forwardedAs={Link} to="/cars" variant="danger">Cancel</FormButton>
            </ButtonContainer>
          </AddCarForm>
        </PageContent>
        <LinkContainer>
          <BackLink to="/cars">
            <i className="fas fa-arrow-left"></i> Go back
          </BackLink>
        </LinkContainer>
      </Col>
    </Row>
  );
}

export default AddCar;
