import React, { useEffect } from "react";
import setPageTitle from "../utils/pageTitle";
import PageWrapper from "../components/pageWrapper";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import CarList from "../components/dash-components/carList";
import RecordList from "../components/dash-components/recordList";
import AccountList from "../components/dash-components/accountList";
import FrequentServicesList from "../components/dash-components/freqServices";
import FrequentLocationsList from "../components/dash-components/freqLocations";
import { getCars, getServiceHistory, getTotalCost } from "../store/selectors";
import { connect } from "react-redux";

const DashRow = styled(Row)`
  margin-top: 30px;
`;

const StatOverviewBlock = styled.div`
  border: 2px solid #cfcfcf;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;

  @media (max-width: 1199.98px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const StatContainer = styled.div`
  text-align: center;
  border-bottom: 1px solid #cfcfcf;
  padding: 0 10px;

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 1200px) {
    border-bottom: none;
  }
`;

const StatLabel = styled.p`
  margin: 10px 10px 5px;
`;

const StatValue = styled.p`
  font-size: 3rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
`;

const StatOverview = ({ label, value }) => {
  return (
    <StatContainer>
      <StatLabel>{label}</StatLabel>
      <StatValue>{value}</StatValue>
    </StatContainer>
  );
};

const DashCardColumns = styled(CardColumns)`
  @media (min-width: 576px) {
    column-count: 2;
  }

  @media (min-width: 992px) {
    column-count: 3;
  }
`;

const DashCardWrapper = styled(Card)`
  border: none;
`;

const DashCardHeader = styled(Card.Header)`
  background-color: #fff;
  border: 2px solid #cfcfcf;
  border-bottom: none;
  font-weight: bold;
  padding: 5px 10px;
`;

const DashCardBody = styled(Card.Body)`
  border: 2px solid #cfcfcf;
  padding: ${(props) => (props.$removePadding ? "0px" : "5px 10px")};
`;

const DashCard = ({ title, children, full }) => {
  return (
    <DashCardWrapper>
      <DashCardHeader>{title}</DashCardHeader>
      <DashCardBody $removePadding={full}>{children}</DashCardBody>
    </DashCardWrapper>
  );
};

function Dashboard({ carsCount, recordCount, totalCost }) {
  useEffect(() => {
    setPageTitle("Dashboard");
  });
  return (
    <PageWrapper pageTitle="Dashboard">
      <Col>
        <Container className="mx-auto">
          <DashRow>
            <Col xs="12">
              <StatOverviewBlock>
                <StatOverview label="Total # of Cars" value={carsCount} />
                <StatOverview label="Services Recorded" value={recordCount} />
                <StatOverview
                  label="Total Spent on Services"
                  value={`$${totalCost}`}
                />
              </StatOverviewBlock>
            </Col>
          </DashRow>
          <DashRow>
            <Col xs="12">
              <DashCardColumns>
                <DashCard title="Recent Services">
                  <RecordList />
                </DashCard>
                <DashCard title="My Cars">
                  <CarList />
                </DashCard>
                <DashCard title="Frequent Services" full>
                  <FrequentServicesList />
                </DashCard>
                <DashCard title="Frequent Locations" full>
                  <FrequentLocationsList />
                </DashCard>
                <DashCard title="Accounts">
                  <AccountList />
                </DashCard>
              </DashCardColumns>
            </Col>
          </DashRow>
        </Container>
      </Col>
    </PageWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    carsCount: getCars(state).length,
    recordCount: getServiceHistory(state).length,
    totalCost: getTotalCost(state),
  };
};

export default connect(mapStateToProps)(Dashboard);
