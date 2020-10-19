import React from "react";
import AlertContainer from "../alerts";
import { render, screen } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { User1, User2, User4 } from "../../mockdata/users";

test("Empty alert container", () => {
  const { queryByText } = render(<AlertContainer />, {
    initialState: User2,
  });
  expect(queryByText(/./i)).toBeNull();
});

test("Alert container displays 1 alert", () => {
  const { container, queryAllByText } = render(<AlertContainer />, {
    initialState: User1,
  });
  let component = container.firstChild;
  expect(queryAllByText(/./i)).toHaveLength(1);
  expect(screen.getByText(/This is a test success message/i)).toBeInTheDocument();
  expect(component.firstChild).toHaveClass("alert-success");
});

test("Alert container displays 2 alerts", () => {
  const { container, queryAllByText } = render(<AlertContainer />, {
    initialState: User4,
  });
  let component = container.firstChild;
  expect(queryAllByText(/./i)).toHaveLength(2);
  expect(screen.getByText(/Unable to retrieve data/i)).toBeInTheDocument();
  expect(screen.getByText(/This is a test success message/i)).toBeInTheDocument();
  expect(component.firstChild).toHaveClass("alert-danger");
  expect(component.lastChild).toHaveClass("alert-success");
});
