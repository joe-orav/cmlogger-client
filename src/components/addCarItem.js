import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import plusSymbol from "../img/plus.svg";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px dashed #b5b5b5;
  width: 100%;
  height: 100%;
  max-width: 250px;

  @media (max-width: 767.98px) {
    max-width: none;
  }
`;

const ImageContainer = styled.div`
    margin-bottom: 20px;

    @media (min-width: 768px) {
        width: 20%;
    }

    @media (max-width: 767.98px) {
        width: 15%;
    }
`;

const AddCarItem = () => {
  return (
    <Col className="mt-3">
      <Content>
        <p className="h3 text-primary mt-3">Add New Car</p>
        <ImageContainer>
            <Image src={plusSymbol} fluid alt="Add New Car" />
        </ImageContainer>
      </Content>
    </Col>
  );
};

export default AddCarItem;
