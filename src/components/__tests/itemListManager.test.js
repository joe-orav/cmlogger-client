import React from "react";
import ItemListManager from "../itemListManager";
import { render, screen, fireEvent } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Removing items from a list", () => {
  let mockRemoveAction = jest.fn();
  let dataList = [
    { id: 1, value: "test text" },
    { id: 2, value: "more text" },
  ];

  render(
    <ItemListManager
      dataList={dataList}
      dataLoaded={true}
      removeAction={mockRemoveAction}
    />
  );

  let removeBtn = screen.getByText("Remove");

  expect(removeBtn).toBeDisabled();

  fireEvent.change(screen.getByRole("listbox"), {
    target: { selectedIndex: 1 },
  });

  expect(removeBtn).not.toBeDisabled();

  fireEvent.click(removeBtn);

  expect(mockRemoveAction).toHaveBeenCalled();

  expect(removeBtn).toBeDisabled();
});

test("Item list is empty when data isn't loaded", () => {
  let dataList = [
    { id: 1, value: "test text" },
    { id: 2, value: "more text" },
  ];

  render(
    <ItemListManager
      dataList={dataList}
      dataLoaded={false}
    />
  );

  expect(screen.getByRole("listbox")).toBeEmpty();
});
