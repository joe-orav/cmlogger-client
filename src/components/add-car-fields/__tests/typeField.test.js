import React from "react";
import TypeField from "../typeField";
import { render, screen, fireEvent } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Field displays value", () => {
  render(<TypeField value="truck" />);
  expect(screen.queryByDisplayValue("Truck")).toBeInTheDocument();
});

test("Field value is changed", () => {
  const mockSetValue = jest.fn();

  render(<TypeField setValue={mockSetValue} />);

  fireEvent.change(screen.getByLabelText("Type"), {
    target: { value: "van" },
  });

  expect(mockSetValue).toHaveBeenCalledWith("van");
});
