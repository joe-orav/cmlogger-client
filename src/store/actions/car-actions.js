import * as ActionTypes from "../action-types";
import { createAlert, ALERT_TYPES } from "./alert-actions";
import { fetchServicesData } from "./service-actions";

function fetchCarDataStart() {
  return {
    type: ActionTypes.FETCH_CAR_DATA_START,
  };
}

function fetchCarDataSuccess(data) {
  return {
    type: ActionTypes.FETCH_CAR_DATA_SUCCESS,
    payload: data,
  };
}

function fetchCarDataFailure(data) {
  return {
    type: ActionTypes.FETCH_CAR_DATA_FAILURE,
    payload: data,
  };
}

export function fetchCarData() {
  return async (dispatch) => {
    dispatch(fetchCarDataStart());

    const res = await fetch("/api/cars");
    let data = await res.json();

    if (data.error) {
      dispatch(fetchCarDataFailure(data));
    } else {
      dispatch(fetchCarDataSuccess(data));
      dispatch(fetchServicesData());
    }
  };
}

function modifyCarDataStart() {
  return {
    type: ActionTypes.MODIFY_CAR_DATA_START,
  };
}

function editCarSuccess(data) {
  return {
    type: ActionTypes.EDIT_CAR_SUCCESS,
    payload: data,
  };
}

function addCarSuccess(data) {
  return {
    type: ActionTypes.ADD_CAR_SUCCESS,
    payload: data,
  };
}

function deleteCarSuccess(data) {
  return {
    type: ActionTypes.DELETE_CAR_SUCCESS,
    payload: data,
  };
}

function modifyCarDataFailure(error) {
  return {
    type: ActionTypes.MODIFY_CAR_DATA_FAILURE,
    error: error,
  };
}

export function modifyCarData(carData, requestMethod) {
  return async (dispatch) => {
    dispatch(modifyCarDataStart());

    requestMethod = requestMethod.toLowerCase();

    if (
      requestMethod !== "post" &&
      requestMethod !== "put" &&
      requestMethod !== "delete"
    ) {
      dispatch(
        modifyCarDataFailure("There was an error processing your request")
      );
      dispatch(
        createAlert(
          "There was an error processing this request",
          ALERT_TYPES.DANGER
        )
      );
    } else {
      const res = await fetch("/api/cars", {
        method: requestMethod,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carData),
      });

      const data = await res.json();

      if (data.error) {
        dispatch(modifyCarDataFailure(data.error));
        dispatch(createAlert(data.error, ALERT_TYPES.DANGER));
      } else if (requestMethod === "put") {
        dispatch(editCarSuccess(data));
        dispatch(
          createAlert("Car details successfully changed", ALERT_TYPES.SUCCESS)
        );
      } else if (requestMethod === "post") {
        dispatch(addCarSuccess(data));
        dispatch(createAlert("New car added", ALERT_TYPES.SUCCESS));
      } else if (requestMethod === "delete") {
        dispatch(deleteCarSuccess(data));
        dispatch(createAlert("Car has been removed", ALERT_TYPES.SUCCESS));
      }
    }
  };
}
