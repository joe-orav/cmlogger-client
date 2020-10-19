import React from "react";
import CarServicedField from "../carServicedField";
import { render, screen, fireEvent } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { User4 } from "../../../mockdata/users";

let mockSetValue = jest.fn();

test("Field has options from state", () => {
  render(<CarServicedField />, { initialState: User4 });

  expect(screen.getAllByRole("option")).toHaveLength(3);
  expect(screen.getByText("2008 Toyota Sequoia")).toBeInTheDocument();
  expect(screen.getByText("2014 Honda Pilot")).toBeInTheDocument();
});

test("Field displays provided value", () => {
  render(<CarServicedField value={300} />, { initialState: User4 });

  expect(screen.getByLabelText("Car Serviced")).toHaveValue("300");
  expect(screen.getByDisplayValue("2008 Toyota Sequoia")).toBeInTheDocument();
});

test("Field set value function is called", () => {
  render(<CarServicedField value={300} setValue={mockSetValue} />, {
    initialState: User4,
  });

  fireEvent.change(screen.getByLabelText("Car Serviced"), {
    target: { selectedIndex: 2 },
  });

  expect(mockSetValue).toHaveBeenCalled();
  expect(mockSetValue).toHaveBeenCalledWith(310);
});

test("Field is disabled", () => {
  render(<CarServicedField disabled />, {
    initialState: User4,
  });

  expect(screen.getByLabelText("Car Serviced")).toBeDisabled();
});
