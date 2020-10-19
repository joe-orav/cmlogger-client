import React from "react";
import ServiceHistory from "../service-history";
import { render, screen } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { User1, User3 } from "../../mockdata/users";

test("Service History Page displays data", () => {
  window.scrollTo = jest.fn();
  render(<ServiceHistory />, { initialState: User1 });

  expect(screen.getByText("Test Place")).toBeInTheDocument();
  expect(
    screen.getByText("123 Abc St, TestCity, AZ, 123456")
  ).toBeInTheDocument();
  expect(screen.getByText("$150.00")).toBeInTheDocument();
  expect(screen.getByText("2020 Ford Fusion")).toBeInTheDocument();
  expect(screen.getByText("10/17/2020")).toBeInTheDocument();
  expect(screen.getByText("Oil Change, Tire replacement")).toBeInTheDocument();
});

test("Service History displays no data message", () => {
  window.scrollTo = jest.fn();
  render(<ServiceHistory />, { initialState: User3 });

  expect(screen.getByText("No records found")).toBeInTheDocument();
  expect(
    screen.getByText('Click "Add Service Record" to add a new service record')
  ).toBeInTheDocument();
});
