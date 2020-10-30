import React from "react"
import SitePageLayout from "../sitePageLayout"
import { render, screen } from "../../../utils/test-utils"
import "@testing-library/jest-dom/extend-expect"
import { User1, User5 } from "../../../mockdata/users"

test("Login button is shown and has correct link", () => {
  render(<SitePageLayout />, { initialState: User5 })
  expect(screen.queryByText("Log in")).toHaveAttribute("href", "/login")
})

test("My Account button is shown and has correct link", () => {
  render(<SitePageLayout />, { initialState: User1 })
  expect(screen.queryByText("My Account")).toHaveAttribute("href", "/dashboard")
})
