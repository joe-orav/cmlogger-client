import React from "react";
import DeleteAccount from "../deleteAccount";
import { render, fireEvent, screen } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { User1 } from "../../mockdata/users";

test("Delete button is enabled when checkbox is checked", () => {
  render(<DeleteAccount />, { initialState: User1});
  let checkbox = screen.getByLabelText(
    "I confirm that I want to delete my account"
  );

  let deleteButton = screen.getByText("Delete Account");

  expect(deleteButton).toBeDisabled();

  fireEvent.click(checkbox, { target: { checked: true } });

  expect(deleteButton).toHaveAttribute("disabled", "");
});
