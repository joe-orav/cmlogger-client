import React from "react"
import Pagination from "../pagination"
import { render, fireEvent, screen } from "../../utils/test-utils"
import "@testing-library/jest-dom/extend-expect"

describe("Pagination functions correctly", () => {
  let mockPageChangeFn = jest.fn()

  beforeEach(() => {
    render(
      <Pagination
        numberOfPages={5}
        activePage={1}
        onPageChange={mockPageChangeFn}
      />
    )
  })

  test("Page numbers are displayed", () => {
    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("2")).toBeInTheDocument()
    expect(screen.getByText("3")).toBeInTheDocument()
    expect(screen.getByText("4")).toBeInTheDocument()
    expect(screen.getByText("5")).toBeInTheDocument()
    expect(screen.queryByText("6")).toBeNull()
  })

  test("Active page has active class", () => {
    let pageNumComp = screen.getByText("1")
    expect(pageNumComp.parentElement.classList.contains("active")).toBe(true)
  })

  test("onPageChange function is called with correct value", () => {
    fireEvent.click(screen.getByText("3"))
    expect(mockPageChangeFn).toHaveBeenCalledWith(3)

    fireEvent.click(screen.getByText("«"))
    expect(mockPageChangeFn).toHaveBeenCalledWith(1)

    fireEvent.click(screen.getByText("»"))
    expect(mockPageChangeFn).toHaveBeenCalledWith(5)
  })
})

test("Previous and next page buttons call correct page values", () => {
  let mockPageChangeFn = jest.fn()
  
  render(
    <Pagination
      numberOfPages={5}
      activePage={3}
      onPageChange={mockPageChangeFn}
    />
  )

  fireEvent.click(screen.getByText("‹"))
  expect(mockPageChangeFn).toHaveBeenCalledWith(2)

  fireEvent.click(screen.getByText("›"))
  expect(mockPageChangeFn).toHaveBeenCalledWith(4)
})
