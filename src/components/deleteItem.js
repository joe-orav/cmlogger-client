import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const OverlayContainer = styled.div`
  background: rgba(104, 104, 104, 0.95);
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const ConfirmationText = styled.p`
  color: #fff;
  text-align: center;
  font-size: 1.3rem;
  padding: 0 15px;
`;

const OverlayButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const OverlayButton = styled(Button)`
  font-size: 1.1rem;
  margin: 0 10px;
`;

export default ({ show, setShow, text, action }) => {
  return (
    <OverlayContainer show={show}>
      <ConfirmationText>{text}</ConfirmationText>
      <OverlayButtonContainer>
        <OverlayButton variant="danger" onClick={action}>Delete</OverlayButton>
        <OverlayButton variant="dark" onClick={() => setShow(false)}>
          Cancel
        </OverlayButton>
      </OverlayButtonContainer>
    </OverlayContainer>
  );
};
