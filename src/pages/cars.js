import React, { useEffect } from "react";
import setPageTitle from "./pagetitle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarItem from "../components/carItem";
import AddCarItem from "../components/addCarItem";
import PageWrapper from "../components/pageWrapper";
import LoadingIcon from "../components/loading";
import { connect } from "react-redux";
import { getCars, getCarsDataLoading } from "../store/selectors";

function Cars({ cars, carsDataLoading }) {
  useEffect(() => {
    setPageTitle("My Cars");
  });

  return (
    <PageWrapper pageTitle="My Cars">
      {carsDataLoading ? (
        <LoadingIcon />
      ) : (
        <Col className="mt-4 pl-4" xs>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            {cars.map((c, i) => (
              <CarItem key={i} car={c} />
            ))}
            <AddCarItem />
          </Row>
        </Col>
      )}
    </PageWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    cars: getCars(state),
    carsDataLoading: getCarsDataLoading(state),
  };
};

export default connect(mapStateToProps)(Cars);
