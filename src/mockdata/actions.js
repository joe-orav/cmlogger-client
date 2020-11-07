import * as ActionTypes from "../store/action-types"

export const carActions = {
  fetch: {
    payload: [
      {
        id: 1,
        user_id: 0,
        type: "sedan",
        car_year: 2017,
        make: "Toyota",
        model: "Camry",
        VIN: "D64MFO3BG85NJ02G7",
      },
    ],
    actions: [
      { type: ActionTypes.FETCH_CAR_DATA_START },
      {
        type: ActionTypes.FETCH_CAR_DATA_SUCCESS,
        payload: [
          {
            id: 1,
            user_id: 0,
            type: "sedan",
            car_year: 2017,
            make: "Toyota",
            model: "Camry",
            VIN: "D64MFO3BG85NJ02G7",
          },
        ],
      },
    ],
  },
  fetch_error: {
    payload: { error: "Unable to get car" },
    actions: [
      { type: ActionTypes.FETCH_CAR_DATA_START },
      {
        type: ActionTypes.FETCH_CAR_DATA_FAILURE,
        payload: { error: "Unable to get car" },
      },
    ],
  },
  add: {
    data: {
      user_id: 0,
      id: -1,
      type: "sedan",
      car_year: 2020,
      make: "Toyota",
      model: "Camry",
      vin: "D64MFO3BG85NJ02G7",
    },
    payload: {
      user_id: 0,
      id: 2,
      type: "sedan",
      car_year: 2020,
      make: "Toyota",
      model: "Camry",
      vin: "D64MFO3BG85NJ02G7",
    },
    payload_demo: {
      user_id: 0,
      id: 1593751669379,
      type: "sedan",
      car_year: 2020,
      make: "Toyota",
      model: "Camry",
      vin: "D64MFO3BG85NJ02G7",
    },
    actions: [
      { type: ActionTypes.MODIFY_CAR_DATA_START },
      {
        type: ActionTypes.ADD_CAR_SUCCESS,
        payload: {
          user_id: 0,
          id: 2,
          type: "sedan",
          car_year: 2020,
          make: "Toyota",
          model: "Camry",
          vin: "D64MFO3BG85NJ02G7",
        },
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: { message: "New car added", type: "success" },
      },
    ],
    actions_demo: [
      { type: ActionTypes.MODIFY_CAR_DATA_START },
      {
        type: ActionTypes.ADD_CAR_SUCCESS,
        payload: {
          user_id: 0,
          id: 1593751669379,
          type: "sedan",
          car_year: 2020,
          make: "Toyota",
          model: "Camry",
          vin: "D64MFO3BG85NJ02G7",
        },
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: { message: "New car added", type: "success" },
      },
    ],
  },
  edit: {
    data: {
      user_id: 0,
      id: 2,
      type: "sedan",
      car_year: 2020,
      make: "Toyota",
      model: "Camry",
      vin: "D64MFO3BG85NJ02G7",
    },
    payload: {
      user_id: 0,
      id: 2,
      type: "sedan",
      car_year: 2020,
      make: "Toyota",
      model: "Camry",
      vin: "D64MFO3BG85NJ02G7",
    },
    actions: [
      { type: ActionTypes.MODIFY_CAR_DATA_START },
      {
        type: ActionTypes.EDIT_CAR_SUCCESS,
        payload: {
          user_id: 0,
          id: 2,
          type: "sedan",
          car_year: 2020,
          make: "Toyota",
          model: "Camry",
          vin: "D64MFO3BG85NJ02G7",
        },
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: {
          message: "Car details successfully changed",
          type: "success",
        },
      },
    ],
  },
  delete: {
    data: { id: 2 },
    payload: { id: 2 },
    actions: [
      { type: ActionTypes.MODIFY_CAR_DATA_START },
      {
        type: ActionTypes.DELETE_CAR_SUCCESS,
        payload: { id: 2 },
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: { message: "Car has been deleted", type: "success" },
      },
    ],
  },
  error: {
    data: {
      user_id: 0,
      id: -1,
      type: "sedan",
      car_year: 2020,
      make: "Toyota",
      model: "Camry",
      vin: "D64MFO3BG85NJ02G7",
    },
    payload: { error: "Unable to modify car data" },
    actions: [
      { type: ActionTypes.MODIFY_CAR_DATA_START },
      {
        type: ActionTypes.MODIFY_CAR_DATA_FAILURE,
        payload: { error: "Unable to modify car data" },
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: {
          message: "Error: Unable to modify car data",
          type: "danger",
        },
      },
    ],
  },
}

