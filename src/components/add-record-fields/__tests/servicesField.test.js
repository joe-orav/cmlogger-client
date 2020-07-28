import React from "react";
import ServicesField from "../servicesField";
import { render, screen } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

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
  alerts: [],
  fetchComplete: true,
};

test("Field has options from state", () => {
  render(<ServicesField />, { initialState });

  expect(screen.getAllByRole("option")).toHaveLength(2);
  expect(screen.getByText("Oil Change")).toBeInTheDocument();
  expect(screen.getByText("Tire replacement")).toBeInTheDocument();
});

test("Field displays provided value", () => {
  render(<ServicesField value={[100]} />, { initialState });

  expect(screen.getByLabelText("Services (Saved)")).toHaveValue(["100"]);
});

test("Field is disabled", () => {
  render(<ServicesField required />, {
    initialState,
  });

  expect(screen.getByLabelText("Services (Saved)")).toBeRequired();
});

test("Field recieves selected items", () => {
  const mockSetValue = jest.fn();
  render(<ServicesField setValue={mockSetValue} />, { initialState });

  userEvent.selectOptions(screen.getByLabelText("Services (Saved)"), ["100", "200"]);

  let options = screen.getAllByRole("option");

  expect(options[0].selected).toBe(true);
  expect(options[1].selected).toBe(true);

  expect(mockSetValue).toHaveBeenLastCalledWith([100,200]);
});
