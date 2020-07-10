import React from "react";
import ModelField from "../modelField";
import { render, screen, fireEvent } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Field displays value", () => {
  render(<ModelField value="Civic" />);
  expect(screen.queryByDisplayValue("Civic")).toBeInTheDocument();
});

test("Field value is changed", () => {
  const mockSetValue = jest.fn();

  render(<ModelField setValue={mockSetValue} />);

  fireEvent.change(screen.getByLabelText("Model"), {
    target: { value: "Accord" },
  });

  expect(mockSetValue).toHaveBeenCalledWith("Accord");
});
