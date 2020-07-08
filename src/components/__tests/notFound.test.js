import React from "react";
import NotFound from "../notFound";
import { render, screen } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Content is displayed", () => {
  render(
    <NotFound
      title="No Data Found"
      children="More details on no data being found"
    />
  );

  expect(screen.getByText("No Data Found")).toBeInTheDocument();
  expect(
    screen.getByText("More details on no data being found")
  ).toBeInTheDocument();
});

test("Divider is hidden", () => {
  render(
    <NotFound
      title="No Data Found"
      children="More details on no data being found"
      noDivider
    />
  );

  expect(
    screen.queryByText((content, node) => {
      return node.tagName.toLowerCase() === "hr";
    })
  ).toBeNull();
});

test("Divider is shown", () => {
  render(
    <NotFound
      title="No Data Found"
      children="More details on no data being found"
    />
  );

  expect(
    screen.queryByText((content, node) => {
      return node.tagName.toLowerCase() === "hr";
    })
  ).toBeInTheDocument();
});
