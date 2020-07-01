import * as ActionTypes from "../action-types";

export default function carsReducer(state = {}, action) {
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
        error: action.payload.error,
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
