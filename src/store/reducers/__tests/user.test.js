import * as ActionTypes from "../../action-types"
import userReducer from "../user"
import { userReducerData } from "../../../mockdata/reducers"

test("Create demo user when demo mode is enabled", () => {
  let state = userReducer(userReducerData.demo.initialState, {
    type: ActionTypes.ENABLE_DEMO_MODE,
  })

  expect(state).toEqual(userReducerData.demo.newState)
})

test("Initiating user data fetch", () => {
  let state = userReducer(userReducerData.fetch.initialState, {
    type: ActionTypes.FETCH_USER_DATA_START,
  })

  expect(state).toEqual(userReducerData.fetch.start.newState)
})

describe("Fetching user data", () => {
  test.each`
    payload                                         | action                                 | newState
    ${userReducerData.fetch_result.success.payload} | ${ActionTypes.FETCH_USER_DATA_SUCCESS} | ${userReducerData.fetch_result.success.newState}
    ${userReducerData.fetch_result.failure.payload} | ${ActionTypes.FETCH_USER_DATA_FAILURE} | ${userReducerData.fetch_result.failure.newState}
  `(
    "Using the user reducer, return the correct state after receiving the $action action",
    ({ payload, action, newState }) => {
      let state = userReducer(userReducerData.fetch_result.initialState, {
        type: action,
        payload: payload,
      })
      expect(state).toEqual(newState)
    }
  )
})

describe("Disconnecting accounts", () => {
  test.each`
    payload                                        | action                                    | newState
    ${userReducerData.disconnect.google.payload}   | ${ActionTypes.DISCONNECT_ACCOUNT}         | ${userReducerData.disconnect.google.newState}
    ${userReducerData.disconnect.facebook.payload} | ${ActionTypes.DISCONNECT_ACCOUNT}         | ${userReducerData.disconnect.facebook.newState}
    ${userReducerData.disconnect.failure.payload}  | ${ActionTypes.DISCONNECT_ACCOUNT_FAILURE} | ${userReducerData.disconnect.failure.newState}
  `(
    "Using the user reducer, return the correct state after receiving the $action action",
    ({ payload, action, newState }) => {
      let state = userReducer(userReducerData.disconnect.initialState, {
        type: action,
        payload: payload,
      })
      expect(state).toEqual(newState)
    }
  )
})

describe("Deleting user", () => {
  test.each`
    payload                                   | action                                | newState
    ${userReducerData.delete.success.payload} | ${ActionTypes.DELETE_ACCOUNT}         | ${userReducerData.delete.success.newState}
    ${userReducerData.delete.failure.payload} | ${ActionTypes.DELETE_ACCOUNT_FAILURE} | ${userReducerData.delete.failure.newState}
  `(
    "Using the user reducer, return the correct state after receiving the $action action",
    ({ payload, action, newState }) => {
      let state = userReducer(userReducerData.delete.initialState, {
        type: action,
        payload: payload,
      })
      expect(state).toEqual(newState)
    }
  )
})