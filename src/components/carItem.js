import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { SDRouteLink, SDLink } from "./defaultLink";
import { useSelector, useDispatch } from "react-redux";
import { modifyCarData } from "../store/actions/car-actions";
import DeleteOverlay from "./deleteItem";
import { getDemoModeState } from "../store/selectors";
import CarIcon from "../utils/carIcons";

const CarCard = styled(Card)`
  position: relative;
  height: 100%;
  max-width: 100%;

  @media (min-width: 576px) {
    max-width: 250px;
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

const CarItem = ({ car }) => {
  const demoModeEnabled = useSelector(getDemoModeState);
  const dispatch = useDispatch();

  const modifyCarCataDispatch = useCallback(() => {
    dispatch(modifyCarData({ id: car.id }, "delete", demoModeEnabled));
  }, [dispatch, demoModeEnabled, car]);

  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);
  return (
    <Col className="mt-3">
      <CarCard>
        <Card.Img variant="top" src={CarIcon[car.type]} alt={car.type} />
        <Card.Body className="bg-primary text-light">
          <Card.Title className="h5">{car.fullname}</Card.Title>
          <CardVIN>{`VIN: ${car.vin ? car.vin : "Not Provided"}`}</CardVIN>
        </Card.Body>
        <CarCardFooter>
          <SDRouteLink to={`/add-car?id=${car.id}`}>Edit</SDRouteLink>
          <SDRouteLink to={`/add-record?carid=${car.id}`}>
            Add Record
          </SDRouteLink>
          <SDLink href="#/" onClick={() => setShowDeleteOverlay(true)}>
            Delete
          </SDLink>
        </CarCardFooter>
        <DeleteOverlay
          show={showDeleteOverlay}
          setShow={setShowDeleteOverlay}
          text={"Are you sure you want to delete this car?"}
          action={() => modifyCarCataDispatch()}
        />
      </CarCard>
    </Col>
  );
};

export default CarItem;
