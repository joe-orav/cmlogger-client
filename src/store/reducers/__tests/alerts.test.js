import * as ActionTypes from "../../action-types";
import alertsReducer from "../alerts";
import * as Alerts from "./data/alerts";

describe("Alerts", () => {
    let state;
  
    beforeAll(() => {
      state = [];
    });
  
    test("Display first alert", () => {
      state = alertsReducer(state, {
        type: ActionTypes.DISPLAY_ALERT,
        payload: Alerts.newAlert1,
      });
  
      expect(state).toEqual(Alerts.newAlertOutput1);
    });
  
    test("Display second alert", () => {
      state = alertsReducer(state, {
        type: ActionTypes.DISPLAY_ALERT,
        payload: Alerts.newAlert2,
      });
  
      expect(state).toEqual(Alerts.newAlertOutput2);
    });
  
    test("Remove first alert", () => {
      state = alertsReducer(state, {
        type: ActionTypes.REMOVE_ALERT,
        payload: Alerts.removeAlert1,
      });
  
      expect(state).toEqual(Alerts.removeAlertOutput1);
    });
  
    test("Remove second alert", () => {
      state = alertsReducer(state, {
        type: ActionTypes.REMOVE_ALERT,
        payload: Alerts.removeAlert2,
      });
  
      expect(state).toEqual(Alerts.removeAlertOutput2);
    });
  });
  