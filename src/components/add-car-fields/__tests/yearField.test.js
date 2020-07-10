import React from "react";
import YearField from "../yearField";
import { render, screen, fireEvent } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Field displays value", () => {
  render(<YearField value="2010" />);
  expect(screen.queryByDisplayValue("2010")).toBeInTheDocument();
});

test("Field value is changed", () => {
  const mockSetValue = jest.fn();

  render(<YearField setValue={mockSetValue} />);

  fireEvent.change(screen.getByLabelText("Year"), {
    target: { value: "2016" },
  });

  expect(mockSetValue).toHaveBeenCalledWith("2016");
});
