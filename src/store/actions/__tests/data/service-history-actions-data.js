import * as ActionTypes from "../../../action-types";

export const addData = {
  id: -1,
  user_id: 0,
  date: "12-25-2020",
  car_id: 1,
  location_id: -1,
  location_name: "",
  address: "",
  city: "",
  state: "",
  zip_code: "",
  new_services: ["Oil change", "Tire replacement"],
  services: [1, 2, 3],
  cost: "12.34",
  notes: null,
};

export const addPayload = {
  record: {
    id: 1,
    user_id: 0,
    service_date: "2020-12-25T05:00:00.000Z",
    cost: "12.34",
    notes: null,
    car_id: 1,
    location_id: null,
    provided_services_ids: [1, 2, 3, 4, 5],
  },
  services: [
    { id: 4, user_id: 0, sname: "Oil change" },
    { id: 5, user_id: 0, sname: "Tire replacement" },
  ],
  location: null,
};

export const addDemoPayload = Object.assign(
  {},
  addPayload,
  {
    record: Object.assign({}, addPayload.record, {
      id: 1593751669379,
      provided_services_ids: [1, 2, 3, 15937516693790, 15937516693791],
    }),
  },
  {
    services: [
      { id: 15937516693790, user_id: 0, sname: "Oil change" },
      { id: 15937516693791, user_id: 0, sname: "Tire replacement" },
    ],
  }
);

export const addActions = [
  { type: ActionTypes.MODIFY_SERVICE_HISTORY_START },
  {
    type: ActionTypes.ADD_SERVICE_RECORD_SUCCESS,
    payload: addPayload,
  },
];

export const addDemoActions = [
  { type: ActionTypes.MODIFY_SERVICE_HISTORY_START },
  {
    type: ActionTypes.ADD_SERVICE_RECORD_SUCCESS,
    payload: addDemoPayload,
  },
];

export const editData = {
  id: 1,
  user_id: 0,
  date: "12-20-2020",
  car_id: 1,
  location_id: -1,
  location_name: "",
  address: "",
  city: "",
  state: "",
  zip_code: "",
  new_services: [],
  services: [1, 2, 3, 4, 5],
  cost: "12.34",
  notes: null,
};

export const editPayload = {
  record: {
    id: 1,
    user_id: 0,
    service_date: "2020-12-20T05:00:00.000Z",
    cost: "12.34",
    notes: null,
    car_id: 1,
    location_id: null,
    provided_services_ids: [1, 2, 3, 4, 5],
  },
  services: [],
  location: null,
};

export const editDemoPayload = editPayload;

export const editActions = [
  { type: ActionTypes.MODIFY_SERVICE_HISTORY_START },
  {
    type: ActionTypes.EDIT_SERVICE_RECORD_SUCCESS,
    payload: editPayload,
  },
];

export const deleteData = { id: 1 };

export const deletePayload = deleteData;

export const deleteActions = [
  { type: ActionTypes.MODIFY_SERVICE_HISTORY_START },
  {
    type: ActionTypes.DELETE_SERVICE_RECORD_SUCCESS,
    payload: deletePayload,
  },
];

export const modifyErrorData = addData;

export const modifyErrorPayload = { error: "Unable to modify service history" };

export const modifyErrorActions = [
  { type: ActionTypes.MODIFY_SERVICE_HISTORY_START },
  {
    type: ActionTypes.MODIFY_SERVICE_HISTORY_FAILURE,
    payload: { error: "Unable to modify service history" },
  },
];
