import React from "react";
import MakeField from "../makeField";
import { render, screen, fireEvent } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Field displays value", () => {
  render(<MakeField value="Honda" />);
  expect(screen.queryByDisplayValue("Honda")).toBeInTheDocument();
});

test("Field value is changed", () => {
  const mockSetValue = jest.fn();

  render(<MakeField setValue={mockSetValue} />);

  fireEvent.change(screen.getByLabelText("Make"), {
    target: { value: "Toyota" },
  });

  expect(mockSetValue).toHaveBeenCalledWith("Toyota");
});
