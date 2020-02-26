import * as ActionTypes from "../action-types";
import { createAlert, ALERT_TYPES } from "./alert-actions";

function fetchLocationDataStart() {
    return {
        type: ActionTypes.FETCH_LOCATION_DATA_START
    }
}

function fetchLocationDataSuccess(data) {
    return {
        type: ActionTypes.FETCH_LOCATION_DATA_SUCCESS,
        payload: data
    }
}

function fetchLocationDataFailure(data) {
    return {
        type: ActionTypes.FETCH_LOCATION_DATA_FAILURE,
        payload: data
    }
}

export function fetchLocationData() {
    return async (dispatch) => {
        dispatch(fetchLocationDataStart())

        const res = await fetch("/api/locations");
        let data = await res.json();

        if(data.error) {
            dispatch(fetchLocationDataFailure(data))
        } else {
            dispatch(fetchLocationDataSuccess(data))
        }
    }
}

function modifyLocationDataStart() {
    return {
        type: ActionTypes.MODIFY_LOCATION_DATA_START
    }
}

function deleteLocationSuccess(data) {
    return {
        type: ActionTypes.DELETE_LOCATION_DATA_SUCCESS,
        payload: data
    }
}

function modifyLocationDataFailure(error) {
    return {
        type: ActionTypes.MODIFY_LOCATION_DATA_FAILURE,
        error: error
    }
}

export function modifyLocationData(locationIDs) {
    return async (dispatch) => {
        dispatch(modifyLocationDataStart());

        const res = await fetch("/api/locations", {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({locationIDs})
        });

        const data = await res.json();

        if (data.error) {
            dispatch(modifyLocationDataFailure(data.error));
            dispatch(createAlert("There was an error processing this request", ALERT_TYPES.DANGER))
        } else {
            dispatch(deleteLocationSuccess(data));
            dispatch(createAlert("Locations removed", ALERT_TYPES.SUCCESS))
        }

    }
}