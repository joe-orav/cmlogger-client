import { fetchServicesData, modifyServiceData } from "../service-actions"
import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import fetchMock from "fetch-mock"
import { serviceActions } from "../../../mockdata/actions"

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({ loading: false, error: null, items: [] })

describe("Dispatching actions for retrieving service data", () => {
  afterEach(() => {
    fetchMock.restore()
    store.clearActions()
  })

  test("Dispatching action when fetching succeeds", () => {
    fetchMock.mock("/api/services", {
      body: serviceActions.fetch.payload,
      status: 200,
    })

    return store.dispatch(fetchServicesData()).then(() => {
      expect(store.getActions()).toEqual(serviceActions.fetch.actions)
    })
  })

  test("Dispatching action when fetching fails", () => {
    fetchMock.mock("/api/services", {
      body: serviceActions.fetch_error.payload,
      status: 200,
    })

    return store.dispatch(fetchServicesData()).then(() => {
      expect(store.getActions()).toEqual(serviceActions.fetch_error.actions)
    })
  })
})

describe("Dispatching actions for modifying services data", () => {
  afterEach(() => {
    fetchMock.restore()
    store.clearActions()
  })

  test.each`
    data                          | payload                          | expectedActions                  | demoModeEnabled
    ${serviceActions.delete.data} | ${serviceActions.delete.payload} | ${serviceActions.delete.actions} | ${false}
    ${serviceActions.delete.data} | ${serviceActions.delete.payload} | ${serviceActions.delete.actions} | ${true}
    ${serviceActions.error.data}  | ${serviceActions.error.payload}  | ${serviceActions.error.actions}  | ${false}
  `(
    "Send delete method and return $expectedActions",
    ({ data, payload, expectedActions, demoModeEnabled }) => {
      if (!demoModeEnabled) {
        fetchMock.mock(
          "/api/services",
          {
            body: payload,
            status: 200,
          },
          {
            method: "DELETE",
            body: { serviceIDs: data },
            headers: { "Content-Type": "application/json" },
          }
        )
      }

      return store
        .dispatch(modifyServiceData(data, demoModeEnabled))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    }
  )
})
