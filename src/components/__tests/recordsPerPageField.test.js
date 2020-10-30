import React from "react"
import RecordsPerPageField from "../recordsPerPageField"
import { render, fireEvent, screen } from "../../utils/test-utils"
import "@testing-library/jest-dom/extend-expect"

test("Value is set in local storage", () => {
  const spySetItem = jest.spyOn(Storage.prototype, "setItem")
  render(<RecordsPerPageField />)
  fireEvent.change(screen.getByRole("spinbutton"), {target: {value: 50}})
  expect(spySetItem).toHaveBeenCalledWith("serviceItemsPerPage", "50")
})
