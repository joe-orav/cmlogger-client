import * as ActionTypes from "../../action-types";
import carsReducer from "../cars";
import serviceHistoryReducer from "../service-history";
import servicesReducer from "../services";
import locationsReducer from "../locations";

describe("Loading data", () => {
  test.each`
    action                                   | reducer
    ${ActionTypes.FETCH_CAR_DATA_START}      | ${carsReducer}
    ${ActionTypes.FETCH_SERVICE_DATA_START}  | ${servicesReducer}
    ${ActionTypes.FETCH_SH_DATA_START}       | ${serviceHistoryReducer}
    ${ActionTypes.FETCH_LOCATION_DATA_START} | ${locationsReducer}
  `(
    "Set loading to true after $reducer recieves the $action action",
    ({ action, reducer }) => {
      let state = reducer({}, { type: action });
      expect(state).toEqual({
        items: [],
        loading: true,
        error: null,
      });
    }
  );
});
