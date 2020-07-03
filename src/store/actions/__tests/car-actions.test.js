import { fetchCarData, modifyCarData } from "../car-actions";
import * as ActionTypes from "../../action-types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import * as CarActionsData from "./data/car-actions-data";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({ loading: false, error: null, items: [] });

describe("Dispatching actions for retrieving car data", () => {
  afterEach(() => {
    fetchMock.restore();
    store.clearActions();
  });

  test("Dispatching action when fetching succeeds", () => {
    fetchMock.mock("/api/cars", {
      body: [
        {
          id: 1,
          user_id: 0,
          type: "sedan",
          car_year: 2017,
          make: "Toyota",
          model: "Camry",
          VIN: "D64MFO3BG85NJ02G7",
        },
      ],
      status: 200,
    });

    let expectedActions = [
      { type: ActionTypes.FETCH_CAR_DATA_START },
      {
        type: ActionTypes.FETCH_CAR_DATA_SUCCESS,
        payload: [
          {
            id: 1,
            user_id: 0,
            type: "sedan",
            car_year: 2017,
            make: "Toyota",
            model: "Camry",
            VIN: "D64MFO3BG85NJ02G7",
          },
        ],
      },
    ];

    return store.dispatch(fetchCarData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test("Dispatching action when fetching fails", () => {
    fetchMock.mock("/api/cars", {
      body: { error: "Unable to get car" },
      status: 200,
    });

    let expectedActions = [
      { type: ActionTypes.FETCH_CAR_DATA_START },
      {
        type: ActionTypes.FETCH_CAR_DATA_FAILURE,
        payload: { error: "Unable to get car" },
      },
    ];

    return store.dispatch(fetchCarData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Dispatching actions for modifying car data", () => {
  Date.now = jest.fn(() => 1593751669379);

  afterEach(() => {
    fetchMock.restore();
    store.clearActions();
  });

  test.each`
    data                              | payload                              | method      | expectedActions                      | demoModeEnabled
    ${CarActionsData.addData}         | ${CarActionsData.addPayload}         | ${"post"}   | ${CarActionsData.addActions}         | ${false}
    ${CarActionsData.addData}         | ${CarActionsData.addDemoPayload}     | ${"post"}   | ${CarActionsData.addDemoActions}     | ${true}
    ${CarActionsData.editData}        | ${CarActionsData.editPayload}        | ${"put"}    | ${CarActionsData.editActions}        | ${false}
    ${CarActionsData.editData}        | ${CarActionsData.editPayload}        | ${"put"}    | ${CarActionsData.editActions}        | ${true}
    ${CarActionsData.deleteData}      | ${CarActionsData.deletePayload}      | ${"delete"} | ${CarActionsData.deleteActions}      | ${false}
    ${CarActionsData.deleteData}      | ${CarActionsData.deletePayload}      | ${"delete"} | ${CarActionsData.deleteActions}      | ${true}
    ${CarActionsData.modifyErrorData} | ${CarActionsData.modifyErrorPayload} | ${"post"}   | ${CarActionsData.modifyErrorActions} | ${false}
  `(
    "Send $method method and return $expectedActions",
    ({ data, payload, method, expectedActions, demoModeEnabled }) => {
      if (!demoModeEnabled) {
        fetchMock.mock(
          "/api/cars",
          {
            body: payload,
            status: 200,
          },
          {
            method: method,
            body: data,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      return store
        .dispatch(modifyCarData(data, method, demoModeEnabled))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    }
  );
});
