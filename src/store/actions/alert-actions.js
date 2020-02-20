import * as ActionTypes from "../action-types";

export const ALERT_TYPES = { SUCCESS: "success", DANGER: "danger" }

let alertCounter = 0;

function displayAlert(id, message, type) {
    return {
        type: ActionTypes.DISPLAY_ALERT,
        payload: {id: id, message: message, type: type }
    }
}

function removeAlert(id) {
    return {
        type: ActionTypes.REMOVE_ALERT,
        payload: id
    }
}

export function createAlert(message, type) {
    return async (dispatch) => {
        let alertID = alertCounter;

        dispatch(displayAlert(alertID, message, type));
        setTimeout(() => dispatch(removeAlert(alertID)), 3000)

        alertCounter++;
    }
}

