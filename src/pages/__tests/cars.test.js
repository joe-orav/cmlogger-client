import React from "react";
import Cars from "../cars";
import { render, screen } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { User3, User4 } from "../../mockdata/users";

test("Car page displays two cars", () => {
  render(<Cars />, {
    initialState: User4,
  });

  expect(screen.getByText("2008 Toyota Sequoia")).toBeInTheDocument();
  expect(screen.getByText("VIN: 5N1AR2MM2EC787277")).toBeInTheDocument();
  expect(screen.getByText("2014 Honda Pilot")).toBeInTheDocument();
  expect(screen.getByText("VIN: 1GNEC13R6WJ390853")).toBeInTheDocument();
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
    initialState: User3,
  });

  expect(screen.getByText("Add New Car")).toBeInTheDocument();
});
