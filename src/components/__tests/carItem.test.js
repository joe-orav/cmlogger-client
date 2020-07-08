import React from "react";
import CarItem from "../carItem";
import { render, screen } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Car Item displays data", () => {
  let testCar = {
    user_id: 0,
    id: 2,
    type: "sedan",
    car_year: 2020,
    make: "Toyota",
    model: "Camry",
    vin: "D64MFO3BG85NJ02G7",
    fullname: "2020 Toyota Camry",
  };

  render(<CarItem car={testCar} />);

  expect(screen.getByText(/2020 Toyota Camry/)).toBeInTheDocument();
  expect(screen.getByText(/VIN: D64MFO3BG85NJ02G7/)).toBeInTheDocument();
  expect(screen.getByAltText(/sedan/)).toBeInTheDocument();
  expect(screen.getByText(/Edit/)).toHaveAttribute("href", "/add-car?id=2");
  expect(screen.getByText(/Add Record/)).toHaveAttribute(
    "href",
    "/add-record?carid=2"
  );
});

test("VIN text displays 'Not Provided' when null", () => {
  let testCar = {
    user_id: 0,
    id: 2,
    type: "sedan",
    car_year: 2020,
    make: "Toyota",
    model: "Camry",
    vin: null,
    fullname: "2020 Toyota Camry",
  };

  render(<CarItem car={testCar} />);
  expect(screen.getByText(/Not Provided/)).toBeInTheDocument();
});
