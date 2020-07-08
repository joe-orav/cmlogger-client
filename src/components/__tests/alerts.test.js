import React from "react";
import AlertContainer from "../alerts";
import { render, screen } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Empty alert container", () => {
  const { queryByText } = render(<AlertContainer />, {
    initialState: { alerts: [] },
  });
  expect(queryByText(/./i)).toBeNull();
});

test("Alert container displays 1 alert", () => {
  const { container, queryAllByText } = render(<AlertContainer />, {
    initialState: { alerts: [{ message: "Test Message", type: "success" }] },
  });
  let component = container.firstChild;
  expect(queryAllByText(/./i)).toHaveLength(1);
  expect(screen.getByText(/test message/i)).toBeInTheDocument();
  expect(component.firstChild).toHaveClass("alert-success");
});

test("Alert container displays 2 alerts", () => {
  const { container, queryAllByText } = render(<AlertContainer />, {
    initialState: {
      alerts: [
        { message: "Test Message", type: "success" },
        { message: "Another message", type: "danger" },
      ],
    },
  });
  let component = container.firstChild;
  expect(queryAllByText(/./i)).toHaveLength(2);
  expect(screen.getByText(/test message/i)).toBeInTheDocument();
  expect(screen.getByText(/another message/i)).toBeInTheDocument();
  expect(component.firstChild).toHaveClass("alert-success");
  expect(component.lastChild).toHaveClass("alert-danger");
});
