import React, { useEffect } from "react";
import setPageTitle from "../utils/pageTitle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarItem from "../components/carItem";
import AddCarItem from "../components/addCarItem";
import PageWrapper from "../components/pageWrapper";
import LoadingIcon from "../components/loading";
import { useSelector } from "react-redux";
import { getCars, getCarsDataLoading } from "../store/selectors";

function Cars() {
  const cars = useSelector(getCars);
  const carsDataLoading = useSelector(getCarsDataLoading);

  useEffect(() => {
    setPageTitle("My Cars");
  });

  return (
    <PageWrapper pageTitle="My Cars">
      {carsDataLoading ? (
        <LoadingIcon />
      ) : (
        <Col className="mt-4 px-4" xs>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            {cars.map((c) => (
              <CarItem key={c.id} car={c} />
            ))}
            <AddCarItem />
          </Row>
        </Col>
      )}
    </PageWrapper>
  );
}

export default Cars;
