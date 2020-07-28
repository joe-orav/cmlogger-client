import React from "react";
import AddlServicesField from "../addlServicesField";
import { render, screen, fireEvent } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Field displays provided value", () => {
  render(<AddlServicesField value="Oil Change" />);
  expect(screen.getByDisplayValue("Oil Change")).toBeInTheDocument();
});

test("Field is required", () => {
  render(<AddlServicesField required />);
  expect(screen.getByLabelText("Services (New)")).toBeRequired();
});

test("Field set value function is called", () => {
  let mockSetValue = jest.fn();

  render(<AddlServicesField value="" setValue={mockSetValue} required />);

  fireEvent.change(screen.getByLabelText("Services (New)"), {
    target: { value: "Hello" },
  });

  expect(mockSetValue).toHaveBeenCalled();
  expect(mockSetValue).toHaveBeenCalledWith("Hello");
});
