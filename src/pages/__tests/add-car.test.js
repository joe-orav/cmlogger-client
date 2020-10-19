import React from "react";
import AddCar, { validateQuery } from "../add-car";
import { render, screen, fireEvent } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { User1 } from "../../mockdata/users";

test("Incomplete field errors are displayed", () => {
  render(<AddCar />, { initialState: User1, history });

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
