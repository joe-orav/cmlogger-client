import * as ActionTypes from "../action-types";

export default function serviceHistoryReducer(state = {}, action) {
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
