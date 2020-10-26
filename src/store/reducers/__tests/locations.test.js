import * as ActionTypes from "../../action-types"
import locationsReducer from "../locations"
import { locationsReducerData } from "../../../mockdata/reducers"

test("Initiating location data fetch", () => {
  let state = locationsReducer(locationsReducerData.fetch.initialState, {
    type: ActionTypes.FETCH_LOCATION_DATA_START,
  })

  expect(state).toEqual(locationsReducerData.fetch.start.newState)
})

describe("Fetching location data", () => {
  test.each`
    payload                                              | action                                     | newState
    ${locationsReducerData.fetch_result.success.payload} | ${ActionTypes.FETCH_LOCATION_DATA_SUCCESS} | ${locationsReducerData.fetch_result.success.newState}
    ${locationsReducerData.fetch_result.failure.payload} | ${ActionTypes.FETCH_LOCATION_DATA_FAILURE} | ${locationsReducerData.fetch_result.failure.newState}
  `(
    "Using the locations reducer, return the correct state after receiving the $action action",
    ({ payload, action, newState }) => {
      let state = locationsReducer(
        locationsReducerData.fetch_result.initialState,
        {
          type: action,
          payload: payload,
        }
      )
      expect(state).toEqual(newState)
    }
  )
})

describe("Modifiying location data", () => {
  let state

  beforeAll(() => {
    state = locationsReducerData.modify.initialState
  })

  test.each`
    payload                                               | action                                      | newState
    ${locationsReducerData.modify.add.payload}            | ${ActionTypes.ADD_SERVICE_RECORD_SUCCESS}   | ${locationsReducerData.modify.add.newState}
    ${locationsReducerData.modify.edit.payload}           | ${ActionTypes.EDIT_SERVICE_RECORD_SUCCESS}  | ${locationsReducerData.modify.edit.newState}
    ${locationsReducerData.modify.delete.payload}         | ${ActionTypes.DELETE_LOCATION_DATA_SUCCESS} | ${locationsReducerData.modify.delete.newState}
    ${locationsReducerData.modify.error.payload}          | ${ActionTypes.MODIFY_LOCATION_DATA_FAILURE} | ${locationsReducerData.modify.error.newState}
    ${locationsReducerData.modify.delete_account.payload} | ${ActionTypes.DELETE_ACCOUNT}               | ${locationsReducerData.modify.delete_account.newState}
  `(
    "Using the locations reducer, return the correct state after receiving the $action action",
    ({ payload, action, newState }) => {
      state = locationsReducer(state, {
        type: action,
        payload: payload,
      })
      expect(state).toEqual(newState)
    }
  )
})
