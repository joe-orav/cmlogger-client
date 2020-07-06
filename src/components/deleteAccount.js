import React, { useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getUserId } from "../store/selectors";
import { deleteAccount } from "../store/actions/user-actions";

const DeleteCheck = styled(Form.Check)`
  margin-bottom: 10px;

  @media (min-width: 576px) {
    margin-bottom: 0px;
  }
`;

const DeleteAccount = () => {
  const userId = useSelector(getUserId);
  const [deletionConfirmed, setDeletionConfirmation] = useState(false);
  const dispatch = useDispatch();

  const deleteAccountDispatch = useCallback(() =>
    dispatch(deleteAccount({ userId })),
    [dispatch, userId]
  );

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
        onClick={() => deleteAccountDispatch()}
      >
        Delete Account
      </Button>
    </div>
  );
};

export default DeleteAccount;
