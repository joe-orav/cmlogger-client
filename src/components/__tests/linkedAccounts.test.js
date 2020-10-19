import React from "react";
import LinkedAccounts from "../linkedAccounts";
import { render, screen } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { User1, User3, User4 } from "../../mockdata/users";

test("Connect option is not shown when all accounts are linked", () => {
  render(<LinkedAccounts />, {
    initialState: User4,
  });

  expect(screen.queryByText("Connect")).toBeNull();
});

test("Connect link for Google is shown and has correct link", () => {
  render(<LinkedAccounts />, {
    initialState: User3,
  });

  expect(screen.queryByText("Connect")).toHaveAttribute("href", "/auth/google");
});

test("Connect link for Facebook is shown and has correct link", () => {
  render(<LinkedAccounts />, {
    initialState: User1,
  });

  expect(screen.queryByText("Connect")).toHaveAttribute(
    "href",
    "/auth/facebook"
  );
});

test("Connection error is displayed", () => {
  render(<LinkedAccounts connectionAttempt="error" />, {
    initialState: User1,
  });

  expect(
    screen.getByText(
      "Error: There is already a profile associated with the account you want to connect"
    )
  ).toBeInTheDocument();
});
