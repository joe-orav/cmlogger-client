import createAlert from "../alert-actions";
import * as ActionTypes from "../../action-types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore([]);

describe("Dispatching alerts", () => {
  let message = "Test Message";

  afterEach(() => {
    store.clearActions();
  });

  test("Dispatching a successful alert", (done) => {
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
      setTimeout(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      }, 3000);
    });
  });

  test("Dispatching a danger alert", (done) => {
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
      setTimeout(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      }, 3000);
    });
  });
});
