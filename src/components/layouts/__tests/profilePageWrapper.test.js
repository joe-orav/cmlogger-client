import React from "react";
import ProfilePageWrapper from "../profilePageWrapper";
import { render, screen } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Render title and spacing in Page Wrapper", () => {
  render(<ProfilePageWrapper pageTitle="New Page" spacing={4} />);

  let titleElement = screen.getByText("New Page");

  expect(titleElement).toBeInTheDocument();
  expect(titleElement.parentElement).toHaveClass("pb-4");
});
