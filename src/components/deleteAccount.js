import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const DeleteAccount = () => {
  const [deletionConfirmed, setDeletionConfirmation] = useState(false);

  return (
    <div>
      <Form.Check
        inline
        id="delete-confirmation-checkbox"
        type="checkbox"
        label="I confirm that I want to delete my account"
        onClick={(e) => setDeletionConfirmation(e.target.checked)}
      />
      <Button variant="danger" disabled={!deletionConfirmed}>Delete Account</Button>
    </div>
  );
};

export default DeleteAccount;
