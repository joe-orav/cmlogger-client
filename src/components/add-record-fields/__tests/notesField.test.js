import React from "react";
import NotesField from "../notesField";
import { render, screen, fireEvent } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Provided value is displayed", () => {
  render(<NotesField value="This is a note" />);
  expect(screen.getByLabelText("Notes")).toHaveValue("This is a note");
});

test("Field set value function is called", () => {
  let mockSetValue = jest.fn();

  render(<NotesField value="" setValue={mockSetValue} />);

  fireEvent.change(screen.getByLabelText("Notes"), {
    target: { value: "Hello" },
  });

  expect(mockSetValue).toHaveBeenCalled();
  expect(mockSetValue).toHaveBeenCalledWith("Hello");
});
