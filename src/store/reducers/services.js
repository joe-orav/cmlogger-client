import * as ActionTypes from "../action-types";

export default function servicesReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_SERVICE_DATA_START:
      return {
        items: [],
        loading: true,
        error: null,
      };
    case ActionTypes.FETCH_SERVICE_DATA_SUCCESS:
      return {
        items: action.payload,
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
