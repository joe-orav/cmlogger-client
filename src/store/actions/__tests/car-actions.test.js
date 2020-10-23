import { fetchCarData, modifyCarData } from "../car-actions"
import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import fetchMock from "fetch-mock"
import { carActions } from "../../../mockdata/actions"

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({ loading: false, error: null, items: [] })

describe("Dispatching actions for retrieving car data", () => {
  afterEach(() => {
    fetchMock.restore()
    store.clearActions()
  })

  test("Dispatching action when fetching succeeds", () => {
    fetchMock.mock("/api/cars", {
      body: carActions.fetch.payload,
      status: 200,
    })

    return store.dispatch(fetchCarData()).then(() => {
      expect(store.getActions()).toEqual(carActions.fetch.actions)
    })
  })

  test("Dispatching action when fetching fails", () => {
    fetchMock.mock("/api/cars", {
      body: carActions.fetch_error.payload,
      status: 200,
    })

    return store.dispatch(fetchCarData()).then(() => {
      expect(store.getActions()).toEqual(carActions.fetch_error.actions)
    })
  })
})

describe("Dispatching actions for modifying car data", () => {
  Date.now = jest.fn(() => 1593751669379)

  afterEach(() => {
    fetchMock.restore()
    store.clearActions()
  })

  test.each`
    data                      | payload                        | method      | expectedActions                | demoModeEnabled
    ${carActions.add.data}    | ${carActions.add.payload}      | ${"post"}   | ${carActions.add.actions}      | ${false}
    ${carActions.add.data}    | ${carActions.add.payload_demo} | ${"post"}   | ${carActions.add.actions_demo} | ${true}
    ${carActions.edit.data}   | ${carActions.edit.payload}     | ${"put"}    | ${carActions.edit.actions}     | ${false}
    ${carActions.edit.data}   | ${carActions.edit.payload}     | ${"put"}    | ${carActions.edit.actions}     | ${true}
    ${carActions.delete.data} | ${carActions.delete.payload}   | ${"delete"} | ${carActions.delete.actions}   | ${false}
    ${carActions.delete.data} | ${carActions.delete.payload}   | ${"delete"} | ${carActions.delete.actions}   | ${true}
    ${carActions.error.data}  | ${carActions.error.payload}    | ${"post"}   | ${carActions.error.actions}    | ${false}
  `(
    "Send $method method and return $expectedActions",
    ({ data, payload, method, expectedActions, demoModeEnabled }) => {
      if (!demoModeEnabled) {
        fetchMock.mock(
          "/api/cars",
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
        .dispatch(modifyCarData(data, method, demoModeEnabled))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    }
  )
})
