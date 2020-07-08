import React from "react";
import ProfileNav from "../profileNav";
import {
  render,
  screen,
  fireEvent,
  waitForElement,
} from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("User info is shown on exapnded nav", () => {
  render(<ProfileNav.NavExpanded name="Test User" icon="/path/to/image" />);
  expect(screen.getByTitle("Test User")).toHaveAttribute(
    "src",
    "/path/to/image"
  );
});

test("User info is shown on condensed nav", async () => {
  render(<ProfileNav.NavCondensed name="Test User" icon="/path/to/image" />);

  expect(screen.getByTitle("Test User")).toHaveAttribute(
    "src",
    "/path/to/image"
  );

  let toggler = screen.getByText(
    (c, node) => node.tagName.toLowerCase() === "a"
  );

  await waitForElement(() => fireEvent.click(toggler));

  expect(screen.getByText("Test User")).toBeInTheDocument();
});
