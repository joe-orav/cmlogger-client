import React from "react";
import Cars from "../cars";
import { render, screen } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Car page displays two cars", () => {
  render(<Cars />, {
    initialState: {
      cars: {
        items: [
          {
            id: 100,
            user_id: 5,
            type: "sedan",
            car_year: 2020,
            make: "Ford",
            model: "Fusion",
            vin: "J4IG72MJ02B693B7A",
          },
          {
            id: 1,
            user_id: 5,
            type: "sedan",
            car_year: 2017,
            make: "Toyota",
            model: "Camry",
            vin: "D64MFO3BG85NJ02G7",
          },
        ],
        loading: false,
        error: null,
      },
    },
  });

  expect(screen.getByText("2020 Ford Fusion")).toBeInTheDocument();
  expect(screen.getByText("VIN: J4IG72MJ02B693B7A")).toBeInTheDocument();
  expect(screen.getByText("2017 Toyota Camry")).toBeInTheDocument();
  expect(screen.getByText("VIN: D64MFO3BG85NJ02G7")).toBeInTheDocument();
  expect(screen.getAllByText("Edit")).toHaveLength(2);
  expect(screen.getAllByText("Add Record")).toHaveLength(2);
  expect(
    screen.getAllByText((c, node) => {
      return (
        node.textContent === "Delete" && node.tagName.toLowerCase() === "a"
      );
    })
  ).toHaveLength(2);
  expect(screen.getByText("Add New Car")).toBeInTheDocument();
});

test("Car page displays no cars", () => {
  render(<Cars />, {
    initialState: {
      cars: {
        items: [],
        loading: false,
        error: null,
      },
    },
  });

  expect(screen.getByText("Add New Car")).toBeInTheDocument();
});
