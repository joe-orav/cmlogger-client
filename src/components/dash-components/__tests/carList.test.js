import React from "react";
import CarList from "../carList";
import { render, screen } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Message is shown that no data is available", () => {
  render(<CarList />, {
    initialState: { cars: { items: [], loading: false, error: null } },
  });

  expect(screen.getByText("No Data Available")).toBeInTheDocument();
});

test("Car info is displayed", () => {
  render(<CarList />, {
    initialState: {
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
    },
  });

  expect(screen.getByText("2020 Ford Fusion")).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveAttribute("href", "/cars");
});
