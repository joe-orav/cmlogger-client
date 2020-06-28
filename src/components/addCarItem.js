import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import plusSymbol from "../img/plus.svg";
import { Link } from "react-router-dom";

const Content = styled(Link)`
  display: flex;
  border: 1px dashed #b5b5b5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;

  &:hover {
    text-decoration: none;
  }

  @media (min-width: 576px) {
    max-width: 250px;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 20px;
  width: 40px;
`;

const AddCarItem = () => {
  return (
    <Col className="mt-3">
      <Content to="/add-car">
        <p className="h3 text-primary mt-3">Add New Car</p>
        <ImageContainer>
          <Image src={plusSymbol} fluid alt="Add New Car" />
        </ImageContainer>
      </Content>
    </Col>
  );
};

export default AddCarItem;
