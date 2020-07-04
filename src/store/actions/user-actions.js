import * as ActionTypes from "../action-types";
import createAlert from "./alert-actions";

function fetchUserDataStart() {
  return {
    type: ActionTypes.FETCH_USER_DATA_START,
  };
}

function fetchUserDataSuccess(data) {
  return {
    type: ActionTypes.FETCH_USER_DATA_SUCCESS,
    payload: data,
  };
}

function fetchUserDataFailure(data) {
  return {
    type: ActionTypes.FETCH_USER_DATA_FAILURE,
    payload: data,
  };
}

export function fetchUserData() {
  return async (dispatch) => {
    dispatch(fetchUserDataStart());

    const res = await fetch("/api/user");
    let data = await res.json();

    if (data.error) {
      return dispatch(fetchUserDataFailure(data));
    } else {
      return dispatch(fetchUserDataSuccess(data));
    }
  };
}

function disconnectAccountSuccess(userDataResponse) {
  return {
    type: ActionTypes.DISCONNECT_ACCOUNT,
    payload: userDataResponse,
  };
}

function disconnectAccountFailure(data) {
  return {
    type: ActionTypes.DISCONNECT_ACCOUNT_FAILURE,
    payload: data,
  };
}

export function disconnectAccount(userData) {
  return async (dispatch) => {
    let res = await fetch("/api/user/disconnect", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    let data = await res.json();

    if (data.error) {
      dispatch(disconnectAccountFailure(data));
      dispatch(createAlert("Unable to disconnect account", 2));
    } else {
      dispatch(disconnectAccountSuccess(data));
      dispatch(createAlert("Account has been disconnected", 2));
    }
  };
}

function deleteAccountSuccess() {
  return {
    type: ActionTypes.DELETE_ACCOUNT,
  };
}

function deleteAccountFailure(userDataResponse) {
  return {
    type: ActionTypes.DELETE_ACCOUNT_FAILURE,
    payload: userDataResponse,
  };
}

export function deleteAccount(userData) {
  return async (dispatch) => {
    let res = await fetch("/api/user/delete", {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    let data = await res.json();

    if (data.error) {
      dispatch(deleteAccountFailure(data));
      dispatch(createAlert(`Error: ${data.error}`, 2));
    } else if (data.accountDeleted) {
      window.location.href = "/";
      dispatch(deleteAccountSuccess());
    }
  };
}
