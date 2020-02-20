import * as ActionTypes from "../action-types";
import fetch from "isomorphic-unfetch";
import { createAlert, ALERT_TYPES } from "./alert-actions";

export function getServiceHistoryData(data) {
    return {
        type: ActionTypes.GET_SH_DATA,
        payload: data
    }
}

function modifyServiceHistoryStart() {
    return {
        type: ActionTypes.MODIFY_SERVICE_HISTORY_START
    }
}

function editServiceRecordSuccess(data) {
    return {
        type: ActionTypes.EDIT_SERVICE_RECORD_SUCCESS,
        payload: data
    }
}

function addServiceRecordSuccess(data) {
    return {
        type: ActionTypes.ADD_SERVICE_RECORD_SUCCESS,
        payload: data
    }
}

function deleteServiceRecordSuccess(data) {
    return {
        type: ActionTypes.DELETE_SERVICE_RECORD_SUCCESS,
        payload: data
    }
}

function modifyServiceHistoryFailure(error) {
    return {
        type: ActionTypes.MODIFY_SERVICE_HISTORY_FAILURE,
        error: error
    }
}

export function modifyServiceHistory(serviceHistoryData) {
    return async (dispatch) => {
        dispatch(modifyServiceHistoryStart());

        let requestMethod = null;

        if (serviceHistoryData.id !== -1 && Object.keys(serviceHistoryData).length !== 1) {
            requestMethod = "PUT"
        } else if (serviceHistoryData.id === -1) {
            requestMethod = "POST"
        } else if (Object.keys(serviceHistoryData).length === 1) {
            requestMethod = "DELETE"
        } else {
            dispatch(modifyServiceHistoryFailure("There was an error processing your request"));
        }

        if (requestMethod) {
            const res = await fetch("/api/service-history", {
                method: requestMethod,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(serviceHistoryData)
            });

            const data = await res.json();

            if (data.error) {
                dispatch(modifyServiceHistoryFailure(data.error));
                dispatch(createAlert("There was an error processing this request", ALERT_TYPES.DANGER))
            } else if (requestMethod === "PUT") {
                dispatch(editServiceRecordSuccess(data));
                dispatch(createAlert("Service record has been successfully changed", ALERT_TYPES.SUCCESS))
            } else if (requestMethod === "POST") {
                dispatch(addServiceRecordSuccess(data));
                dispatch(createAlert("New service record has been added", ALERT_TYPES.SUCCESS))
            } else if (requestMethod === "DELETE") {
                dispatch(deleteServiceRecordSuccess(data));
                dispatch(createAlert("Service record has been removed", ALERT_TYPES.SUCCESS))
            }
        }
    }
}