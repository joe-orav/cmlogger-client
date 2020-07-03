import * as ActionTypes from "../action-types";

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
      return dispatch(deleteServiceSuccess({serviceIDs}));
    } else {
      const res = await fetch("/api/services", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceIDs }),
      });

      const data = await res.json();

      if (data.error) {
        return dispatch(modifyServiceDataFailure(data));
      } else {
        return dispatch(deleteServiceSuccess(data));
      }
    }
  };
}
