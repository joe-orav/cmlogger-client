import React from "react";
import ProfileFormPageWrapper from "../profileFormPageWrapper";
import { render, screen } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Form Page title is displayed", () => {
  render(<ProfileFormPageWrapper title="My new form" />);
  expect(screen.getByText("My new form")).toBeInTheDocument();
});

test("Form Page width is set", () => {
  render(<ProfileFormPageWrapper title="My new form" contentWidth="300" />);

  let pageContent = screen.queryByText((content, node) => {
    return (
      node.tagName.toLowerCase() === "div" &&
      node.firstElementChild.tagName.toLowerCase() === "p"
    );
  });

  let styles = window.getComputedStyle(pageContent);

  expect(styles["max-width"]).toBe("300px");
});
