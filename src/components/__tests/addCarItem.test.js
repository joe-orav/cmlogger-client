import React from "react";
import AddCarItem from "../addCarItem";
import { render } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Add Car Link is valid", () => {
  const { container } = render(<AddCarItem />);

  let elementLink = container.firstChild.firstChild;
  expect(elementLink).toHaveAttribute("href", "/add-car");
});
