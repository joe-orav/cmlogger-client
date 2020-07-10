import React from "react";
import CarServicedField from "../carServicedField";
import { render, screen, fireEvent } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

let mockSetValue = jest.fn();
let initialState = {
  cars: {
    items: [
      {
        id: 0,
        user_id: 0,
        type: "sedan",
        car_year: 2020,
        make: "Ford",
        model: "Fusion",
        VIN: "J4IG72MJ02B693B7A",
      },
      {
        id: 1,
        user_id: 0,
        type: "sedan",
        car_year: 2017,
        make: "Toyota",
        model: "Camry",
        VIN: "D64MFO3BG85NJ02G7",
      },
    ],
  },
};

test("Field has options from state", () => {
  render(<CarServicedField />, { initialState });

  expect(screen.getAllByRole("option")).toHaveLength(3);
  expect(screen.getByText("2020 Ford Fusion")).toBeInTheDocument();
  expect(screen.getByText("2017 Toyota Camry")).toBeInTheDocument();
});

test("Field displays provided value", () => {
  render(<CarServicedField value={1} />, { initialState });

  expect(screen.getByLabelText("Car Serviced")).toHaveValue("1");
  expect(screen.getByDisplayValue("2017 Toyota Camry")).toBeInTheDocument();
});

test("Field set value function is called", () => {
  render(<CarServicedField value={1} setValue={mockSetValue} />, {
    initialState,
  });

  fireEvent.change(screen.getByLabelText("Car Serviced"), {
    target: { selectedIndex: 1 },
  });

  expect(mockSetValue).toHaveBeenCalled();
  expect(mockSetValue).toHaveBeenCalledWith(0);
});

test("Field is disabled", () => {
  render(<CarServicedField disabled />, {
    initialState,
  });

  expect(screen.getByLabelText("Car Serviced")).toBeDisabled();
});
