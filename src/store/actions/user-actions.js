import * as ActionTypes from "../action-types";
import { createAlert, ALERT_TYPES } from "./alert-actions";

function fetchUserDataStart() {
    return {
        type: ActionTypes.FETCH_USER_DATA_START
    }
}

function fetchUserDataSuccess(data) {
    return {
        type: ActionTypes.FETCH_USER_DATA_SUCCESS,
        payload: data
    }
}

function fetchUserDataFailure(data) {
    return {
        type: ActionTypes.FETCH_USER_DATA_FAILURE,
        payload: data
    }
}

export function fetchUserData() {
    return async (dispatch) => {
        dispatch(fetchUserDataStart())

        const res = await fetch("/api/user");
        let data = await res.json();

        if(data.error) {
            dispatch(fetchUserDataFailure(data))
        } else {
            dispatch(fetchUserDataSuccess(data))
        }
    }
}

function disconnectAccountSuccess(userDataResponse) {
    return {
        type: ActionTypes.DISCONNECT_ACCOUNT,
        payload: userDataResponse
    }
}

export function disconnectAccount(userData) {
    return async (dispatch) => {
        let res = await fetch("/api/user/disconnect", {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        let userDataResponse = await res.json();

        dispatch(disconnectAccountSuccess(userDataResponse))
        dispatch(createAlert("Account has been disconnected", ALERT_TYPES.SUCCESS))
    }
}

function deleteAccountSuccess() {
    return {
        type: ActionTypes.DELETE_ACCOUNT
    }
}

export function deleteAccount(userData) {
    return async (dispatch) => {
        let res = await fetch("/api/user/delete", {
            method: "POST",
            redirect: 'follow',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })

        let userDataResponse = await res.json();

        if(userDataResponse.accountDeleted) {
            window.location.href = "/login";
            dispatch(deleteAccountSuccess())
        }
    }
} 