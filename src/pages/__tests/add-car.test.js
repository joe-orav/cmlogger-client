import React from "react";
import AddCar, { validateQuery } from "../add-car";
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

test("Incomplete field errors are displayed", () => {
  render(<AddCar />, { initialState, history });

  fireEvent.click(screen.getByText("Save"));

  expect(
    screen.getByText("Please enter the make of your car")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Please enter the model of your car")
  ).toBeInTheDocument();
});

test("Query Validation with car id provided", () => {
  expect(
    validateQuery(100, [
      {
        id: 100,
        user_id: 0,
        type: "sedan",
        car_year: 2020,
        make: "Ford",
        model: "Fusion",
        vin: "J4IG72MJ02B693B7A",
        fullname: "2020 Ford Fusion",
      },
    ])
  ).toEqual({
    id: 100,
    type: "sedan",
    year: 2020,
    make: "Ford",
    model: "Fusion",
    vin: "J4IG72MJ02B693B7A",
    name: "2020 Ford Fusion",
  });
});

test("Query Validation with unknown car id", () => {
  expect(
    validateQuery(2, [
      {
        id: 100,
        user_id: 0,
        type: "sedan",
        car_year: 2020,
        make: "Ford",
        model: "Fusion",
        vin: "J4IG72MJ02B693B7A",
        fullname: "2020 Ford Fusion",
      },
    ])
  ).toEqual({ id: -1 });
});

test("Query Validation with invalid id", () => {
  expect(
    validateQuery("abc", [
      {
        id: 100,
        user_id: 0,
        type: "sedan",
        car_year: 2020,
        make: "Ford",
        model: "Fusion",
        vin: "J4IG72MJ02B693B7A",
        fullname: "2020 Ford Fusion",
      },
    ])
  ).toEqual({ id: -1 });
});
