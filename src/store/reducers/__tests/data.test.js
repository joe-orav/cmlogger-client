import * as ActionTypes from "../../action-types";
import carsReducer from "../cars";
import serviceHistoryReducer from "../service-history";
import servicesReducer from "../services";
import locationsReducer from "../locations";
import fetchReducer from "../fetch-complete";
import * as Cars from "./data/cars";
import * as Services from "./data/services";
import * as Locations from "./data/locations";
import * as ServiceHistory from "./data/service-history";

describe("Fetching data", () => {
  let state;

  beforeEach(() => {
    state = {
      items: [],
      loading: true,
      error: null,
    };
  });

  test.each`
    payload                      | action                                     | output                             | reducer
    ${Cars.fetchData}            | ${ActionTypes.FETCH_CAR_DATA_SUCCESS}      | ${Cars.fetchDataOutput}            | ${carsReducer}
    ${Cars.fetchError}           | ${ActionTypes.FETCH_CAR_DATA_FAILURE}      | ${Cars.fetchErrorOutput}           | ${carsReducer}
    ${Services.fetchData}        | ${ActionTypes.FETCH_SERVICE_DATA_SUCCESS}  | ${Services.fetchDataOutput}        | ${servicesReducer}
    ${Services.fetchError}       | ${ActionTypes.FETCH_SERVICE_DATA_FAILURE}  | ${Services.fetchErrorOutput}       | ${servicesReducer}
    ${ServiceHistory.fetchData}  | ${ActionTypes.FETCH_SH_DATA_SUCCESS}       | ${ServiceHistory.fetchDataOutput}  | ${serviceHistoryReducer}
    ${ServiceHistory.fetchError} | ${ActionTypes.FETCH_SH_DATA_FAILURE}       | ${ServiceHistory.fetchErrorOutput} | ${serviceHistoryReducer}
    ${Locations.fetchData}       | ${ActionTypes.FETCH_LOCATION_DATA_SUCCESS} | ${Locations.fetchDataOutput}       | ${locationsReducer}
    ${Locations.fetchError}      | ${ActionTypes.FETCH_LOCATION_DATA_FAILURE} | ${Locations.fetchErrorOutput}      | ${locationsReducer}
  `(
    "Using $reducer, return $output after receiving the $action action with the following data: $payload",
    ({ payload, action, output, reducer }) => {
      state = reducer(state, { type: action, payload: payload });
      expect(state).toEqual(output);
    }
  );
});

describe("Modifying data", () => {
  describe("Modifying car data", () => {
    let state;

    beforeAll(() => {
      state = Cars.fetchDataOutput;
    });

    test.each`
      payload                 | action                                 | output
      ${Cars.addData}         | ${ActionTypes.ADD_CAR_SUCCESS}         | ${Cars.addDataOutput}
      ${Cars.editData}        | ${ActionTypes.EDIT_CAR_SUCCESS}        | ${Cars.editDataOutput}
      ${Cars.deleteData}      | ${ActionTypes.DELETE_CAR_SUCCESS}      | ${Cars.deleteDataOutput}
      ${Cars.modifyDataError} | ${ActionTypes.MODIFY_CAR_DATA_FAILURE} | ${Cars.modifyDataErrorOutput}
    `(
      "Return $output after receiving the $action action with the following data: $payload",
      ({ payload, action, output }) => {
        state = carsReducer(state, { type: action, payload: payload });
        expect(state).toEqual(output);
      }
    );
  });

  describe("Modifying service data", () => {
    let state;

    beforeAll(() => {
      state = Services.fetchDataOutput;
    });

    test.each`
      payload                | action                                     | output
      ${Services.deleteData} | ${ActionTypes.DELETE_SERVICE_DATA_SUCCESS} | ${Services.deleteDataOutput}
    `(
      "Return $output after receiving the $action action with the following data: $payload",
      ({ payload, action, output }) => {
        state = servicesReducer(state, {
          type: action,
          payload: payload,
        });
        expect(state).toEqual(output);
      }
    );
  });

  describe("Modifying location data", () => {
    let state;

    beforeAll(() => {
      state = Locations.fetchDataOutput;
    });

    test.each`
      payload                 | action                                      | output
      ${Locations.deleteData} | ${ActionTypes.DELETE_LOCATION_DATA_SUCCESS} | ${Locations.deleteDataOutput}
    `(
      "Return $output after receiving the $action action with the following data: $payload",
      ({ payload, action, output }) => {
        state = locationsReducer(state, {
          type: action,
          payload: payload,
        });
        expect(state).toEqual(output);
      }
    );
  });
});

describe("Check that data fetching is complete", () => {
  test("Demo mode is enabled", () => {
    let state = fetchReducer(false, {
      type: ActionTypes.FETCH_SH_DATA_SUCCESS,
    });
    expect(state).toBe(true);
  });

  test("Demo mode is disabled", () => {
    let state = fetchReducer(false, {
      type: ActionTypes.ENABLE_DEMO_MODE,
    });
    expect(state).toBe(true);
  });
});
