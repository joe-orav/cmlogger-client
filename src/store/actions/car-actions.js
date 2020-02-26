import * as ActionTypes from "../action-types";
import fetch from "isomorphic-unfetch";
import { createAlert, ALERT_TYPES } from "./alert-actions";

function fetchCarDataStart() {
    return {
        type: ActionTypes.FETCH_CAR_DATA_START
    }
}

function fetchCarDataSuccess(data) {
    return {
        type: ActionTypes.FETCH_CAR_DATA_SUCCESS,
        payload: data
    }
}

function fetchCarDataFailure(data) {
    return {
        type: ActionTypes.FETCH_CAR_DATA_FAILURE,
        payload: data
    }
}

export function fetchCarData() {
    return async (dispatch) => {
        dispatch(fetchCarDataStart())

        const res = await fetch("/api/cars");
        let data = res.json();

        if(data.error) {
            dispatch(fetchCarDataFailure(data))
        } else {
            dispatch(fetchCarDataSuccess(data))
        }
    }
}

function modifyCarDataStart() {
    return {
        type: ActionTypes.MODIFY_CAR_DATA_START
    }
}

function editCarSuccess(data) {
    return {
        type: ActionTypes.EDIT_CAR_SUCCESS,
        payload: data
    }
}

function addCarSuccess(data) {
    return {
        type: ActionTypes.ADD_CAR_SUCCESS,
        payload: data
    }
}

function deleteCarSuccess(data) {
    return {
        type: ActionTypes.DELETE_CAR_SUCCESS,
        payload: data
    }
}

function modifyCarDataFailure(error) {
    return {
        type: ActionTypes.MODIFY_CAR_DATA_FAILURE,
        error: error
    }
}

export function modifyCarData(carData) {
    return async (dispatch) => {
        dispatch(modifyCarDataStart());

        let requestMethod = null;
        
        if(carData.id !== -1 && Object.keys(carData).length !== 1) {
            requestMethod = "PUT"
        } else if(carData.id === -1) {
            requestMethod = "POST"
        } else if(Object.keys(carData).length === 1) {
            requestMethod = "DELETE"
        } else {
            dispatch(modifyCarDataFailure("There was an error processing your request"));
        }

        if(requestMethod) {
            const res = await fetch("/api/cars", {
                method: requestMethod,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(carData)
            });

            const data = await res.json();

            if (data.error) {
                dispatch(modifyCarDataFailure(data.error));
                dispatch(createAlert("There was an error processing this request", ALERT_TYPES.DANGER))
            } else if (requestMethod === "PUT") {
                dispatch(editCarSuccess(data));
                dispatch(createAlert("Car details successfully changed", ALERT_TYPES.SUCCESS))
            } else if (requestMethod === "POST") {
                dispatch(addCarSuccess(data));
                dispatch(createAlert("New car added", ALERT_TYPES.SUCCESS))
            } else if (requestMethod === "DELETE") {
                dispatch(deleteCarSuccess(data));
                dispatch(createAlert("Car has been removed", ALERT_TYPES.SUCCESS))
            }
        }
    }
}