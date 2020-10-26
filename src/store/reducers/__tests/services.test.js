import * as ActionTypes from "../../action-types"
import servicesReducer from "../services"
import { servicesReducerData } from "../../../mockdata/reducers"

test("Initiating services data fetch", () => {
  let state = servicesReducer(servicesReducerData.fetch.initialState, {
    type: ActionTypes.FETCH_SERVICE_DATA_START,
  })

  expect(state).toEqual(servicesReducerData.fetch.start.newState)
})

describe("Fetching services data", () => {
  test.each`
    payload                                             | action                                    | newState
    ${servicesReducerData.fetch_result.success.payload} | ${ActionTypes.FETCH_SERVICE_DATA_SUCCESS} | ${servicesReducerData.fetch_result.success.newState}
    ${servicesReducerData.fetch_result.failure.payload} | ${ActionTypes.FETCH_SERVICE_DATA_FAILURE} | ${servicesReducerData.fetch_result.failure.newState}
  `(
    "Using the services reducer, return the correct state after receiving the $action action",
    ({ payload, action, newState }) => {
      let state = servicesReducer(
        servicesReducerData.fetch_result.initialState,
        {
          type: action,
          payload: payload,
        }
      )
      expect(state).toEqual(newState)
    }
  )
})

describe("Modifiying services data", () => {
  let state

  beforeAll(() => {
    state = servicesReducerData.modify.initialState
  })

  test.each`
    payload                                              | action                                     | newState
    ${servicesReducerData.modify.add.payload}            | ${ActionTypes.ADD_SERVICE_RECORD_SUCCESS}  | ${servicesReducerData.modify.add.newState}
    ${servicesReducerData.modify.edit.payload}           | ${ActionTypes.EDIT_SERVICE_RECORD_SUCCESS} | ${servicesReducerData.modify.edit.newState}
    ${servicesReducerData.modify.delete.payload}         | ${ActionTypes.DELETE_SERVICE_DATA_SUCCESS} | ${servicesReducerData.modify.delete.newState}
    ${servicesReducerData.modify.error.payload}          | ${ActionTypes.MODIFY_SERVICE_DATA_FAILURE} | ${servicesReducerData.modify.error.newState}
    ${servicesReducerData.modify.delete_account.payload} | ${ActionTypes.DELETE_ACCOUNT}              | ${servicesReducerData.modify.delete_account.newState}
  `(
    "Using the services reducer, return the correct state after receiving the $action action",
    ({ payload, action, newState }) => {
      state = servicesReducer(state, {
        type: action,
        payload: payload,
      })
      expect(state).toEqual(newState)
    }
  )
})
