import React from "react";
import VinField from "../vinField";
import { render, screen, fireEvent } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Field displays value", () => {
  render(<VinField value="J4IG72MJ02B693B7A" />);
  expect(screen.queryByDisplayValue("J4IG72MJ02B693B7A")).toBeInTheDocument();
});

test("Field value is changed", () => {
  const mockSetValue = jest.fn();

  render(<VinField setValue={mockSetValue} />);

  fireEvent.change(screen.getByLabelText("VIN #"), {
    target: { value: "D64MFO3BG85NJ02G7" },
  });

  expect(mockSetValue).toHaveBeenCalledWith("D64MFO3BG85NJ02G7");
});
