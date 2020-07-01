import * as ActionTypes from "../../action-types";
import serviceHistoryReducer from "../service-history";
import servicesReducer from "../services";
import locationsReducer from "../locations";
import * as ServiceHistory from "./data/service-history";
import testState from "./data/testState";

describe("Adding Service Record", () => {
  let state;

  beforeAll(() => {
    state = Object.assign({}, testState);
  });

  test("Record gets added to service history", () => {
    state.serviceHistory = serviceHistoryReducer(state.serviceHistory, {
      type: ActionTypes.ADD_SERVICE_RECORD_SUCCESS,
      payload: ServiceHistory.addData,
    });

    expect(state.serviceHistory).toEqual({
      error: null,
      loading: false,
      items: [
        {
          id: 100,
          service_date: "2020-10-17T04:00:00.000Z",
          cost: "100.00",
          notes: null,
          car_id: 100,
          location_id: 100,
          provided_services_ids: [100, 200],
        },
        {
          id: 200,
          service_date: "2020-12-25T04:00:00.000Z",
          cost: "300.00",
          notes: "My note",
          car_id: 100,
          location_id: 200,
          provided_services_ids: [100, 300, 400],
        },
      ],
    });
  });

  test("Services get added to services list", () => {
    state.services = servicesReducer(state.services, {
      type: ActionTypes.ADD_SERVICE_RECORD_SUCCESS,
      payload: ServiceHistory.addData,
    });

    expect(state.services).toEqual({
      error: null,
      loading: false,
      items: [
        { id: 100, user_id: 0, sname: "Oil Change" },
        { id: 200, user_id: 0, sname: "Tire replacement" },
        { id: 300, user_id: 0, sname: "Air filter replacement" },
        { id: 400, user_id: 0, sname: "Spark plug replacement" },
      ],
    });
  });

  test("Location gets added to locations list", () => {
    state.locations = locationsReducer(state.locations, {
      type: ActionTypes.ADD_SERVICE_RECORD_SUCCESS,
      payload: ServiceHistory.addData,
    });

    expect(state.locations).toEqual({
      error: null,
      loading: false,
      items: [
        {
          id: 100,
          user_id: 0,
          name: "Test Place",
          address: "123 Abc St",
          city: "TestCity",
          state: "TS",
          zip_code: "123456",
        },
        {
          id: 200,
          user_id: 0,
          name: "Test Mechanics",
          address: "678 Tester Way",
          city: "NewCity",
          state: "TS",
          zip_code: "57356",
        },
      ],
    });
  });
});

describe("Editing Service Record", () => {
  let state;

  beforeAll(() => {
    state = Object.assign({}, testState);
  });

  test("Record gets changed in service history", () => {
    state.serviceHistory = serviceHistoryReducer(state.serviceHistory, {
      type: ActionTypes.EDIT_SERVICE_RECORD_SUCCESS,
      payload: ServiceHistory.editData,
    });

    expect(state.serviceHistory).toEqual({
      error: null,
      loading: false,
      items: [
        {
          id: 100,
          service_date: "2020-11-17T04:00:00.000Z",
          cost: "500.00",
          notes: null,
          car_id: 100,
          location_id: 100,
          provided_services_ids: [100, 200, 300],
        },
      ],
    });
  });

  test("Services get added to services list", () => {
    state.services = servicesReducer(state.services, {
      type: ActionTypes.EDIT_SERVICE_RECORD_SUCCESS,
      payload: ServiceHistory.editData,
    });

    expect(state.services).toEqual({
      error: null,
      loading: false,
      items: [
        { id: 100, user_id: 0, sname: "Oil Change" },
        { id: 200, user_id: 0, sname: "Tire replacement" },
        { id: 300, user_id: 0, sname: "Air filter replacement" },
      ],
    });
  });

  test("Nothing is added to locations due to no new locations", () => {
    state.locations = locationsReducer(state.locations, {
      type: ActionTypes.EDIT_SERVICE_RECORD_SUCCESS,
      payload: ServiceHistory.editData,
    });

    expect(state.locations).toEqual({
      error: null,
      loading: false,
      items: [
        {
          id: 100,
          user_id: 0,
          name: "Test Place",
          address: "123 Abc St",
          city: "TestCity",
          state: "TS",
          zip_code: "123456",
        },
      ],
    });
  });
});

describe("Deleting Service Record", () => {
  let state;

  beforeAll(() => {
    state = Object.assign({}, testState);
  });

  test("Record gets deleted in service history", () => {
    state.serviceHistory = serviceHistoryReducer(state.serviceHistory, {
      type: ActionTypes.DELETE_SERVICE_RECORD_SUCCESS,
      payload: ServiceHistory.deleteData,
    });

    expect(state.serviceHistory).toEqual({
      error: null,
      loading: false,
      items: [],
    });
  });

  test("Services list remains unchanged", () => {
    state.services = servicesReducer(state.services, {
      type: ActionTypes.DELETE_SERVICE_RECORD_SUCCESS,
      payload: ServiceHistory.deleteData,
    });

    expect(state.services).toEqual({
      items: [
        { id: 100, user_id: 0, sname: "Oil Change" },
        { id: 200, user_id: 0, sname: "Tire replacement" },
      ],
      loading: false,
      error: null,
    });
  });

  test("Locations list remains unchanged", () => {
    state.locations = locationsReducer(state.locations, {
      type: ActionTypes.DELETE_SERVICE_RECORD_SUCCESS,
      payload: ServiceHistory.deleteData,
    });

    expect(state.locations).toEqual({
      error: null,
      loading: false,
      items: [
        {
          id: 100,
          user_id: 0,
          name: "Test Place",
          address: "123 Abc St",
          city: "TestCity",
          state: "TS",
          zip_code: "123456",
        },
      ],
    });
  });
});

describe("Remove service history when car is deleted", () => {
  let state;

  beforeAll(() => {
    state = Object.assign({}, testState);
  });

  test("Service history is deleted when car is removed", () => {
    state.serviceHistory = serviceHistoryReducer(state.serviceHistory, {
      type: ActionTypes.DELETE_CAR_SUCCESS,
      payload: { id: 100 },
    });

    expect(state.serviceHistory).toEqual({
      items: [],
      loading: false,
      error: null,
    });
  });
});
