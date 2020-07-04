import * as ActionTypes from "../action-types";
import createAlert from "./alert-actions";

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
      return dispatch(fetchCarDataFailure(data));
    } else {
      return dispatch(fetchCarDataSuccess(data));
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

function modifyCarDataFailure(data) {
  return {
    type: ActionTypes.MODIFY_CAR_DATA_FAILURE,
    payload: data,
  };
}

export function modifyCarData(carData, requestMethod, demoModeEnabled) {
  return async (dispatch) => {
    dispatch(modifyCarDataStart());

    requestMethod = requestMethod.toLowerCase();

    if (
      requestMethod !== "post" &&
      requestMethod !== "put" &&
      requestMethod !== "delete"
    ) {
      dispatch(modifyCarDataFailure("Invalid Request"));
      dispatch(createAlert("Invalid Request", 2))
    } else if (demoModeEnabled) {
      switch (requestMethod) {
        case "put":
          dispatch(editCarSuccess(carData));
          dispatch(createAlert("Car details successfully changed"))
          break;
        case "post":
          dispatch(
            addCarSuccess(Object.assign({}, carData, { id: Date.now() })));
            dispatch(createAlert("New car added"))
            break;
        case "delete":
          dispatch(deleteCarSuccess(carData));
          dispatch(createAlert("Car has been deleted"))
          break;
        default:
      }
    } else {
      const res = await fetch("/api/cars", {
        method: requestMethod,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carData),
      });

      const data = await res.json();

      if (data.error) {
        dispatch(modifyCarDataFailure(data));
        dispatch(createAlert(`Error: ${data.error}`, 2))
      } else {
        switch (requestMethod) {
          case "put":
            dispatch(editCarSuccess(data));
            dispatch(createAlert("Car details successfully changed"))
            break;
          case "post":
            dispatch(addCarSuccess(data));
            dispatch(createAlert("New car added"))
            break;
          case "delete":
            dispatch(deleteCarSuccess(data));
            dispatch(createAlert("Car has been deleted"))
            break;
          default:
        }
      }
    }
  };
}
