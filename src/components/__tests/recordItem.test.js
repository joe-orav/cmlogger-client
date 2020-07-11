import React from "react";
import RecordItem from "../recordItem";
import { render, screen, fireEvent } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

let renderedRecordItem = (
  <RecordItem
    index={1}
    record={{
      id: 100,
      cost: "100.00",
      notes: null,
      car: {
        id: 100,
        user_id: 0,
        type: "sedan",
        car_year: 2020,
        make: "Ford",
        model: "Fusion",
        VIN: "J4IG72MJ02B693B7A",
        fullname: "2020 Ford Fusion",
      },
      services: [
        { id: 100, user_id: 0, sname: "Oil Change" },
        { id: 200, user_id: 0, sname: "Tire replacement" },
      ],
      location: {
        id: 100,
        user_id: 0,
        name: "Test Place",
        address: "123 Abc St",
        city: "TestCity",
        state: "TS",
        zip_code: "123456",
      },
      date: "10/17/2020",
    }}
  />
);

test("RecordItem data is displayed", () => {
  render(renderedRecordItem);

  expect(screen.getByText("2020 Ford Fusion")).toBeInTheDocument();
  expect(screen.getByText("10/17/2020")).toBeInTheDocument();
  expect(screen.getByText("Oil Change, Tire replacement")).toBeInTheDocument();
  expect(screen.getByText("Test Place")).toBeInTheDocument();
  expect(
    screen.getByText("123 Abc St, TestCity, TS, 123456")
  ).toBeInTheDocument();
  expect(screen.getByText("$100.00")).toBeInTheDocument();
});

test("RecordItem additional data is displayed on click", () => {
  render(renderedRecordItem);

  let summaryElement = screen.getByText((content, node) => {
    return node.classList.contains("row") && node.classList.contains("pt-3");
  });

  fireEvent.click(summaryElement);

  let collapsedRow = screen.getByText((content, node) => {
    return node.id === "record-item-1";
  });

  fireEvent.transitionEnd(collapsedRow);

  expect(collapsedRow).toHaveClass("collapse show");
});

test("RecordItem has correct edit link", () => {
  render(renderedRecordItem);
  expect(screen.getByRole("link")).toHaveAttribute(
    "href",
    "/add-record?id=100"
  );
});
