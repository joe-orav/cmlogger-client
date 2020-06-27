import * as ActionTypes from "../action-types";
import { createAlert, ALERT_TYPES } from "./alert-actions";
import { fetchLocationData } from "./locations-actions";

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
      dispatch(fetchServicesDataFailure(data));
    } else {
      dispatch(fetchServicesDataSuccess(data));
      dispatch(fetchLocationData());
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
    error: error,
  };
}

export function modifyServiceData(serviceIDs, demoModeEnabled) {
  return async (dispatch) => {
    dispatch(modifyServiceDataStart());

    if (demoModeEnabled) {
      dispatch(deleteServiceSuccess({serviceIDs}));
      dispatch(createAlert("Services removed", ALERT_TYPES.SUCCESS));
    } else {
      const res = await fetch("/api/services", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceIDs }),
      });

      const data = await res.json();

      if (data.error) {
        dispatch(modifyServiceDataFailure(data.error));
        dispatch(createAlert(data.error, ALERT_TYPES.DANGER));
      } else {
        dispatch(deleteServiceSuccess(data));
        dispatch(createAlert("Services removed", ALERT_TYPES.SUCCESS));
      }
    }
  };
}
