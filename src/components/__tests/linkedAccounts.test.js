import React from "react";
import LinkedAccounts from "../linkedAccounts";
import { render, screen } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Connect option is not shown when all accounts are linked", () => {
  render(<LinkedAccounts />, {
    initialState: {
      user: {
        profile: {
          googleConnected: true,
          facebookConnected: true,
        },
      },
    },
  });

  expect(screen.queryByText("Connect")).toBeNull();
});

test("Connect link for Google is shown and has correct link", () => {
  render(<LinkedAccounts />, {
    initialState: {
      user: {
        profile: {
          googleConnected: false,
          facebookConnected: true,
        },
      },
    },
  });

  expect(screen.queryByText("Connect")).toHaveAttribute("href", "/auth/google");
});

test("Connect link for Facebook is shown and has correct link", () => {
  render(<LinkedAccounts />, {
    initialState: {
      user: {
        profile: {
          googleConnected: true,
          facebookConnected: false,
        },
      },
    },
  });

  expect(screen.queryByText("Connect")).toHaveAttribute(
    "href",
    "/auth/facebook"
  );
});

test("Connection error is displayed", () => {
  render(<LinkedAccounts connectionAttempt="error" />, {
    initialState: {
      user: {
        profile: {
          googleConnected: true,
          facebookConnected: false,
        },
      },
    },
  });

  expect(
    screen.getByText(
      "Error: There is already a profile associated with the account you want to connect"
    )
  ).toBeInTheDocument();
});
