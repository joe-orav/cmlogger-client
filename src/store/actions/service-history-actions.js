import * as ActionTypes from "../action-types";
import { createAlert, ALERT_TYPES } from "./alert-actions";

function fetchServiceHistoryDataStart() {
  return {
    type: ActionTypes.FETCH_SH_DATA_START,
  };
}

function fetchServiceHistoryDataSuccess(data) {
  return {
    type: ActionTypes.FETCH_SH_DATA_SUCCESS,
    payload: data,
  };
}

function fetchServiceHistoryDataFailure(data) {
  return {
    type: ActionTypes.FETCH_SH_DATA_FAILURE,
    payload: data,
  };
}

export function fetchServiceHistoryData() {
  return async (dispatch) => {
    dispatch(fetchServiceHistoryDataStart());

    const res = await fetch("/api/service-history");
    let data = await res.json();

    if (data.error) {
      dispatch(fetchServiceHistoryDataFailure(data));
    } else {
      dispatch(fetchServiceHistoryDataSuccess(data));
    }
  };
}

function modifyServiceHistoryStart() {
  return {
    type: ActionTypes.MODIFY_SERVICE_HISTORY_START,
  };
}

function editServiceRecordSuccess(data) {
  return {
    type: ActionTypes.EDIT_SERVICE_RECORD_SUCCESS,
    payload: data,
  };
}

function addServiceRecordSuccess(data) {
  return {
    type: ActionTypes.ADD_SERVICE_RECORD_SUCCESS,
    payload: data,
  };
}

function deleteServiceRecordSuccess(data) {
  return {
    type: ActionTypes.DELETE_SERVICE_RECORD_SUCCESS,
    payload: data,
  };
}

function modifyServiceHistoryFailure(error) {
  return {
    type: ActionTypes.MODIFY_SERVICE_HISTORY_FAILURE,
    error: error,
  };
}

export function modifyServiceHistory(serviceHistoryData, requestMethod) {
  return async (dispatch) => {
    dispatch(modifyServiceHistoryStart());

    requestMethod = requestMethod.toLowerCase();

    if (
      requestMethod !== "post" &&
      requestMethod !== "put" &&
      requestMethod !== "delete"
    ) {
      dispatch(modifyServiceHistoryFailure("Invalid Request"));
      dispatch(createAlert("Invalid Request", ALERT_TYPES.DANGER));
    } else {
      const res = await fetch("/api/service-history", {
        method: requestMethod,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serviceHistoryData),
      });

      const data = await res.json();

      if (data.error) {
        dispatch(modifyServiceHistoryFailure(data.error));
        dispatch(createAlert(data.error, ALERT_TYPES.DANGER));
      } else if (requestMethod === "put") {
        dispatch(editServiceRecordSuccess(data));
        dispatch(
          createAlert(
            "Service record has been successfully changed",
            ALERT_TYPES.SUCCESS
          )
        );
      } else if (requestMethod === "post") {
        dispatch(addServiceRecordSuccess(data));
        dispatch(
          createAlert("New service record has been added", ALERT_TYPES.SUCCESS)
        );
      } else if (requestMethod === "delete") {
        dispatch(deleteServiceRecordSuccess(data));
        dispatch(
          createAlert("Service record has been removed", ALERT_TYPES.SUCCESS)
        );
      }
    }
  };
}
