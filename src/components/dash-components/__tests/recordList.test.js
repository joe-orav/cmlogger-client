import React from "react";
import RecordList from "../recordList";
import { render, screen } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { User1, User3 } from "../../../mockdata/users";

test("Message is shown that no data is available", () => {
  render(<RecordList />, { initialState: User3 });
  expect(screen.getByText("No Data Available")).toBeInTheDocument();
});

test("Service History info is displayed", () => {
  render(<RecordList />, { initialState: User1 });
  expect(screen.getByText("Oil Change, Tire replacement")).toBeInTheDocument();
  expect(screen.getByText("2020 Ford Fusion")).toBeInTheDocument();
  expect(screen.getByText("10/17/2020")).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveAttribute("href", "/service-history");
});
