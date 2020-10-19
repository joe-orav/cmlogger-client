import React from "react"
import CarList from "../carList"
import { render, screen } from "../../../utils/test-utils"
import "@testing-library/jest-dom/extend-expect"
import { User1, User3 } from "../../../mockdata/users"

test("Message is shown that no data is available", () => {
  render(<CarList />, {
    initialState: User3,
  })

  expect(screen.getByText("No Data Available")).toBeInTheDocument()
})

test("Car info is displayed", () => {
  render(<CarList />, {
    initialState: User1,
  })

  expect(screen.getByText("2020 Ford Fusion")).toBeInTheDocument()
  expect(screen.getByRole("link")).toHaveAttribute("href", "/cars")
})
