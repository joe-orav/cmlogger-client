import * as ActionTypes from "../action-types";
import createAlert from "./alert-actions";

function fetchServicesDataStart() {
  return {
    type: ActionTypes.FETCH_SERVICE_DATA_START,
  };
}

function fetchServicesDataSuccess(data) {
  return {
    type: ActionTypes.FETCH_SERVICE_DATA_SUCCESS,
    payload: data,
  };
}

function fetchServicesDataFailure(data) {
  return {
    type: ActionTypes.FETCH_SERVICE_DATA_FAILURE,
    payload: data,
  };
}

export function fetchServicesData() {
  return async (dispatch) => {
    dispatch(fetchServicesDataStart());

    const res = await fetch("/api/services");
    let data = await res.json();

    if (data.error) {
      return dispatch(fetchServicesDataFailure(data));
    } else {
      return dispatch(fetchServicesDataSuccess(data));
    }
  };
}

function modifyServiceDataStart() {
  return {
    type: ActionTypes.MODIFY_SERVICE_DATA_START,
  };
}

function deleteServiceSuccess(data) {
  return {
    type: ActionTypes.DELETE_SERVICE_DATA_SUCCESS,
    payload: data,
  };
}

function modifyServiceDataFailure(error) {
  return {
    type: ActionTypes.MODIFY_SERVICE_DATA_FAILURE,
    payload: error,
  };
}

export function modifyServiceData(serviceIDs, demoModeEnabled) {
  return async (dispatch) => {
    dispatch(modifyServiceDataStart());

    if (demoModeEnabled) {
      dispatch(deleteServiceSuccess({ serviceIDs }));
      dispatch(createAlert("Services successfully deleted"));
    } else {
      const res = await fetch("/api/services", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceIDs }),
      });

      const data = await res.json();

      if (data.error) {
        dispatch(modifyServiceDataFailure(data));
        dispatch(createAlert(`Error: ${data.error}`, 2));
      } else {
        dispatch(deleteServiceSuccess(data));
        dispatch(createAlert("Services successfully deleted"));
      }
    }
  };
}
