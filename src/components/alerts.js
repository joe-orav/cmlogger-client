import React from "react";
import { connect } from "react-redux";
import { getAlerts } from "../store/selectors";
import styled from "styled-components";
import Alert from "react-bootstrap/Alert";

const Content = styled.div`
  display: flex;
  position: fixed;
  bottom: 10px;
  right: 0;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 767.98px) {
    width: 100%;
    align-items: center;
  }
`;

const AppAlert = styled(Alert)`
  width: 275px;
  font-size: 0.85rem;
  margin-right: 20px;
  opacity: 1;
  transition: opacity 1s linear;

  @media (max-width: 767.98px) {
    margin-right: 0;
  }
`;

const AlertContainer = ({ alerts }) => {
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

const mapStateToProps = (state) => {
  return {
    alerts: getAlerts(state),
  };
};

export default connect(mapStateToProps)(AlertContainer);
