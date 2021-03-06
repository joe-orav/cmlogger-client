import * as ActionTypes from "../action-types";
import createAlert from "./alert-actions";
import moment from "moment";

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
      return dispatch(fetchServiceHistoryDataFailure(data));
    } else {
      return dispatch(fetchServiceHistoryDataSuccess(data));
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
    payload: error,
  };
}

export function processRecordData(serviceHistoryData) {
  let newLocation =
    serviceHistoryData.location_id !== 0
      ? null
      : {
          id: Date.now(),
          user_id: serviceHistoryData.user_id,
          name: serviceHistoryData.location_name,
          address: serviceHistoryData.address,
          city: serviceHistoryData.city,
          state: serviceHistoryData.state,
          zip_code: serviceHistoryData.zip_code,
          other: serviceHistoryData.loc_other
        };

  let newServices = serviceHistoryData.new_services.map((service, i) => ({
    id: parseInt(Date.now() + "" + i),
    sname: service,
    user_id: serviceHistoryData.user_id,
  }));

  let record = {
    id: serviceHistoryData.id === -1 ? Date.now() : serviceHistoryData.id,
    user_id: serviceHistoryData.user_id,
    car_id: serviceHistoryData.car_id,
    service_date: moment(serviceHistoryData.date).toISOString(),
    location_id:
      serviceHistoryData.location_id === 0
        ? newLocation.id
        : serviceHistoryData.location_id === -1
        ? null
        : serviceHistoryData.location_id,
    cost: parseFloat(serviceHistoryData.cost).toFixed(2),
    notes: serviceHistoryData.notes,
    provided_services_ids: [
      ...serviceHistoryData.services,
      ...newServices.map((service) => service.id),
    ],
  };

  return {
    location: newLocation,
    record: record,
    services: newServices,
  };
}

export function modifyServiceHistory(
  serviceHistoryData,
  requestMethod,
  demoModeEnabled
) {
  return async (dispatch) => {
    dispatch(modifyServiceHistoryStart());

    requestMethod = requestMethod.toLowerCase();

    if (
      requestMethod !== "post" &&
      requestMethod !== "put" &&
      requestMethod !== "delete"
    ) {
      dispatch(modifyServiceHistoryFailure("Invalid Request"));
      dispatch(createAlert("Invalid Request", 2));
    } else if (demoModeEnabled) {
      switch (requestMethod) {
        case "put":
          dispatch(
            editServiceRecordSuccess(processRecordData(serviceHistoryData))
          );
          dispatch(createAlert("Service record has been successfully changed"));
          break;
        case "post":
          dispatch(
            addServiceRecordSuccess(processRecordData(serviceHistoryData))
          );
          dispatch(createAlert("New service record added"));
          break;
        case "delete":
          dispatch(deleteServiceRecordSuccess(serviceHistoryData));
          dispatch(createAlert("Service record has been deleted"));
          break;
        default:
      }
    } else {
      const res = await fetch("/api/service-history", {
        method: requestMethod,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serviceHistoryData),
      });

      const data = await res.json();

      if (data.error) {
        dispatch(modifyServiceHistoryFailure(data));
        dispatch(createAlert(`Error: ${data.error}`, 2));
      } else {
        switch (requestMethod) {
          case "put":
            dispatch(editServiceRecordSuccess(data));
            dispatch(
              createAlert("Service record has been successfully changed")
            );
            break;
          case "post":
            dispatch(addServiceRecordSuccess(data));
            dispatch(createAlert("New service record added"));
            break;
          case "delete":
            dispatch(deleteServiceRecordSuccess(data));
            dispatch(createAlert("Service record has been deleted"));
            break;
          default:
        }
      }
    }
  };
}
