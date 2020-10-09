import React, { useEffect } from "react";
import setPageTitle from "../utils/pageTitle";
import ProfilePageWrapper from "../components/layouts/profilePageWrapper";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Overview from "../components/dash-components/overview";
import CarList from "../components/dash-components/carList";
import RecordList from "../components/dash-components/recordList";
import AccountList from "../components/dash-components/accountList";
import FrequentServicesList from "../components/dash-components/freqServices";
import FrequentLocationsList from "../components/dash-components/freqLocations";

const DashRow = styled(Row)`
  margin-top: 30px;
`;

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

function Dashboard() {
  useEffect(() => {
    setPageTitle("Dashboard");
  });

  return (
    <ProfilePageWrapper pageTitle="Dashboard">
      <Col>
        <Container className="mx-auto">
          <DashRow>
            <Overview />
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
    </ProfilePageWrapper>
  );
}

export default Dashboard;
