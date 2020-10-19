import React from "react";
import ServicesField from "../servicesField";
import { render, screen } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { User1 } from "../../../mockdata/users";

test("Field has options from state", () => {
  render(<ServicesField />, { initialState: User1 });

  expect(screen.getAllByRole("option")).toHaveLength(2);
  expect(screen.getByText("Oil Change")).toBeInTheDocument();
  expect(screen.getByText("Tire replacement")).toBeInTheDocument();
});

test("Field displays provided value", () => {
  render(<ServicesField value={[150]} />, { initialState: User1 });

  expect(screen.getByLabelText("Services (Saved)")).toHaveValue(["150"]);
});

test("Field is disabled", () => {
  render(<ServicesField required />, {
    initialState: User1,
  });

  expect(screen.getByLabelText("Services (Saved)")).toBeRequired();
});

test("Field recieves selected items", () => {
  const mockSetValue = jest.fn();
  render(<ServicesField setValue={mockSetValue} />, { initialState: User1 });

  userEvent.selectOptions(screen.getByLabelText("Services (Saved)"), ["150", "151"]);

  let options = screen.getAllByRole("option");

  expect(options[0].selected).toBe(true);
  expect(options[1].selected).toBe(true);

  expect(mockSetValue).toHaveBeenLastCalledWith([150,151]);
});
