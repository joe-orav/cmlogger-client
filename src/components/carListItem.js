import React from "react";
import styled from "styled-components";
import imgImport from "../utils/imgImport";
import Image from "react-bootstrap/Image";

let siteImages = imgImport(require.context("../img", false));

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #686868;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  max-width: 150px;
  background-color: #efefef;
  display: flex;
  align-items: center;

  @media (max-width: 450px) {
    max-width: 100%;
  }
`;

const DetailsContainer = styled.div`
  background-color: #868686;
  flex-grow: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;

  @media (max-width: 450px) {
    padding: 10px 0;
  }
`;

const CarName = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
  margin-left: 10px;
`;

const CarVIN = styled.p`
  margin: 0;
  margin-left: 10px;
`;

const CarListItem = ({ car }) => {
  return (
    <ContentContainer>
      <ImageContainer>
        <Image src={siteImages[car.type]} fluid />
      </ImageContainer>
      <DetailsContainer>
        <CarName>{car.fullname}</CarName>
        <CarVIN>{`VIN: ${car.vin}`}</CarVIN>
      </DetailsContainer>
    </ContentContainer>
  );
};

export default CarListItem;
