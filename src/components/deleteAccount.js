import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

const DeleteCheck = styled(Form.Check)`
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

const DeleteAccount = () => {
  const [deletionConfirmed, setDeletionConfirmation] = useState(false);

  return (
    <div>
      <DeleteCheck
        inline
        id="delete-confirmation-checkbox"
        type="checkbox"
        label="I confirm that I want to delete my account"
        onClick={(e) => setDeletionConfirmation(e.target.checked)}
      />
      <Button variant="danger" disabled={!deletionConfirmed}>
        Delete Account
      </Button>
    </div>
  );
};

export default DeleteAccount;
