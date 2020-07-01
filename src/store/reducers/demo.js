import * as ActionTypes from "../action-types";

export default function demoReducer(state = false, action) {
  switch (action.type) {
    case ActionTypes.ENABLE_DEMO_MODE:
      return true;
    case ActionTypes.DISABLE_DEMO_MODE:
      return false;
    default:
      return state;
  }
}
