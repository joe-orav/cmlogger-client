import * as ActionTypes from "./action-types";
import { combineReducers } from "redux";

function userReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_USER_DATA_START:
      return {
        loading: true,
        error: null,
        profile: {
          id: null,
          name: "",
          googleConnected: false,
          facebookConnected: false,
          google_pic: null,
          facebook_pic: null,
          default_pic: null,
        },
      };
    case ActionTypes.FETCH_USER_DATA_SUCCESS:
      return {
        loading: false,
        error: null,
        profile: {
          id: action.payload.id,
          name: action.payload.name,
          googleConnected: action.payload.google_id !== null,
          facebookConnected: action.payload.facebook_id !== null,
          google_pic: action.payload.google_profile_pic,
          facebook_pic: action.payload.fb_profile_pic,
          default_pic: action.payload.default_pic,
        },
      };
    case ActionTypes.FETCH_USER_DATA_FAILURE:
      return {
        loading: false,
        error: action.payload.error,
        profile: {
          id: null,
          name: "",
          googleConnected: false,
          facebookConnected: false,
          google_pic: null,
          facebook_pic: null,
          default_pic: null,
        },
      };
    case ActionTypes.DISCONNECT_ACCOUNT:
      return {
        loading: false,
        error: null,
        profile: {
          id: action.payload.id,
          name: action.payload.name,
          googleConnected: action.payload.google_id !== null,
          facebookConnected: action.payload.facebook_id !== null,
          google_pic: action.payload.google_profile_pic,
          facebook_pic: action.payload.fb_profile_pic,
          default_pic: action.payload.default_pic,
        },
      };
    case ActionTypes.DELETE_ACCOUNT:
      return {
        loading: false,
        error: null,
        profile: {
          id: null,
          name: "",
          googleConnected: false,
          facebookConnected: false,
          google_pic: null,
          facebook_pic: null,
          default_pic: null,
        },
      };
    default:
      return state;
  }
}

function carsReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_CAR_DATA_START:
      return {
        items: [],
        loading: true,
        error: null,
      };
    case ActionTypes.FETCH_CAR_DATA_SUCCESS:
      return {
        items: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.FETCH_CAR_DATA_FAILURE:
      return {
        items: [],
        loading: false,
        error: action.payload.error,
      };
    case ActionTypes.MODIFY_CAR_DATA_FAILURE:
      return {
        items: [...state.items],
        loading: false,
        error: action.error,
      };
    case ActionTypes.EDIT_CAR_SUCCESS:
      return Object.assign({}, state, {
        items: state.items.map((item) => {
          return item.id === action.payload.id ? action.payload : item;
        }),
      });
    case ActionTypes.ADD_CAR_SUCCESS:
      return Object.assign({}, state, {
        items: [...state.items, action.payload],
      });
    case ActionTypes.DELETE_CAR_SUCCESS:
      return Object.assign({}, state, {
        items: state.items.filter((item) => {
          return item.id !== action.payload.id;
        }),
      });
    case ActionTypes.DELETE_ACCOUNT:
      return {
        items: [],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

function serviceHistoryReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_SH_DATA_START:
      return {
        items: [],
        loading: true,
        error: null,
      };
    case ActionTypes.FETCH_SH_DATA_SUCCESS:
      return {
        items: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.FETCH_SH_DATA_FAILURE:
      return {
        items: [],
        loading: false,
        error: action.payload.error,
      };
    case ActionTypes.DELETE_CAR_SUCCESS:
      return Object.assign({}, state, {
        items: state.items.filter((item) => {
          return item.car_id !== action.payload.id;
        }),
      });
    case ActionTypes.EDIT_SERVICE_RECORD_SUCCESS:
      return Object.assign({}, state, {
        items: state.items.map((item) => {
          if (item.id === action.payload.record.id) {
            return action.payload.record;
          } else {
            return item;
          }
        }),
      });
    case ActionTypes.ADD_SERVICE_RECORD_SUCCESS:
      return Object.assign({}, state, {
        items: [...state.items, action.payload.record],
      });
    case ActionTypes.DELETE_SERVICE_RECORD_SUCCESS:
      return Object.assign({}, state, {
        items: state.items.filter((item) => item.id !== action.payload.id),
      });
    case ActionTypes.DELETE_ACCOUNT:
      return {
        items: [],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

function servicesReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_SERVICE_DATA_START:
      return {
        items: [],
        loading: true,
        error: null,
      };
    case ActionTypes.FETCH_SERVICE_DATA_SUCCESS:
      return {
        items: action.payload.map((service) => {
          return {
            id: service.id,
            user_id: service.user_id,
            sname: service.sname,
          };
        }),
        loading: false,
        error: null,
      };
    case ActionTypes.FETCH_SERVICE_DATA_FAILURE:
      return {
        items: [],
        loading: false,
        error: action.payload.error,
      };
    case ActionTypes.EDIT_SERVICE_RECORD_SUCCESS:
    case ActionTypes.ADD_SERVICE_RECORD_SUCCESS:
      return Object.assign({}, state, {
        items: [...state.items, ...action.payload.services],
      });
    case ActionTypes.DELETE_SERVICE_DATA_SUCCESS:
      return Object.assign({}, state, {
        items: state.items.filter((item) => {
          return action.payload.serviceIDs.indexOf(item.id) === -1;
        }),
      });
    case ActionTypes.DELETE_ACCOUNT:
      return {
        items: [],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

function locationsReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_LOCATION_DATA_START:
      return {
        items: [],
        loading: true,
        error: null,
      };
    case ActionTypes.FETCH_LOCATION_DATA_SUCCESS:
      return {
        items: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.FETCH_LOCATION_DATA_FAILURE:
      return {
        items: [],
        loading: false,
        error: action.payload.error,
      };
    case ActionTypes.EDIT_SERVICE_RECORD_SUCCESS:
    case ActionTypes.ADD_SERVICE_RECORD_SUCCESS:
      if (action.payload.location) {
        return Object.assign({}, state, {
          items: [...state.items, action.payload.location],
        });
      } else {
        return state;
      }
    case ActionTypes.DELETE_LOCATION_DATA_SUCCESS:
      return Object.assign({}, state, {
        items: state.items.filter((item) => {
          return action.payload.locationIDs.indexOf(item.id) === -1;
        }),
      });
    case ActionTypes.DELETE_ACCOUNT:
      return {
        items: [],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

function alertsReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.DISPLAY_ALERT:
      return [...state, action.payload];
    case ActionTypes.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
}

function fetchReducer(state = false, action) {
  switch (action.type) {
    case ActionTypes.FETCH_SH_DATA_SUCCESS:
      return true;
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  user: userReducer,
  cars: carsReducer,
  serviceHistory: serviceHistoryReducer,
  services: servicesReducer,
  locations: locationsReducer,
  alerts: alertsReducer,
  fetchComplete: fetchReducer,
});
