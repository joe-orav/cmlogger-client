import * as ActionTypes from "../../../action-types";

export const deleteData = [1, 2, 3, 4];

export const deletePayload = { serviceIDs: [1, 2, 3, 4] };

export const deleteActions = [
  { type: ActionTypes.MODIFY_SERVICE_DATA_START },
  {
    type: ActionTypes.DELETE_SERVICE_DATA_SUCCESS,
    payload: deletePayload,
  },
  {
    type: ActionTypes.DISPLAY_ALERT,
    payload: {message: "Services successfully deleted", type: "success"},
  },
];

export const modifyErrorData = deleteData;

export const modifyErrorPayload = {
  error: "Unable to modify services data",
};

export const modifyErrorActions = [
  { type: ActionTypes.MODIFY_SERVICE_DATA_START },
  {
    type: ActionTypes.MODIFY_SERVICE_DATA_FAILURE,
    payload: { error: "Unable to modify services data" },
  },
  {
    type: ActionTypes.DISPLAY_ALERT,
    payload: {message: "Error: Unable to modify services data", type: "danger"},
  },
];