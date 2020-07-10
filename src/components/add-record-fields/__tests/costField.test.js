import React from "react";
import CostField from "../costField";
import { render, screen, fireEvent } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Value remains the same when invalid input is recieved 1", () => {
  let mockSetValue = jest.fn();

  render(<CostField value="100.00" setValue={mockSetValue} />);

  fireEvent.change(screen.getByLabelText("Total Cost of Service"), {
    target: { value: "10R" },
  });

  expect(mockSetValue).toHaveBeenCalledWith("100.00");
});

test("Value remains the same when invalid input is recieved 2", () => {
  let mockSetValue = jest.fn();

  render(<CostField value="100.00" setValue={mockSetValue} />);

  fireEvent.change(screen.getByLabelText("Total Cost of Service"), {
    target: { value: "%me3" },
  });

  expect(mockSetValue).toHaveBeenCalledWith("100.00");
});

test("Value remains the same when invalid input is recieved 3", () => {
  let mockSetValue = jest.fn();

  render(<CostField value="100.00" setValue={mockSetValue} />);

  fireEvent.change(screen.getByLabelText("Total Cost of Service"), {
    target: { value: "34.56.2" },
  });

  expect(mockSetValue).toHaveBeenCalledWith("100.00");
});

test("Value remains the same when valid input is recieved 1", () => {
  let mockSetValue = jest.fn();

  render(<CostField value="100.00" setValue={mockSetValue} />);

  fireEvent.change(screen.getByLabelText("Total Cost of Service"), {
    target: { value: "35" },
  });

  expect(mockSetValue).toHaveBeenCalledWith("35");
});

test("Value remains the same when valid input is recieved 2", () => {
  let mockSetValue = jest.fn();

  render(<CostField value="100.00" setValue={mockSetValue} />);

  fireEvent.change(screen.getByLabelText("Total Cost of Service"), {
    target: { value: "24.0" },
  });

  expect(mockSetValue).toHaveBeenCalledWith("24.0");
});
