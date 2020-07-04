import * as ActionTypes from "../action-types";

export default function alertsReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.DISPLAY_ALERT:
      return [...state, action.payload];
    case ActionTypes.REMOVE_ALERT:
      let newAlertState = [...state];
      newAlertState.shift();
      return newAlertState;
    default:
      return state;
  }
}
