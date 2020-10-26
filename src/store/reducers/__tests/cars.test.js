import * as ActionTypes from "../../action-types"
import carsReducer from "../cars"
import { carsReducerData } from "../../../mockdata/reducers"

test("Initiating car data fetch", () => {
  let state = carsReducer(carsReducerData.fetch.initialState, {
    type: ActionTypes.FETCH_CAR_DATA_START,
  })

  expect(state).toEqual(carsReducerData.fetch.start.newState)
})

describe("Fetching car data", () => {
  test.each`
    payload                                         | action                                | newState
    ${carsReducerData.fetch_result.success.payload} | ${ActionTypes.FETCH_CAR_DATA_SUCCESS} | ${carsReducerData.fetch_result.success.newState}
    ${carsReducerData.fetch_result.failure.payload} | ${ActionTypes.FETCH_CAR_DATA_FAILURE} | ${carsReducerData.fetch_result.failure.newState}
  `(
    "Using the cars reducer, return the correct state after receiving the $action action",
    ({ payload, action, newState }) => {
      let state = carsReducer(carsReducerData.fetch_result.initialState, {
        type: action,
        payload: payload,
      })
      expect(state).toEqual(newState)
    }
  )
})

describe("Modifiying car data", () => {
  let state

  beforeAll(() => {
    state = carsReducerData.modify.initialState
  })

  test.each`
    payload                                          | action                                 | newState
    ${carsReducerData.modify.add.payload}            | ${ActionTypes.ADD_CAR_SUCCESS}         | ${carsReducerData.modify.add.newState}
    ${carsReducerData.modify.edit.payload}           | ${ActionTypes.EDIT_CAR_SUCCESS}        | ${carsReducerData.modify.edit.newState}
    ${carsReducerData.modify.delete.payload}         | ${ActionTypes.DELETE_CAR_SUCCESS}      | ${carsReducerData.modify.delete.newState}
    ${carsReducerData.modify.error.payload}          | ${ActionTypes.MODIFY_CAR_DATA_FAILURE} | ${carsReducerData.modify.error.newState}
    ${carsReducerData.modify.delete_account.payload} | ${ActionTypes.DELETE_ACCOUNT}          | ${carsReducerData.modify.delete_account.newState}
  `(
    "Using the cars reducer, return the correct state after receiving the $action action",
    ({ payload, action, newState }) => {
      state = carsReducer(state, {
        type: action,
        payload: payload,
      })
      expect(state).toEqual(newState)
    }
  )
})
