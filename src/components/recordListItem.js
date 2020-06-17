import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  padding: 10px 10px 10px;
  &:nth-child(even) {
    background-color: #F0F0F0;
  }
`;

const ServiceDate = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: bold;
`;

const ServiceInfo = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const Car = styled.span`
  font-style: italic;
  &::after {
    content: " - ";
  }
`;

const RecordListItem = ({ recordItem }) => {
  return (
    <ContentContainer>
      <ServiceDate>{recordItem.dateString}</ServiceDate>
      <ServiceInfo>
        <Car>{recordItem.car.fullname}</Car>
        {recordItem.services.map((s) => s.sname).join(", ")}
      </ServiceInfo>
    </ContentContainer>
  );
};

export default RecordListItem;
