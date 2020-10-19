import React from "react";
import FreqLocationsList from "../freqLocations";
import { render, screen } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { User1, User3 } from "../../../mockdata/users";

test("Message is shown that no data is available", () => {
  render(<FreqLocationsList />, { initialState: User3 });
  expect(screen.getByText("No Data Available")).toBeInTheDocument();
});

test("Location info is displayed", () => {
  render(<FreqLocationsList />, { initialState: User1 });
  expect(screen.getByText("Test Place")).toBeInTheDocument();
  expect(screen.getByText("10/17/2020")).toBeInTheDocument();
});
