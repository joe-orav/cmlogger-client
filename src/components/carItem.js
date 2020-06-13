import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import imgImport from "../utils/imgImport";
import { SDRouteLink } from "./defaultLink";

let siteImages = imgImport(require.context("../img", false));

const CarCard = styled(Card)`
  height: 100%;
  max-width: ${(props) =>
    props.$cardWidth === "full" ? "100%" : `${props.$cardWidth}px`};

  @media (max-width: 767.98px) {
    max-width: none;
    width: 100%;
  }
`;

const CarCardFooter = styled(Card.Footer)`
  background-color: #fff;
  display: flex;
  justify-content: space-around;
`;

const CardVIN = styled(Card.Text)`
  font-size: 0.88rem;
`;

const CarItem = ({ car, hideControls, cardWidth = "250" }) => {
  return (
    <Col className="mt-3">
      <CarCard $cardWidth={cardWidth}>
        <Card.Img variant="top" src={siteImages[car.type]} alt={car.type} />
        <Card.Body className="bg-primary text-light">
          <Card.Title className="h5">{car.fullname}</Card.Title>
          <CardVIN>{`VIN: ${car.vin}`}</CardVIN>
        </Card.Body>
        {!hideControls && (
          <CarCardFooter>
            <SDRouteLink to={`/add-car?id=${car.id}`}>Edit</SDRouteLink>
            <SDRouteLink to="/add-record">Add Record</SDRouteLink>
            <SDRouteLink to="/">Delete</SDRouteLink>
          </CarCardFooter>
        )}
      </CarCard>
    </Col>
  );
};

export default CarItem;
