import { fetchLocationData, modifyLocationData } from "../locations-actions";
import * as LocationsActionsData from "./data/locations-actions-data";
import * as ActionTypes from "../../action-types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({ loading: false, error: null, items: [] });

describe("Dispatching actions for retrieving location data", () => {
  afterEach(() => {
    fetchMock.restore();
    store.clearActions();
  });

  test("Dispatching action when fetching succeeds", () => {
    fetchMock.mock("/api/locations", {
      body: {
        id: 100,
        user_id: 0,
        name: "Test Place",
        address: "123 Abc St",
        city: "TestCity",
        state: "TS",
        zip_code: "123456",
      },
      status: 200,
    });

    let expectedActions = [
      { type: ActionTypes.FETCH_LOCATION_DATA_START },
      {
        type: ActionTypes.FETCH_LOCATION_DATA_SUCCESS,
        payload: {
          id: 100,
          user_id: 0,
          name: "Test Place",
          address: "123 Abc St",
          city: "TestCity",
          state: "TS",
          zip_code: "123456",
        },
      },
    ];

    return store.dispatch(fetchLocationData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test("Dispatching action when fetching fails", () => {
    fetchMock.mock("/api/locations", {
      body: { error: "Unable to get locations" },
      status: 200,
    });

    let expectedActions = [
      { type: ActionTypes.FETCH_LOCATION_DATA_START },
      {
        type: ActionTypes.FETCH_LOCATION_DATA_FAILURE,
        payload: { error: "Unable to get locations" },
      },
    ];

    return store.dispatch(fetchLocationData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Dispatching actions for modifying locations data", () => {
  Date.now = jest.fn(() => 1593751669379);

  afterEach(() => {
    fetchMock.restore();
    store.clearActions();
  });

  test.each`
    data                                             | payload                                             | expectedActions                                     | demoModeEnabled
    ${LocationsActionsData.deleteData}      | ${LocationsActionsData.deletePayload}      | ${LocationsActionsData.deleteActions}      | ${false}
    ${LocationsActionsData.deleteData}      | ${LocationsActionsData.deletePayload}      | ${LocationsActionsData.deleteActions}      | ${true}
    ${LocationsActionsData.modifyErrorData} | ${LocationsActionsData.modifyErrorPayload} | ${LocationsActionsData.modifyErrorActions} | ${false}
  `(
    "Send delete method and return $expectedActions",
    ({ data, payload, expectedActions, demoModeEnabled }) => {
      if (!demoModeEnabled) {
        fetchMock.mock(
          "/api/locations",
          {
            body: payload,
            status: 200,
          },
          {
            method: "DELETE",
            body: { locationIDs: data },
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      return store
        .dispatch(modifyLocationData(data, demoModeEnabled))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    }
  );
});