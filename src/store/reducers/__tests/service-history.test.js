import * as ActionTypes from "../../action-types"
import serviceHistoryReducer from "../service-history"
import { serviceHistoryReducerData } from "../../../mockdata/reducers"

test("Initiating service history data fetch", () => {
  let state = serviceHistoryReducer(
    serviceHistoryReducerData.fetch.initialState,
    {
      type: ActionTypes.FETCH_SH_DATA_START,
    }
  )

  expect(state).toEqual(serviceHistoryReducerData.fetch.start.newState)
})

describe("Fetching service history data", () => {
  test.each`
    payload                                                   | action                               | newState
    ${serviceHistoryReducerData.fetch_result.success.payload} | ${ActionTypes.FETCH_SH_DATA_SUCCESS} | ${serviceHistoryReducerData.fetch_result.success.newState}
    ${serviceHistoryReducerData.fetch_result.failure.payload} | ${ActionTypes.FETCH_SH_DATA_FAILURE} | ${serviceHistoryReducerData.fetch_result.failure.newState}
  `(
    "Using the service history reducer, return the correct state after receiving the $action action",
    ({ payload, action, newState }) => {
      let state = serviceHistoryReducer(
        serviceHistoryReducerData.fetch_result.initialState,
        {
          type: action,
          payload: payload,
        }
      )
      expect(state).toEqual(newState)
    }
  )
})

describe("Modifiying record data", () => {
  let state

  beforeAll(() => {
    state = serviceHistoryReducerData.modify.initialState
  })

  test.each`
    payload                                                    | action                                        | newState
    ${serviceHistoryReducerData.modify.add.payload}            | ${ActionTypes.ADD_SERVICE_RECORD_SUCCESS}     | ${serviceHistoryReducerData.modify.add.newState}
    ${serviceHistoryReducerData.modify.edit.payload}           | ${ActionTypes.EDIT_SERVICE_RECORD_SUCCESS}    | ${serviceHistoryReducerData.modify.edit.newState}
    ${serviceHistoryReducerData.modify.delete.payload}         | ${ActionTypes.DELETE_SERVICE_RECORD_SUCCESS}  | ${serviceHistoryReducerData.modify.delete.newState}
    ${serviceHistoryReducerData.modify.error.payload}          | ${ActionTypes.MODIFY_SERVICE_HISTORY_FAILURE} | ${serviceHistoryReducerData.modify.error.newState}
    ${serviceHistoryReducerData.modify.delete_account.payload} | ${ActionTypes.DELETE_ACCOUNT}                 | ${serviceHistoryReducerData.modify.delete_account.newState}
  `(
    "Using the service history reducer, return the correct state after receiving the $action action",
    ({ payload, action, newState }) => {
      state = serviceHistoryReducer(state, {
        type: action,
        payload: payload,
      })
      expect(state).toEqual(newState)
    }
  )
})
