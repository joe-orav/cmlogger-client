import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getCars, getCarsDataLoading } from "../../store/selectors";
import NoData from "./noData";
import LoadingIcon from "../loading";
import Media from "react-bootstrap/Media";
import { SDRouteLink } from "../defaultLink";
import CarIcon from "../../utils/carIcons";

const CarListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CarMedia = styled(Media)`
  align-items: center;
`;

const MediaLabel = styled.p`
  margin: 0;
`;

const LinkContainer = styled.div`
  padding: 10px 0;
`;

const Item = ({ imgSrc, label }) => {
  return (
    <CarMedia>
      <img width="50" src={imgSrc} alt={label} />
      <Media.Body>
        <MediaLabel>{label}</MediaLabel>
      </Media.Body>
    </CarMedia>
  );
};

const CarList = () => {
  const cars = useSelector(getCars);
  const carsDataLoading = useSelector(getCarsDataLoading);

  return carsDataLoading ? (
    <LoadingIcon />
  ) : cars.length === 0 ? (
    <NoData />
  ) : (
    <CarListWrapper>
      <div>
        {cars.map((car) => (
          <Item
            key={car.id}
            imgSrc={CarIcon[car.type]}
            label={car.fullname}
          />
        ))}
      </div>
      <LinkContainer>
        <SDRouteLink to="/cars">View Cars</SDRouteLink>
      </LinkContainer>
    </CarListWrapper>
  );
};

export default CarList;
