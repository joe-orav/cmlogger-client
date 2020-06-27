import * as ActionTypes from "../action-types";
import { createAlert, ALERT_TYPES } from "./alert-actions";
import { fetchServiceHistoryData } from "./service-history-actions";

function fetchLocationDataStart() {
  return {
    type: ActionTypes.FETCH_LOCATION_DATA_START,
  };
}

function fetchLocationDataSuccess(data) {
  return {
    type: ActionTypes.FETCH_LOCATION_DATA_SUCCESS,
    payload: data,
  };
}

function fetchLocationDataFailure(data) {
  return {
    type: ActionTypes.FETCH_LOCATION_DATA_FAILURE,
    payload: data,
  };
}

export function fetchLocationData() {
  return async (dispatch) => {
    dispatch(fetchLocationDataStart());

    const res = await fetch("/api/locations");
    let data = await res.json();

    if (data.error) {
      dispatch(fetchLocationDataFailure(data));
    } else {
      dispatch(fetchLocationDataSuccess(data));
      dispatch(fetchServiceHistoryData());
    }
  };
}

function modifyLocationDataStart() {
  return {
    type: ActionTypes.MODIFY_LOCATION_DATA_START,
  };
}

function deleteLocationSuccess(data) {
  return {
    type: ActionTypes.DELETE_LOCATION_DATA_SUCCESS,
    payload: data,
  };
}

function modifyLocationDataFailure(error) {
  return {
    type: ActionTypes.MODIFY_LOCATION_DATA_FAILURE,
    error: error,
  };
}

export function modifyLocationData(locationIDs, demoModeEnabled) {
  return async (dispatch) => {
    dispatch(modifyLocationDataStart());

    if (demoModeEnabled) {
      dispatch(deleteLocationSuccess({ locationIDs }));
      dispatch(createAlert("Locations removed", ALERT_TYPES.SUCCESS));
    } else {
      const res = await fetch("/api/locations", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locationIDs }),
      });

      const data = await res.json();

      if (data.error) {
        dispatch(modifyLocationDataFailure(data.error));
        dispatch(createAlert(data.error, ALERT_TYPES.DANGER));
      } else {
        dispatch(deleteLocationSuccess(data));
        dispatch(createAlert("Locations removed", ALERT_TYPES.SUCCESS));
      }
    }
  };
}
