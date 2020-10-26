import * as ActionTypes from "../../action-types"
import fetchReducer from "../fetch"

test("Fetch completion is set to true when data fetching completes", () => {
  let state = fetchReducer(false, {
    type: ActionTypes.FETCH_SH_DATA_SUCCESS,
  })
  expect(state).toBe(true)
})

test("Fetch completion is set to true when demo mode is enabled", () => {
  let state = fetchReducer(false, {
    type: ActionTypes.ENABLE_DEMO_MODE,
  })
  expect(state).toBe(true)
})