export const locationActions = {
  fetch: {
    payload: {
      id: 100,
      user_id: 0,
      name: "Test Place",
      address: "123 Abc St",
      city: "TestCity",
      state: "TS",
      zip_code: "123456",
      other: null
    },
    actions: [
      { type: ActionTypes.FETCH_LOCATION_DATA_START },
      {
        type: ActionTypes.FETCH_LOCATION_DATA_SUCCESS,
        payload: {
          id: 100,
          user_id: 0,
          name: "Test Place",
          address: "123 Abc St",
          city: "TestCity",
          state: "TS",
          zip_code: "123456",
          other: null
        },
      },
    ],
  },
  fetch_error: {
    payload: { error: "Unable to get locations" },
    actions: [
      { type: ActionTypes.FETCH_LOCATION_DATA_START },
      {
        type: ActionTypes.FETCH_LOCATION_DATA_FAILURE,
        payload: { error: "Unable to get locations" },
      },
    ],
  },
  delete: {
    data: [1, 2, 3, 4],
    payload: { locationIDs: [1, 2, 3, 4] },
    actions: [
      { type: ActionTypes.MODIFY_LOCATION_DATA_START },
      {
        type: ActionTypes.DELETE_LOCATION_DATA_SUCCESS,
        payload: { locationIDs: [1, 2, 3, 4] },
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: { message: "Locations successfully deleted", type: "success" },
      },
    ],
  },
  error: {
    data: [1, 2, 3, 4],
    payload: { error: "Unable to modify locations data" },
    actions: [
      { type: ActionTypes.MODIFY_LOCATION_DATA_START },
      {
        type: ActionTypes.MODIFY_LOCATION_DATA_FAILURE,
        payload: { error: "Unable to modify locations data" },
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: {
          message: "Error: Unable to modify locations data",
          type: "danger",
        },
      },
    ],
  },
}

export const serviceActions = {
  fetch: {
    payload: [
      { id: 100, user_id: 0, sname: "Oil Change" },
      { id: 200, user_id: 0, sname: "Tire replacement" },
    ],
    actions: [
      { type: ActionTypes.FETCH_SERVICE_DATA_START },
      {
        type: ActionTypes.FETCH_SERVICE_DATA_SUCCESS,
        payload: [
          { id: 100, user_id: 0, sname: "Oil Change" },
          { id: 200, user_id: 0, sname: "Tire replacement" },
        ],
      },
    ],
  },
  fetch_error: {
    payload: { error: "Unable to get services" },
    actions: [
      { type: ActionTypes.FETCH_SERVICE_DATA_START },
      {
        type: ActionTypes.FETCH_SERVICE_DATA_FAILURE,
        payload: { error: "Unable to get services" },
      },
    ],
  },
  delete: {
    data: [1, 2, 3, 4],
    payload: { serviceIDs: [1, 2, 3, 4] },
    actions: [
      { type: ActionTypes.MODIFY_SERVICE_DATA_START },
      {
        type: ActionTypes.DELETE_SERVICE_DATA_SUCCESS,
        payload: { serviceIDs: [1, 2, 3, 4] },
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: { message: "Services successfully deleted", type: "success" },
      },
    ],
  },
  error: {
    data: [1, 2, 3, 4],
    payload: {
      error: "Unable to modify services data",
    },
    actions: [
      { type: ActionTypes.MODIFY_SERVICE_DATA_START },
      {
        type: ActionTypes.MODIFY_SERVICE_DATA_FAILURE,
        payload: { error: "Unable to modify services data" },
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: {
          message: "Error: Unable to modify services data",
          type: "danger",
        },
      },
    ],
  },
}

