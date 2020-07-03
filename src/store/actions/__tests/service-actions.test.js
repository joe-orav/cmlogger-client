import { fetchServicesData, modifyServiceData } from "../service-actions";
import * as ServiceActionsData from "./data/service-actions-data";
import * as ActionTypes from "../../action-types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({ loading: false, error: null, items: [] });

describe("Dispatching actions for retrieving service data", () => {
  afterEach(() => {
    fetchMock.restore();
    store.clearActions();
  });

  test("Dispatching action when fetching succeeds", () => {
    fetchMock.mock("/api/services", {
      body: [
        { id: 100, user_id: 0, sname: "Oil Change" },
        { id: 200, user_id: 0, sname: "Tire replacement" },
      ],
      status: 200,
    });

    let expectedActions = [
      { type: ActionTypes.FETCH_SERVICE_DATA_START },
      {
        type: ActionTypes.FETCH_SERVICE_DATA_SUCCESS,
        payload: [
          { id: 100, user_id: 0, sname: "Oil Change" },
          { id: 200, user_id: 0, sname: "Tire replacement" },
        ],
      },
    ];

    return store.dispatch(fetchServicesData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test("Dispatching action when fetching fails", () => {
    fetchMock.mock("/api/services", {
      body: { error: "Unable to get services" },
      status: 200,
    });

    let expectedActions = [
      { type: ActionTypes.FETCH_SERVICE_DATA_START },
      {
        type: ActionTypes.FETCH_SERVICE_DATA_FAILURE,
        payload: { error: "Unable to get services" },
      },
    ];

    return store.dispatch(fetchServicesData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Dispatching actions for modifying services data", () => {
  afterEach(() => {
    fetchMock.restore();
    store.clearActions();
  });

  test.each`
    data                                  | payload                                  | expectedActions                          | demoModeEnabled
    ${ServiceActionsData.deleteData}      | ${ServiceActionsData.deletePayload}      | ${ServiceActionsData.deleteActions}      | ${false}
    ${ServiceActionsData.deleteData}      | ${ServiceActionsData.deletePayload}      | ${ServiceActionsData.deleteActions}      | ${true}
    ${ServiceActionsData.modifyErrorData} | ${ServiceActionsData.modifyErrorPayload} | ${ServiceActionsData.modifyErrorActions} | ${false}
  `(
    "Send delete method and return $expectedActions",
    ({ data, payload, expectedActions, demoModeEnabled }) => {
      if (!demoModeEnabled) {
        fetchMock.mock(
          "/api/services",
          {
            body: payload,
            status: 200,
          },
          {
            method: "DELETE",
            body: { serviceIDs: data },
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      return store
        .dispatch(modifyServiceData(data, demoModeEnabled))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    }
  );
});
