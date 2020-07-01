import * as ActionTypes from "../action-types";

export default function locationsReducer(state = {}, action) {
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
