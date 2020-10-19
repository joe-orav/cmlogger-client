import React from "react";
import Overview from "../overview";
import { render, screen } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { User1, User3 } from "../../../mockdata/users";

test("Overview block displays data", () => {
  render(<Overview />, { initialState: User1 });
  expect(screen.getAllByText("1")).toHaveLength(2);
  expect(screen.getByText("$150.00")).toBeInTheDocument();
});

test("Overview block displays zero values when do data is available", () => {
  render(<Overview />, { initialState: User3 });
  expect(screen.getAllByText("0")).toHaveLength(2);
  expect(screen.getByText("$0.00")).toBeInTheDocument();
});
