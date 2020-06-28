import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { connect } from "react-redux";
import { getUserId } from "../store/selectors";
import { deleteAccount } from "../store/actions/user-actions";

const DeleteCheck = styled(Form.Check)`
  margin-bottom: 10px;
  
  @media (min-width: 576px) {
    margin-bottom: 0px;
  }
`;

const DeleteAccount = ({ userId, deleteAccount }) => {
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
      <Button
        variant="danger"
        disabled={!deletionConfirmed}
        onClick={() => deleteAccount({ userId: userId })}
      >
        Delete Account
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: getUserId(state),
  };
};

const mapDispatchToProps = { deleteAccount };

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
