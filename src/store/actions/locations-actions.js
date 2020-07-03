import * as ActionTypes from "../action-types";

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
      return dispatch(fetchLocationDataFailure(data));
    } else {
      return dispatch(fetchLocationDataSuccess(data));
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
    payload: error,
  };
}

export function modifyLocationData(locationIDs, demoModeEnabled) {
  return async (dispatch) => {
    dispatch(modifyLocationDataStart());

    if (demoModeEnabled) {
      return dispatch(deleteLocationSuccess({ locationIDs }));
    } else {
      const res = await fetch("/api/locations", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locationIDs }),
      });

      const data = await res.json();

      if (data.error) {
        return dispatch(modifyLocationDataFailure(data));
      } else {
        return dispatch(deleteLocationSuccess(data));
      }
    }
  };
}
