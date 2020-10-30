import React from "react"
import SitePageWrapper from "../sitePageWrapper"
import { render, screen } from "../../../utils/test-utils"
import "@testing-library/jest-dom/extend-expect"

test("Page title is displayed", () => {
  render(<SitePageWrapper title="New Page" />)
  expect(screen.getByText("New Page")).toBeInTheDocument()
})
