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
import {Link} from "react-router-dom";

const ButtonContainer = styled(Col)`
  display: flex;
  margin-top: 5px;
  justify-content: flex-end;
`;

const AddRecordButton = styled(Button)`
  @media (max-width: 575.98px) {
    display: block;
    width: 100%;
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
      <ButtonContainer xs="12">
        <AddRecordButton forwardedAs={Link} variant="primary" className="mr-2" to="/add-record">
          Add New Record
        </AddRecordButton>
      </ButtonContainer>
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
