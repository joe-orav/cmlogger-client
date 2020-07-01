import * as ActionTypes from "../../action-types";
import userReducer from "../user";
import carsReducer from "../cars";
import serviceHistoryReducer from "../service-history";
import servicesReducer from "../services";
import locationsReducer from "../locations";
import * as Cars from "./data/cars";
import * as Services from "./data/services";
import * as Locations from "./data/locations";
import * as User from "./data/user";
import * as ServiceHistory from "./data/service-history";
import demoDefaultPic from "../../../img/default_pic.png";

describe("User information", () => {
  let state;

  beforeAll(() => {
    state = {
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
  });

  test("Loading user data", () => {
    state = userReducer(state, {
      type: ActionTypes.FETCH_USER_DATA_START,
    });
    expect(state).toEqual({
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
    });
  });

  test("Get error when data retrieval fails", () => {
    state = userReducer(state, {
      type: ActionTypes.FETCH_USER_DATA_FAILURE,
      payload: User.fetchError,
    });
    expect(state).toEqual(User.fetchErrorOutput);
  });

  test("Get user data", () => {
    state = userReducer(state, {
      type: ActionTypes.FETCH_USER_DATA_SUCCESS,
      payload: User.fetchData,
    });
    expect(state).toEqual(User.fetchDataOutput);
  });

  test("Disconnecting Google Account", () => {
    state = userReducer(state, {
      type: ActionTypes.DISCONNECT_ACCOUNT,
      payload: User.disconnectGoogleAccount,
    });
    expect(state).toEqual(User.disconnectGoogleAccountOutput);
    state = User.fetchDataOutput;
  });

  test("Disconnecting Facebook Account", () => {
    state = userReducer(state, {
      type: ActionTypes.DISCONNECT_ACCOUNT,
      payload: User.disconnectFBAccount,
    });
    expect(state).toEqual(User.disconnectFBAccountOutput);
    state = User.fetchDataOutput;
  });

  test.each`
    payload                        | action                                    | output
    ${User.disconnectAccountError} | ${ActionTypes.DISCONNECT_ACCOUNT_FAILURE} | ${User.disconnectAccountErrorOutput}
    ${User.deleteAccountError}     | ${ActionTypes.DELETE_ACCOUNT_FAILURE}     | ${User.deleteAccountErrorOutput}
  `(
    "Return $output after receiving the $action action with the following data: $payload",
    ({ payload, action, output }) => {
      state = userReducer(state, { type: action, payload: payload });
      expect(state).toEqual(output);
    }
  );

  test("Deleting account", () => {
    state = userReducer(
      {},
      {
        type: ActionTypes.DELETE_ACCOUNT,
      }
    );
    expect(state).toEqual({
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
    });
  });

  test("Setting demo user", () => {
    state = userReducer(
      {},
      {
        type: ActionTypes.ENABLE_DEMO_MODE,
      }
    );
    expect(state).toEqual({
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
    });
  });
});

describe("Resetting data on account deletion", () => {
  test.each`
    fetchedData                       | reducer
    ${Cars.fetchDataOutput}           | ${carsReducer}
    ${Services.fetchDataOutput}       | ${servicesReducer}
    ${Locations.fetchDataOutput}      | ${locationsReducer}
    ${ServiceHistory.fetchDataOutput} | ${serviceHistoryReducer}
  `(
    "Return $output after receiving the $action action with the following data: $payload",
    ({ fetchedData, reducer }) => {
      let state = fetchedData;
      state = reducer(state, { type: ActionTypes.DELETE_ACCOUNT });
      expect(state).toEqual({
        items: [],
        loading: false,
        error: null,
      });
    }
  );
});
