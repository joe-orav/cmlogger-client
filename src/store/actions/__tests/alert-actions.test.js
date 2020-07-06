import createAlert from "../alert-actions";
import * as ActionTypes from "../../action-types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore([]);

describe("Dispatching alerts", () => {
  jest.useFakeTimers();
  let message = "Test Message";

  afterEach(() => {
    store.clearActions();
    jest.clearAllTimers();
  });

  test("Dispatching a successful alert", () => {
    let expectedActions = [
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: { message: message, type: "success" },
      },
      {
        type: ActionTypes.REMOVE_ALERT,
      },
    ];

    return store.dispatch(createAlert(message)).then(() => {
      jest.advanceTimersByTime(3000);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test("Dispatching a danger alert", () => {
    let expectedActions = [
      {
        type: ActionTypes.DISPLAY_ALERT,
        payload: { message: message, type: "danger" },
      },
      {
        type: ActionTypes.REMOVE_ALERT,
      },
    ];

    return store.dispatch(createAlert(message, 2)).then(() => {
      jest.advanceTimersByTime(3000);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
