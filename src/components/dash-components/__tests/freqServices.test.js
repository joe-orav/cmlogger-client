import React from "react";
import FreqServicesList from "../freqServices";
import { render, screen } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { User1, User3 } from "../../../mockdata/users";

test("Message is shown that no data is available", () => {
  render(<FreqServicesList />, { initialState: User3 });
  expect(screen.getByText("No Data Available")).toBeInTheDocument();
});

test("Services info is displayed", () => {
  render(<FreqServicesList />, { initialState: User1 });
  expect(screen.getByText("Oil Change")).toBeInTheDocument();
  expect(screen.getByText("Tire replacement")).toBeInTheDocument();
  expect(screen.getAllByText("10/17/2020")).toHaveLength(2);
  expect(screen.getAllByText("1")).toHaveLength(2);
});
