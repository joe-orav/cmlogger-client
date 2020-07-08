import React from "react";
import SiteLayout from "../layout";
import { render } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Navbar is hidden when hideNavBar is set to true", () => {
  const { container } = render(<SiteLayout hideNavBar />);

  let renderedContent = container.firstChild;

  expect(renderedContent).toHaveClass("h-100 bg-light container-fluid");
});

test("Navbar is displayed when hideNavBar is not provided", () => {
  const { container } = render(<SiteLayout />, {
    initialState: { user: { profile: { id: 0, name: "Test User" } } },
  });

  let renderedContent = container.firstChild;

  expect(renderedContent).not.toHaveClass("h-100 bg-light container-fluid");
});
