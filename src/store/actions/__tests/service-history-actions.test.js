import {
  fetchServiceHistoryData,
  modifyServiceHistory,
  processRecordData,
} from "../service-history-actions";
import * as ActionTypes from "../../action-types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import * as ServiceHistoryActionsData from "./data/service-history-actions-data";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({ loading: false, error: null, items: [] });

describe("Dispatching actions for retrieving service history data", () => {
  afterEach(() => {
    fetchMock.restore();
    store.clearActions();
  });

  test("Dispatching action when fetching succeeds", () => {
    fetchMock.mock("/api/service-history", {
      body: [
        {
          id: 1,
          service_date: "2020-10-17T04:00:00.000Z",
          cost: "100.00",
          notes: null,
          car_id: 1,
          location_id: 1,
          provided_services_ids: [1, 2, 3],
        },
      ],
      status: 200,
    });

    let expectedActions = [
      { type: ActionTypes.FETCH_SH_DATA_START },
      {
        type: ActionTypes.FETCH_SH_DATA_SUCCESS,
        payload: [
          {
            id: 1,
            service_date: "2020-10-17T04:00:00.000Z",
            cost: "100.00",
            notes: null,
            car_id: 1,
            location_id: 1,
            provided_services_ids: [1, 2, 3],
          },
        ],
      },
    ];

    return store.dispatch(fetchServiceHistoryData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test("Dispatching action when fetching fails", () => {
    fetchMock.mock("/api/service-history", {
      body: { error: "Unable to get service history" },
      status: 200,
    });

    let expectedActions = [
      { type: ActionTypes.FETCH_SH_DATA_START },
      {
        type: ActionTypes.FETCH_SH_DATA_FAILURE,
        payload: { error: "Unable to get service history" },
      },
    ];

    return store.dispatch(fetchServiceHistoryData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Processing demo service record data", () => {
  test("Processing a new record", () => {
    Date.now = jest.fn(() => 1593751669379);

    expect(processRecordData(ServiceHistoryActionsData.addData)).toEqual(
      ServiceHistoryActionsData.addDemoPayload
    );
  });

  test("Editing a record", () => {
    Date.now = jest.fn(() => 1593751669379);

    expect(processRecordData(ServiceHistoryActionsData.editData)).toEqual(
      ServiceHistoryActionsData.editDemoPayload
    );
  });
});

describe("Dispatching actions for modifying service history data", () => {
  Date.now = jest.fn(() => 1593751669379);

  afterEach(() => {
    fetchMock.restore();
    store.clearActions();
  });

  test.each`
    data                                         | payload                                         | method      | expectedActions                                 | demoModeEnabled
    ${ServiceHistoryActionsData.addData}         | ${ServiceHistoryActionsData.addPayload}         | ${"post"}   | ${ServiceHistoryActionsData.addActions}         | ${false}
    ${ServiceHistoryActionsData.addData}         | ${ServiceHistoryActionsData.addDemoPayload}     | ${"post"}   | ${ServiceHistoryActionsData.addDemoActions}     | ${true}
    ${ServiceHistoryActionsData.editData}        | ${ServiceHistoryActionsData.editPayload}        | ${"put"}    | ${ServiceHistoryActionsData.editActions}        | ${false}
    ${ServiceHistoryActionsData.editData}        | ${ServiceHistoryActionsData.editPayload}        | ${"put"}    | ${ServiceHistoryActionsData.editActions}        | ${true}
    ${ServiceHistoryActionsData.deleteData}      | ${ServiceHistoryActionsData.deletePayload}      | ${"delete"} | ${ServiceHistoryActionsData.deleteActions}      | ${false}
    ${ServiceHistoryActionsData.deleteData}      | ${ServiceHistoryActionsData.deletePayload}      | ${"delete"} | ${ServiceHistoryActionsData.deleteActions}      | ${true}
    ${ServiceHistoryActionsData.modifyErrorData} | ${ServiceHistoryActionsData.modifyErrorPayload} | ${"post"}   | ${ServiceHistoryActionsData.modifyErrorActions} | ${false}
  `(
    "Send $method method and return $expectedActions",
    ({ data, payload, method, expectedActions, demoModeEnabled }) => {
      if (!demoModeEnabled) {
        fetchMock.mock(
          "/api/service-history",
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
        .dispatch(modifyServiceHistory(data, method, demoModeEnabled))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    }
  );
});
