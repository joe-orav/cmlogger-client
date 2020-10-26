import * as ActionTypes from "../action-types";

export default function fetchReducer(state = false, action) {
  switch (action.type) {
    case ActionTypes.FETCH_SH_DATA_SUCCESS:
    case ActionTypes.ENABLE_DEMO_MODE:
      return true;
    default:
      return state;
  }
}
