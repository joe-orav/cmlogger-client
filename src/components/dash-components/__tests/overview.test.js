import React from "react";
import Overview from "../overview";
import { render, screen } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

let initialState = {
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

let emptyState = {
  demoMode: false,
  cars: {
    items: [],
    loading: false,
    error: null,
  },
  serviceHistory: {
    items: [],
    loading: false,
    error: null,
  },
  services: {
    items: [],
    loading: false,
    error: null,
  },
  locations: {
    items: [],
    loading: false,
    error: null,
  },
  alerts: [],
  fetchComplete: false,
};

test("Overview block displays data", () => {
  render(<Overview />, { initialState });
  expect(screen.getAllByText("1")).toHaveLength(2);
  expect(screen.getByText("$100.00")).toBeInTheDocument();
});

test("Overview block displays zero values when do data is available", () => {
  render(<Overview />, { initialState: emptyState });
  expect(screen.getAllByText("0")).toHaveLength(2);
  expect(screen.getByText("$0.00")).toBeInTheDocument();
});
