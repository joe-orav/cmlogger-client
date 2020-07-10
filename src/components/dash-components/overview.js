import React from "react";
import Col from "react-bootstrap/Col";
import { getServiceHistory, getTotalCost, getCarCount } from "../../store/selectors";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StatOverviewBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 2px solid #cfcfcf;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

const StatContainer = styled.div`
  text-align: center;
  border-bottom: 1px solid #cfcfcf;
  padding: 0 10px;

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 992px) {
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

export default () => {
  const carsCount = useSelector(getCarCount);
  const recordCount = useSelector(getServiceHistory).length;
  const totalCost = useSelector(getTotalCost);

  return (
    <Col xs="12">
      <StatOverviewBlock>
        <StatOverview label="Total # of Cars" value={carsCount} />
        <StatOverview label="Services Recorded" value={recordCount} />
        <StatOverview label="Total Spent on Services" value={`$${totalCost}`} />
      </StatOverviewBlock>
    </Col>
  );
};
