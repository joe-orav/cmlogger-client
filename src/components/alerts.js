import React from "react";
import { useSelector } from "react-redux";
import { getAlerts } from "../store/selectors";
import styled from "styled-components";
import Alert from "react-bootstrap/Alert";

const Content = styled.div`
  position: fixed;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    right: 0;
    align-items: flex-end;
  }
`;

const AppAlert = styled(Alert)`
  font-size: 0.85rem;
  opacity: 1;
  transition: opacity 1s linear;
  width: 275px;

  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;

const AlertContainer = () => {
  const alerts = useSelector(getAlerts);

  return (
    <Content>
      {alerts.map((alert) => (
        <AppAlert key={alert.id} variant={alert.type}>
          {alert.message}
        </AppAlert>
      ))}
    </Content>
  );
};

export default AlertContainer;