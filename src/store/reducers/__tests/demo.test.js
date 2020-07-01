import * as ActionTypes from "../../action-types";
import demoReducer from "../demo";

describe("Enabling and disabling demo mode", () => {
  test("Demo mode is enabled", () => {
    let state = demoReducer(false, {
      type: ActionTypes.ENABLE_DEMO_MODE,
    });
    expect(state).toBe(true);
  });

  test("Demo mode is disabled", () => {
    let state = demoReducer(false, {
      type: ActionTypes.DISABLE_DEMO_MODE,
    });
    expect(state).toBe(false);
  });
});
