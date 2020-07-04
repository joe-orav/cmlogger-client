import {
  fetchUserData,
  disconnectAccount,
  deleteAccount,
} from "../user-actions";
import * as ActionTypes from "../../action-types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({ loading: false, error: null, items: [] });

describe("Dispatching actions for retrieving user data", () => {
  afterEach(() => {
    fetchMock.restore();
    store.clearActions();
  });

  test("Dispatching action when fetching succeeds", () => {
    fetchMock.mock("/api/user", {
      body: {
        id: 0,
        name: "Test User",
        google_id: 123,
        facebook_id: 456,
        google_profile_pic: "http://path/to/google_picture",
        fb_profile_pic: "http://path/to/fb_picture",
        default_pic: "http://path/to/google_picture",
      },
      status: 200,
    });

    let expectedActions = [
      { type: ActionTypes.FETCH_USER_DATA_START },
      {
        type: ActionTypes.FETCH_USER_DATA_SUCCESS,
        payload: {
          id: 0,
          name: "Test User",
          google_id: 123,
          facebook_id: 456,
          google_profile_pic: "http://path/to/google_picture",
          fb_profile_pic: "http://path/to/fb_picture",
          default_pic: "http://path/to/google_picture",
        },
      },
    ];

    return store.dispatch(fetchUserData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test("Dispatching action when fetching fails", () => {
    fetchMock.mock("/api/user", {
      body: { error: "Unable to get user data" },
      status: 200,
    });

    let expectedActions = [
      { type: ActionTypes.FETCH_USER_DATA_START },
      {
        type: ActionTypes.FETCH_USER_DATA_FAILURE,
        payload: { error: "Unable to get user data" },
      },
    ];

    return store.dispatch(fetchUserData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Dispatching actions for disconnecting a linked account", () => {
  afterEach(() => {
    fetchMock.restore();
    store.clearActions();
  });

  let userData = { userId: 0, providerName: "google" };

  let userDataPayload = {
    id: 0,
    name: "Test User",
    google_id: null,
    facebook_id: 456,
    google_profile_pic: null,
    fb_profile_pic: "http://path/to/fb_picture",
    default_pic: "http://path/to/fb_picture",
  };

  let userDataErrorPayload = {error: "Unable to modify user data"}

  test("Dispatching action when disconnection succeeds", () => {
    fetchMock.mock(
      "/api/user/disconnect",
      {
        body: userDataPayload,
        status: 200,
      },
      {
        method: "PUT",
        body: userData,
        headers: { "Content-Type": "application/json" },
      }
    );

    let expectedActions = [
      {
        type: ActionTypes.DISCONNECT_ACCOUNT,
        payload: userDataPayload,
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: {message: "Account has been disconnected", type: "danger"},
      },
    ];

    return store.dispatch(disconnectAccount(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test("Dispatching action when disconnection fails", () => {
    fetchMock.mock(
      "/api/user/disconnect",
      {
        body: userDataErrorPayload,
        status: 200,
      },
      {
        method: "PUT",
        body: userData,
        headers: { "Content-Type": "application/json" },
      }
    );

    let expectedActions = [
      {
        type: ActionTypes.DISCONNECT_ACCOUNT_FAILURE,
        payload: userDataErrorPayload,
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: {message: "Unable to disconnect account", type: "danger"},
      },
    ];

    return store.dispatch(disconnectAccount(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Dispatching actions for deleting user data", () => {
  afterEach(() => {
    fetchMock.restore();
    store.clearActions();
  });

  let userData = { userId: 0 };

  let userDataErrorPayload = {error: "Unable to delete account"}

  test("Dispatching action when deletion succeeds", () => {
    fetchMock.mock(
      "/api/user/delete",
      {
        accountDeleted: true,
        status: 200,
      },
      {
        method: "POST",
        redirect: "follow",
        body: userData,
        headers: { "Content-Type": "application/json" },
      }
    );

    let expectedActions = [
      {
        type: ActionTypes.DELETE_ACCOUNT,
      },
    ];

    return store.dispatch(deleteAccount(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test("Dispatching action when deletion fails", () => {
    fetchMock.mock(
      "/api/user/delete",
      {
        body: userDataErrorPayload,
        status: 200,
      },
      {
        method: "POST",
        redirect: "follow",
        body: userData,
        headers: { "Content-Type": "application/json" },
      }
    );

    let expectedActions = [
      {
        type: ActionTypes.DELETE_ACCOUNT_FAILURE,
        payload: userDataErrorPayload,
      },
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: {message: "Error: Unable to delete account", type: "danger"},
      },
    ];

    return store.dispatch(deleteAccount(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});