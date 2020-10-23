import {
  fetchServiceHistoryData,
  modifyServiceHistory,
  processRecordData,
} from "../service-history-actions"
import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import fetchMock from "fetch-mock"
import { serviceHistoryActions } from "../../../mockdata/actions"

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({ loading: false, error: null, items: [] })

describe("Dispatching actions for retrieving service history data", () => {
  afterEach(() => {
    fetchMock.restore()
    store.clearActions()
  })

  test("Dispatching action when fetching succeeds", () => {
    fetchMock.mock("/api/service-history", {
      body: serviceHistoryActions.fetch.payload,
      status: 200,
    })

    return store.dispatch(fetchServiceHistoryData()).then(() => {
      expect(store.getActions()).toEqual(serviceHistoryActions.fetch.actions)
    })
  })

  test("Dispatching action when fetching fails", () => {
    fetchMock.mock("/api/service-history", {
      body: serviceHistoryActions.fetch_error.payload,
      status: 200,
    })

    return store.dispatch(fetchServiceHistoryData()).then(() => {
      expect(store.getActions()).toEqual(
        serviceHistoryActions.fetch_error.actions
      )
    })
  })
})

describe("Processing demo service record data", () => {
  test("Processing a new record", () => {
    Date.now = jest.fn(() => 1593751669379)

    expect(processRecordData(serviceHistoryActions.add.data)).toEqual(
      serviceHistoryActions.add.payload_demo
    )
  })

  test("Editing a record", () => {
    Date.now = jest.fn(() => 1593751669379)

    expect(processRecordData(serviceHistoryActions.edit.data)).toEqual(
      serviceHistoryActions.edit.payload_demo
    )
  })
})

describe("Dispatching actions for modifying service history data", () => {
  Date.now = jest.fn(() => 1593751669379)

  afterEach(() => {
    fetchMock.restore()
    store.clearActions()
  })

  test.each`
    data                                 | payload                                    | method      | expectedActions                            | demoModeEnabled
    ${serviceHistoryActions.add.data}    | ${serviceHistoryActions.add.payload}       | ${"post"}   | ${serviceHistoryActions.add.actions}       | ${false}
    ${serviceHistoryActions.add.data}    | ${serviceHistoryActions.add.payload_demo}  | ${"post"}   | ${serviceHistoryActions.add.actions_demo}  | ${true}
    ${serviceHistoryActions.edit.data}   | ${serviceHistoryActions.edit.payload}      | ${"put"}    | ${serviceHistoryActions.edit.actions}      | ${false}
    ${serviceHistoryActions.edit.data}   | ${serviceHistoryActions.edit.payload_demo} | ${"put"}    | ${serviceHistoryActions.edit.actions_demo} | ${true}
    ${serviceHistoryActions.delete.data} | ${serviceHistoryActions.delete.payload}    | ${"delete"} | ${serviceHistoryActions.delete.actions}    | ${false}
    ${serviceHistoryActions.delete.data} | ${serviceHistoryActions.delete.payload}    | ${"delete"} | ${serviceHistoryActions.delete.actions}    | ${true}
    ${serviceHistoryActions.error.data}  | ${serviceHistoryActions.error.payload}     | ${"post"}   | ${serviceHistoryActions.error.actions}     | ${false}
  `(
    "Send $method method and return $expectedActions",
    ({ data, payload, method, expectedActions, demoModeEnabled }) => {
      if (!demoModeEnabled) {
        fetchMock.mock(
          "/api/service-history",
          {
            body: payload,
            status: 200,
          },
          {
            method: method,
            body: data,
            headers: { "Content-Type": "application/json" },
          }
        )
      }

      return store
        .dispatch(modifyServiceHistory(data, method, demoModeEnabled))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    }
  )
})
