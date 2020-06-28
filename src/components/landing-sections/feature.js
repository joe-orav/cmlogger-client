import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FeatureRow = styled(Row)`
  padding: 0 10px 10px;

  @media (min-width: 992px) {
    padding: 20px 10px 40px;
  }
`;

const SectionHeader = styled.h2`
  border-bottom: 1px solid #686868;
  text-align: center;
  line-height: 0.1rem;
  margin: 50px 0;

  @media (min-width: 992px) {
    max-width: ${350 * 3}px;
    margin: 30px auto 50px;
  }
`;

const HeaderText = styled.span`
  padding: 0 10px;
`;

const FeatureCol = styled(Col)`
  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;

const FeatureContent = styled.div`
  border: 2px solid #cfcfcf;
  box-shadow: -1px 4px 5px 2px rgba(217, 214, 217, 1);
  margin-bottom: 30px;
  padding: 20px;

  @media (min-width: 992px) {
    max-width: 350px;
    margin: 0 20px;
  }
`;

const FeatureIcon = styled.p`
  text-align: center;
  font-size: 3rem;
`;

const FeatureTitle = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;

const FeatureDescription = styled.p`
  font-size: 1.3rem;
`;

const Feature = ({ iconClass, title, description }) => {
  return (
    <FeatureContent>
      <FeatureIcon>
        <i className={iconClass}></i>
      </FeatureIcon>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
    </FeatureContent>
  );
};

export default () => {
  return (
    <FeatureRow id="features" className="bg-light">
      <Col xs="12">
        <SectionHeader>
          <HeaderText className="bg-light">Features</HeaderText>
        </SectionHeader>
      </Col>
      <FeatureCol xs="12">
        <Feature
          iconClass="fa fa-car"
          title="Manage Vehicles"
          description="CMLogger not only allows you to manage your own vehicle. Manage your partner's vehicle, your teenager's new car or any other vehicle you use in your everyday life."
        />
        <Feature
          iconClass="fa fa-tools"
          title="Keep Track of Services"
          description="CMLogger enables you to keep a detailed record of every service provided for your car whether it be where or when it occured, the cost of it and any additional notes/comments about the service you were given. "
        />
        <Feature
          iconClass="fa fa-lightbulb"
          title="Maintenance Overview"
          description="Your most frequent services, most visited locations, your total expense on services and more can be found on the CMLogger dashboard. No need to try and remember when and where was the last time you replaced your air filter."
        />
      </FeatureCol>
    </FeatureRow>
  );
};
