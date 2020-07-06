import React, { useCallback } from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { setDemoModeStateTo } from "../../store/actions/demo-actions";

const ContentContainer = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  @media (min-width: 992px) {
    margin-top: 30px;
  }
`;

const Text = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 576px) {
    margin-bottom: 20px;
  }
`;

export default () => {
  const dispatch = useDispatch();

  const setDemoModeDispatch = useCallback(() => {
    dispatch(setDemoModeStateTo(true));
  }, [dispatch]);

  return (
    <Row className="bg-light">
      <Col>
        <ContentContainer>
          <Text>Have a dry run with CMLogger</Text>
          <Button onClick={setDemoModeDispatch} size="lg">
            Try the demo
          </Button>
        </ContentContainer>
      </Col>
    </Row>
  );
};
