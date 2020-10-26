import * as ActionTypes from "../../action-types"
import alertsReducer from "../alerts"
import { alertsReducerData } from "../../../mockdata/reducers"

describe("Alerts", () => {
  let state

  beforeAll(() => {
    state = alertsReducerData.initialState
  })

  test.each`
    payload                          | action                       | newState
    ${alertsReducerData.payloads[0]} | ${ActionTypes.DISPLAY_ALERT} | ${alertsReducerData.newStates[0]}
    ${alertsReducerData.payloads[1]} | ${ActionTypes.DISPLAY_ALERT} | ${alertsReducerData.newStates[1]}
    ${alertsReducerData.payloads[2]} | ${ActionTypes.REMOVE_ALERT}  | ${alertsReducerData.newStates[2]}
    ${alertsReducerData.payloads[3]} | ${ActionTypes.REMOVE_ALERT}  | ${alertsReducerData.newStates[3]}
  `(
    "Using the alerts reducer, return the correct state after receiving the $action action",
    ({ payload, action, newState }) => {
      state = alertsReducer(state, {
        type: action,
        payload: payload,
      })
      expect(state).toEqual(newState)
    }
  )
})
