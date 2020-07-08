import React from "react";
import { SectionItem, SettingsSection } from "../settingsSection";
import { render, screen } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

test("Section item displays information", () => {
  render(
    <SectionItem label="New Item" description="This is not a real item" />
  );

  expect(screen.getByText("New Item")).toBeInTheDocument();
  expect(screen.getByText("This is not a real item")).toBeInTheDocument();
});

test("Section displays information", () => {
  render(<SettingsSection label="Main Section" />);
  expect(screen.getByText("Main Section")).toBeInTheDocument();
});
