import React from "react";
import PageWrapper from "../pageWrapper";
import { render, screen } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Render title and spacing in Page Wrapper", () => {
  render(<PageWrapper pageTitle="New Page" spacing={4} />);

  let titleElement = screen.getByText("New Page");

  expect(titleElement).toBeInTheDocument();
  expect(titleElement.parentElement).toHaveClass("pb-4");
});
