import { fetchLocationData, modifyLocationData } from "../locations-actions"
import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import fetchMock from "fetch-mock"
import { locationActions } from "../../../mockdata/actions"

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({ loading: false, error: null, items: [] })

describe("Dispatching actions for retrieving location data", () => {
  afterEach(() => {
    fetchMock.restore()
    store.clearActions()
  })

  test("Dispatching action when fetching succeeds", () => {
    fetchMock.mock("/api/locations", {
      body: locationActions.fetch.payload,
      status: 200,
    })

    return store.dispatch(fetchLocationData()).then(() => {
      expect(store.getActions()).toEqual(locationActions.fetch.actions)
    })
  })

  test("Dispatching action when fetching fails", () => {
    fetchMock.mock("/api/locations", {
      body: locationActions.fetch_error.payload,
      status: 200,
    })

    return store.dispatch(fetchLocationData()).then(() => {
      expect(store.getActions()).toEqual(locationActions.fetch_error.actions)
    })
  })
})

describe("Dispatching actions for modifying locations data", () => {
  Date.now = jest.fn(() => 1593751669379)

  afterEach(() => {
    fetchMock.restore()
    store.clearActions()
  })

  test.each`
    data                           | payload                           | expectedActions                   | demoModeEnabled
    ${locationActions.delete.data} | ${locationActions.delete.payload} | ${locationActions.delete.actions} | ${false}
    ${locationActions.delete.data} | ${locationActions.delete.payload} | ${locationActions.delete.actions} | ${true}
    ${locationActions.error.data}  | ${locationActions.error.payload}  | ${locationActions.error.actions}  | ${false}
  `(
    "Send delete method and return $expectedActions",
    ({ data, payload, expectedActions, demoModeEnabled }) => {
      if (!demoModeEnabled) {
        fetchMock.mock(
          "/api/locations",
          {
            body: payload,
            status: 200,
          },
          {
            method: "DELETE",
            body: { locationIDs: data },
            headers: { "Content-Type": "application/json" },
          }
        )
      }

      return store
        .dispatch(modifyLocationData(data, demoModeEnabled))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    }
  )
})
