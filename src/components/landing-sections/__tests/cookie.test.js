import React from "react"
import CookieConsent from "../cookie"
import { render, fireEvent, screen } from "../../../utils/test-utils"
import "@testing-library/jest-dom/extend-expect"

describe("Cookie Consent Dialog", () => {
  beforeEach(() => {
    render(<CookieConsent />)
  })

  test("Consent dialog displays on render", () => {
    expect(
      screen.queryByText(/We use cookies to personalize your experience./)
    ).toBeInTheDocument()
  })

  test("Consent dialog disappears onclick", () => {
    fireEvent.click(screen.getByText("Got It!"))
    expect(
      screen.queryByText(/We use cookies to personalize your experience./)
    ).toBeNull()
  })
})
