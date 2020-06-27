import * as ActionTypes from "../action-types";

export function setDemoModeStateTo(demoState) {
  return {
    type:
      demoState === true
        ? ActionTypes.ENABLE_DEMO_MODE
        : ActionTypes.DISABLE_DEMO_MODE,
  };
}
