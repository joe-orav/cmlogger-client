import * as ActionTypes from "../action-types";
import demoDefaultPic from "../../img/default_pic.png";

export default function userReducer(state = {}, action) {
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
    case ActionTypes.ENABLE_DEMO_MODE:
      return {
        loading: false,
        error: null,
        profile: {
          id: 0,
          name: "Demo User",
          googleConnected: null,
          facebookConnected: null,
          google_pic: "",
          facebook_pic: "",
          default_pic: demoDefaultPic,
        },
      };
    case ActionTypes.FETCH_USER_DATA_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error,
      });
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
    case ActionTypes.DISCONNECT_ACCOUNT_FAILURE:
    case ActionTypes.DELETE_ACCOUNT_FAILURE:
      return Object.assign({}, state, { error: action.payload.error });
    default:
      return state;
  }
}
