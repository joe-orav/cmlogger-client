import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import imgImport from "../utils/imgImport";

let siteImages = imgImport(require.context("../img", false));

const CarCard = styled(Card)`
    height: 100%;
    max-width: 250px;

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

const CardLink = styled.a.attrs(() => ({
    href: "/#"
}))`
    color: #007bff;

    &:hover {
        color: #003e80;
    }
`;

const CarItem = ({car, editOnClick, addOnClick, deleteOnClick}) => {
    return (
        <Col className="mt-3">
            <CarCard>
                <Card.Img variant="top" src={siteImages[car.type]} alt={car.type} />
                <Card.Body className="bg-primary text-light">
                    <Card.Title className="h5">{car.fullname}</Card.Title>
                    <Card.Text>{`VIN: ${car.vin}`}</Card.Text>
                </Card.Body>
                <CarCardFooter>
                    <CardLink onClick={editOnClick}>Edit</CardLink>
                    <CardLink onClick={addOnClick}>Add Record</CardLink>
                    <CardLink onClick={deleteOnClick}>Delete</CardLink>
                </CarCardFooter>
            </CarCard>
        </Col>
    )
}

export default CarItem