export const serviceHistoryActions = {
  fetch: {
    payload: [
      {
        id: 1,
        service_date: "2020-10-17T04:00:00.000Z",
        cost: "100.00",
        notes: null,
        car_id: 1,
        location_id: 1,
        provided_services_ids: [1, 2, 3],
      },
    ],
    actions: [
      { type: ActionTypes.FETCH_SH_DATA_START },
      {
        type: ActionTypes.FETCH_SH_DATA_SUCCESS,
        payload: [
          {
            id: 1,
            service_date: "2020-10-17T04:00:00.000Z",
            cost: "100.00",
            notes: null,
            car_id: 1,
            location_id: 1,
            provided_services_ids: [1, 2, 3],
          },
        ],
      },
    ],
  },
  fetch_error: {
    payload: { error: "Unable to get service history" },
    actions: [
      { type: ActionTypes.FETCH_SH_DATA_START },
      {
        type: ActionTypes.FETCH_SH_DATA_FAILURE,
        payload: { error: "Unable to get service history" },
      },
    ],
  },
  add: {
    data: {
      id: -1,
      user_id: 0,
      date: "2020-12-25",
      car_id: 1,
      location_id: -1,
      location_name: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      loc_other: "",
      new_services: ["Oil change", "Tire replacement"],
      services: [1, 2, 3],
      cost: "12.34",
      notes: null,
    },
    payload: {
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
    },
    payload_demo: {
      record: {
        id: 1593751669379,
        user_id: 0,
        service_date: "2020-12-25T05:00:00.000Z",
        cost: "12.34",
        notes: null,
        car_id: 1,
        location_id: null,
        provided_services_ids: [1, 2, 3, 15937516693790, 15937516693791],
      },
      services: [
        { id: 15937516693790, user_id: 0, sname: "Oil change" },
        { id: 15937516693791, user_id: 0, sname: "Tire replacement" },
      ],
      location: null,
    },
    actions: [
      { type: ActionTypes.MODIFY_SERVICE_HISTORY_START },
      {
        type: ActionTypes.ADD_SERVICE_RECORD_SUCCESS,
        payload: {
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
        },
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: { message: "New service record added", type: "success" },
      },
    ],
    actions_demo: [
      { type: ActionTypes.MODIFY_SERVICE_HISTORY_START },
      {
        type: ActionTypes.ADD_SERVICE_RECORD_SUCCESS,
        payload: {
          record: {
            id: 1593751669379,
            user_id: 0,
            service_date: "2020-12-25T05:00:00.000Z",
            cost: "12.34",
            notes: null,
            car_id: 1,
            location_id: null,
            provided_services_ids: [1, 2, 3, 15937516693790, 15937516693791],
          },
          services: [
            { id: 15937516693790, user_id: 0, sname: "Oil change" },
            { id: 15937516693791, user_id: 0, sname: "Tire replacement" },
          ],
          location: null,
        },
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: { message: "New service record added", type: "success" },
      },
    ],
  },
  edit: {
    data: {
      id: 1,
      user_id: 0,
      date: "2020-12-20",
      car_id: 1,
      location_id: -1,
      location_name: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      loc_other: "",
      new_services: [],
      services: [1, 2, 3, 4, 5],
      cost: "12.34",
      notes: null,
    },
    payload: {
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
    },
    payload_demo: {
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
    },
    actions: [
      { type: ActionTypes.MODIFY_SERVICE_HISTORY_START },
      {
        type: ActionTypes.EDIT_SERVICE_RECORD_SUCCESS,
        payload: {
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
        },
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: {
          message: "Service record has been successfully changed",
          type: "success",
        },
      },
    ],
    actions_demo: [
      { type: ActionTypes.MODIFY_SERVICE_HISTORY_START },
      {
        type: ActionTypes.EDIT_SERVICE_RECORD_SUCCESS,
        payload: {
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
        },
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: {
          message: "Service record has been successfully changed",
          type: "success",
        },
      },
    ],
  },
  delete: {
    data: { id: 1 },
    payload: { id: 1 },
    actions: [
      { type: ActionTypes.MODIFY_SERVICE_HISTORY_START },
      {
        type: ActionTypes.DELETE_SERVICE_RECORD_SUCCESS,
        payload: { id: 1 },
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: {
          message: "Service record has been deleted",
          type: "success",
        },
      },
    ],
  },
  error: {
    data: {
      id: -1,
      user_id: 0,
      date: "2020-12-25",
      car_id: 1,
      location_id: -1,
      location_name: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      loc_other: "",
      new_services: ["Oil change", "Tire replacement"],
      services: [1, 2, 3],
      cost: "12.34",
      notes: null,
    },
    payload: { error: "Unable to modify service history" },
    actions: [
      { type: ActionTypes.MODIFY_SERVICE_HISTORY_START },
      {
        type: ActionTypes.MODIFY_SERVICE_HISTORY_FAILURE,
        payload: { error: "Unable to modify service history" },
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: {
          message: "Error: Unable to modify service history",
          type: "danger",
        },
      },
    ],
  },
}
