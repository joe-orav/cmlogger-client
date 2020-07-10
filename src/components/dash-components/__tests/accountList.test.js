import React from "react";
import AccountList from "../accountList";
import { render, screen } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Correct info is displayed when both accounts are connected", () => {
  let initialState = {
    user: {
      profile: {
        googleConnected: true,
        facebookConnected: true,
      },
    },
  };

  render(<AccountList />, { initialState });

  let connectedAccounts = screen.getAllByText("Connected");

  expect(connectedAccounts).toHaveLength(2);
  expect(connectedAccounts[0]).toHaveClass("text-success");
  expect(connectedAccounts[1]).toHaveClass("text-success");
  expect(screen.queryByText("Not Connected")).not.toBeInTheDocument();
});

test("Correct info is displayed when one account is connected", () => {
  let initialState = {
    user: {
      profile: {
        googleConnected: false,
        facebookConnected: true,
      },
    },
  };

  render(<AccountList />, { initialState });

  let connectedAccounts = screen.getAllByText("Connected");

  expect(connectedAccounts).toHaveLength(1);
  expect(connectedAccounts[0]).toHaveClass("text-success");

  let disconnectedAccounts = screen.getAllByText("Not Connected");

  expect(disconnectedAccounts).toHaveLength(1);
  expect(disconnectedAccounts[0]).toHaveClass("text-danger");
});
