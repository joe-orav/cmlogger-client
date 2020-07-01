import * as ActionTypes from "../action-types";

export default function alertsReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.DISPLAY_ALERT:
      return [...state, action.payload];
    case ActionTypes.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
}
