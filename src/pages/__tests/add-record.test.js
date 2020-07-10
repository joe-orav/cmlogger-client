import React from "react";
import AddRecord, { validateQuery } from "../add-record";
import { render, screen, fireEvent } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

const initialState = {
  demoMode: false,
  user: {
    loading: false,
    error: null,
    profile: {
      id: 0,
      name: "Test User",
      googleConnected: true,
      facebookConnected: true,
      google_pic: "http://path/to/google_picture",
      facebook_pic: "http://path/to/fb_picture",
      default_pic: "http://path/to/google_picture",
    },
  },
  cars: {
    items: [
      {
        id: 100,
        user_id: 0,
        type: "sedan",
        car_year: 2020,
        make: "Ford",
        model: "Fusion",
        VIN: "J4IG72MJ02B693B7A",
      },
    ],
    loading: false,
    error: null,
  },
  serviceHistory: {
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
    ],
    loading: false,
    error: null,
  },
  services: {
    items: [
      { id: 100, user_id: 0, sname: "Oil Change" },
      { id: 200, user_id: 0, sname: "Tire replacement" },
    ],
    loading: false,
    error: null,
  },
  locations: {
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
    loading: false,
    error: null,
  },
  alerts: [
    { id: 1, type: "success", message: "Good message" },
    { id: 1, type: "danger", message: "Bad message" },
  ],
  fetchComplete: true,
};

const mergedServiceRecords = [
  {
    id: 100,
    service_date: "2020-10-17T04:00:00.000Z",
    cost: "100.00",
    notes: null,
    car: {
      id: 100,
      user_id: 0,
      type: "sedan",
      car_year: 2020,
      make: "Ford",
      model: "Fusion",
      VIN: "J4IG72MJ02B693B7A",
      fullname: "2020 Ford Fusion",
    },
    services: [
      { id: 100, user_id: 0, sname: "Oil Change" },
      { id: 200, user_id: 0, sname: "Tire replacement" },
    ],
    location: {
      id: 100,
      user_id: 0,
      name: "Test Place",
      address: "123 Abc St",
      city: "TestCity",
      state: "NJ",
      zip_code: "123456",
    },
    parsedDate: new Date("2020", "09", "17"),
    dateString: "10/17/2020",
  },
];

test("Incomplete field errors are displayed", () => {
  render(<AddRecord />, { initialState });

  fireEvent.click(screen.getByText("Save"));

  expect(screen.getByText("Please select a vehicle")).toBeInTheDocument();
});

test("Query Validation with record id provided", () => {
  expect(
    validateQuery({ id: 100, carid: undefined }, mergedServiceRecords)
  ).toEqual({
    savedLocID: 100,
    locName: "Test Place",
    address: "123 Abc St",
    city: "TestCity",
    state: "NJ",
    zip: "123456",
    id: 100,
    carID: 100,
    cost: "100.00",
    date: "2020-10-17",
    notes: null,
    services: [100, 200],
  });
});

test("Query Validation with unknown record id", () => {
  expect(
    validateQuery({ id: 2, carid: undefined }, mergedServiceRecords)
  ).toEqual({ id: -1, carID: 0, carFieldDisabled: false });
});

test("Query Validation with car id", () => {
  expect(
    validateQuery({ id: undefined, carid: 100 }, mergedServiceRecords)
  ).toEqual({ id: -1, carID: 100, carFieldDisabled: true });
});

test("Query Validation with invalid car id", () => {
  expect(
    validateQuery({ id: undefined, carid: "abc" }, mergedServiceRecords)
  ).toEqual({ id: -1, carID: 0, carFieldDisabled: false });
});
