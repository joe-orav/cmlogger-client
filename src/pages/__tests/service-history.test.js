import React from "react";
import ServiceHistory from "../service-history";
import { render, screen } from "../../utils/test-utils";
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
        state: "NJ",
        zip_code: "123456",
      },
    ],
    loading: false,
    error: null,
  },
  alerts: [],
  fetchComplete: true,
};

const emptyState = {
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

test("Service History Page displays data", () => {
  render(<ServiceHistory />, { initialState });

  expect(screen.getByText("Test Place")).toBeInTheDocument();
  expect(
    screen.getByText("123 Abc St, TestCity, NJ, 123456")
  ).toBeInTheDocument();
  expect(screen.getByText("$100.00")).toBeInTheDocument();
  expect(screen.getByText("2020 Ford Fusion")).toBeInTheDocument();
  expect(screen.getByText("10/17/2020")).toBeInTheDocument();
  expect(screen.getByText("Oil Change, Tire replacement")).toBeInTheDocument();
});

test("Service History displays no data message", () => {
  render(<ServiceHistory />, { initialState: emptyState });

  expect(screen.getByText("No records found")).toBeInTheDocument();
  expect(
    screen.getByText('Click "Add Service Record" to add a new service record')
  ).toBeInTheDocument();
});
