import React from "react";
import AccountList from "../accountList";
import { render, screen } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { User3, User4 } from "../../../mockdata/users";

test("Correct info is displayed when both accounts are connected", () => {
  render(<AccountList />, { initialState: User4 });

  let connectedAccounts = screen.getAllByText("Connected");

  expect(connectedAccounts).toHaveLength(2);
  expect(connectedAccounts[0]).toHaveClass("text-success");
  expect(connectedAccounts[1]).toHaveClass("text-success");
  expect(screen.queryByText("Not Connected")).not.toBeInTheDocument();
});

test("Correct info is displayed when one account is connected", () => {
  render(<AccountList />, { initialState: User3 });

  let connectedAccounts = screen.getAllByText("Connected");

  expect(connectedAccounts).toHaveLength(1);
  expect(connectedAccounts[0]).toHaveClass("text-success");

  let disconnectedAccounts = screen.getAllByText("Not Connected");

  expect(disconnectedAccounts).toHaveLength(1);
  expect(disconnectedAccounts[0]).toHaveClass("text-danger");
});
