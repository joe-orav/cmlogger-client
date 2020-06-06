import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getExpandedServiceHistory,
  getCars,
  getServiceHistoryDataLoading,
} from "../store/selectors";
import LoadingIcon from "../components/loading";
import setPageTitle from "../utils/pageTitle";
import RecordItem from "../components/recordItem";
import styled from "styled-components";
import PageWrapper from "../components/pageWrapper";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import NotFound from "../components/notFound";
import { Link } from "react-router-dom";

const DescriptionCol = styled(Col)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;

  @media (min-width: 576px) {
    justify-content: flex-start;
    margin-bottom: 0px;
  }
`;

const Description = styled.p`
  margin-bottom: 0;

  @media (min-width: 576px) and (max-width: 767.98px) {
    text-align: center;
  }

  @media (min-width: 576px) {
    text-align: left;
  }
`;

const ButtonContainer = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const AddRecordButton = styled(Button)`
  display: block;
  width: 100%;
  align-items: center;
  box-sizing: content-box;
  max-height: 24px;

  @media (min-width: 576px) {
    display: flex;
    width: auto;
  }
`;

const TableHead = styled(Row)`
  text-align: center;
  display: none;

  @media (min-width: 576px) {
    display: flex;
  }
`;

const TableHeader = ({ label }) => {
  return (
    <Col>
      <p className="font-weight-bold">{label}</p>
    </Col>
  );
};

function ServiceHistory({ cars, serviceHistory, serviceHistoryDataLoading }) {
  useEffect(() => {
    setPageTitle("Service History");
  });

  return (
    <PageWrapper pageTitle="Service History">
      <Col className="mt-3 mt-md-2">
        <Row>
          <DescriptionCol xs="12" sm="6">
            <Description>
              Click a row to expand it and view more details
            </Description>
          </DescriptionCol>
          <ButtonContainer xs="12" sm="6">
            <AddRecordButton
              forwardedAs={Link}
              variant="primary"
              to="/add-record"
            >
              Add New Record
            </AddRecordButton>
          </ButtonContainer>
        </Row>
      </Col>
      <Col xs="12" className="mt-4">
        <Container fluid>
          <TableHead className="row-cols-3 border-bottom">
            <TableHeader label="Date of Service" />
            <TableHeader label="Car" />
            <TableHeader label="Service(s) Provided" />
          </TableHead>
          <Row className="border-bottom d-sm-none d-block" />
          {(serviceHistoryDataLoading && <LoadingIcon />) ||
            (serviceHistory.length &&
              serviceHistory.map((sItem, i) => (
                <RecordItem key={sItem.id} index={i} record={sItem} />
              ))) || (
              <NotFound title="No records found" noDivider>
                Click "Add Service Record" to add a new service record
              </NotFound>
            )}
        </Container>
      </Col>
    </PageWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    cars: getCars(state),
    serviceHistory: getExpandedServiceHistory(state),
    serviceHistoryDataLoading: getServiceHistoryDataLoading(state),
  };
};

export default connect(mapStateToProps)(ServiceHistory);
