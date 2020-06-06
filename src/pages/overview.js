import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCars } from "../store/selectors";
import setPageTitle from "../utils/pageTitle";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PageWrapper from "../components/pageWrapper";
import CarItem from "../components/carItem";

const Block = styled.div`
  border: 1px solid #cfcfcf;
  background: #fff;
  padding-bottom: 20px;
`;

const BlockHeader = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px 0px 5px 10px;
  border-bottom: 1px solid #cfcfcf;
  margin-bottom: 0;
`;

const ContentBlock = ({ title, children, xs, sm, md, lg, xl }) => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Block className="m-2">
        <BlockHeader>{title}</BlockHeader>
        {children}
      </Block>
    </Col>
  );
};

const EBCContainer = styled.div`
    text-align: center;
    margin-top: 20px;
    color: #707070;
    padding: 0 20px;
`

const EBCTitle = styled.p`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

const EBCText = styled.p`
    font-size: 1.02rem;
`

const EmptyBlockContent = ({ title, children }) => {
  return (
    <EBCContainer>
      <EBCTitle>{title}</EBCTitle>
      <EBCText>{children}</EBCText>
    </EBCContainer>
  );
};

function Overview({ cars }) {
  useEffect(() => {
    setPageTitle("Overview");
  });
  return (
    <PageWrapper pageTitle="Overview">
      <Col className="mt-3">
        <Row>
          <ContentBlock title="My Cars" xs="12" md="6" lg="7">
            <Container>
              <Row className="row-cols-1">
                {cars.map((c, i) => (
                  <CarItem key={i} car={c} hideControls />
                ))}
              </Row>
            </Container>
          </ContentBlock>
          <ContentBlock title="Recent Service History" xs="12" md="6" lg="5">
            <EmptyBlockContent title="No Service Records Found">
              Any recent service records added will show up here
            </EmptyBlockContent>
          </ContentBlock>
        </Row>
      </Col>
    </PageWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    cars: getCars(state),
  };
};

export default connect(mapStateToProps)(Overview);
