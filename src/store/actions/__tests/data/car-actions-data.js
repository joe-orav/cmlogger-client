import * as ActionTypes from "../../../action-types";

export const addData = {
  user_id: 0,
  id: -1,
  type: "sedan",
  car_year: 2020,
  make: "Toyota",
  model: "Camry",
  vin: "D64MFO3BG85NJ02G7",
};

export const addPayload = {
  user_id: 0,
  id: 2,
  type: "sedan",
  car_year: 2020,
  make: "Toyota",
  model: "Camry",
  vin: "D64MFO3BG85NJ02G7",
};

export const addDemoPayload = {
  user_id: 0,
  id: 1593751669379,
  type: "sedan",
  car_year: 2020,
  make: "Toyota",
  model: "Camry",
  vin: "D64MFO3BG85NJ02G7",
};

export const addActions = [
  { type: ActionTypes.MODIFY_CAR_DATA_START },
  {
    type: ActionTypes.ADD_CAR_SUCCESS,
    payload: addPayload,
  },
  {
    type: ActionTypes.DISPLAY_ALERT,
    payload: {message: "New car added", type: "success"},
  },
];

export const addDemoActions = [
    { type: ActionTypes.MODIFY_CAR_DATA_START },
    {
      type: ActionTypes.ADD_CAR_SUCCESS,
      payload: addDemoPayload,
    },
    {
      type: ActionTypes.DISPLAY_ALERT,
      payload: {message: "New car added", type: "success"},
    },
  ];

export const editData = {
  user_id: 0,
  id: 2,
  type: "sedan",
  car_year: 2020,
  make: "Toyota",
  model: "Camry",
  vin: "D64MFO3BG85NJ02G7",
};

export const editPayload = editData;

export const editActions = [
  { type: ActionTypes.MODIFY_CAR_DATA_START },
  {
    type: ActionTypes.EDIT_CAR_SUCCESS,
    payload: editPayload,
  },
  {
    type: ActionTypes.DISPLAY_ALERT,
    payload: {message: "Car details successfully changed", type: "success"},
  },
];

export const deleteData = { id: 2 };

export const deletePayload = deleteData;

export const deleteActions = [
  { type: ActionTypes.MODIFY_CAR_DATA_START },
  {
    type: ActionTypes.DELETE_CAR_SUCCESS,
    payload: deletePayload,
  },
  {
    type: ActionTypes.DISPLAY_ALERT,
    payload: {message: "Car has been deleted", type: "success"},
  },
];

export const modifyErrorData = addData;

export const modifyErrorPayload = { error: "Unable to modify car data" };

export const modifyErrorActions = [
  { type: ActionTypes.MODIFY_CAR_DATA_START },
  {
    type: ActionTypes.MODIFY_CAR_DATA_FAILURE,
    payload: { error: "Unable to modify car data" },
  },
  {
    type: ActionTypes.DISPLAY_ALERT,
    payload: {message: "Error: Unable to modify car data", type: "danger"},
  },
];
