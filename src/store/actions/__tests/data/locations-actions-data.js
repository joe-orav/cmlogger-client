import * as ActionTypes from "../../../action-types";

export const deleteData = [1,2,3,4];

export const deletePayload = { locationIDs: [1,2,3,4] };

export const deleteActions = [
  { type: ActionTypes.MODIFY_LOCATION_DATA_START },
  {
    type: ActionTypes.DELETE_LOCATION_DATA_SUCCESS,
    payload: deletePayload,
  },
];

export const modifyErrorData = deleteData;

export const modifyErrorPayload = { error: "Unable to modify locations data" };

export const modifyErrorActions = [
  { type: ActionTypes.MODIFY_LOCATION_DATA_START },
  {
    type: ActionTypes.MODIFY_LOCATION_DATA_FAILURE,
    payload: { error: "Unable to modify locations data" },
  },
];
