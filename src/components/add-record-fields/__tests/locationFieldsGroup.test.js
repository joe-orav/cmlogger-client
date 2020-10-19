import React from "react";
import LocationFieldsGroup from "../locationFieldsGroup";
import { render, screen, fireEvent } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { User1 } from "../../../mockdata/users";

describe("Location not included", () => {
  const values = {
    savedLocValue: -1,
  };

  beforeEach(() => {
    render(<LocationFieldsGroup values={values} />, { initialState: User1 });
  });

  test("Saved Locations is set to correctly", () => {
    expect(screen.getByLabelText("Saved Locations")).toHaveValue("-1");
  });

  test("Location name is empty, disabled and not required", () => {
    let locationNameField = screen.getByLabelText("Location Name");

    expect(locationNameField).toHaveValue("");
    expect(locationNameField).toBeDisabled();
    expect(locationNameField).not.toBeRequired();
  });

  test("Address is empty, disabled and not required", () => {
    let addressField = screen.getByLabelText("Address");

    expect(addressField).toHaveValue("");
    expect(addressField).toBeDisabled();
    expect(addressField).not.toBeRequired();
  });

  test("City is empty, disabled and not required", () => {
    let cityField = screen.getByLabelText("City");

    expect(cityField).toHaveValue("");
    expect(cityField).toBeDisabled();
    expect(cityField).not.toBeRequired();
  });

  test("State is empty, disabled and not required", () => {
    let stateField = screen.getByLabelText("State");

    expect(stateField).toHaveValue("");
    expect(stateField).toBeDisabled();
    expect(stateField).not.toBeRequired();
  });

  test("ZIP Code is empty, disabled and not required", () => {
    let zipCodeField = screen.getByLabelText("ZIP Code");

    expect(zipCodeField).toHaveValue("");
    expect(zipCodeField).toBeDisabled();
    expect(zipCodeField).not.toBeRequired();
  });
});

describe("New Location", () => {
  const values = {
    savedLocValue: 0,
  };

  const mockSetValues = {
    setLocName: jest.fn(),
    setLocAddress: jest.fn(),
    setLocCity: jest.fn(),
    setLocState: jest.fn(),
    setLocZIP: jest.fn(),
  };

  beforeEach(() => {
    render(<LocationFieldsGroup values={values} setValues={mockSetValues} />, {
      initialState: User1,
    });
  });

  test("Saved Locations is set correctly", () => {
    expect(screen.getByLabelText("Saved Locations")).toHaveValue("0");
  });

  test("Location name is required and editable", () => {
    let locationNameField = screen.getByLabelText("Location Name");

    expect(locationNameField).toHaveValue("");
    expect(locationNameField).not.toBeDisabled();
    expect(locationNameField).toBeRequired();

    fireEvent.change(locationNameField, {
      target: { value: "name" },
    });

    expect(mockSetValues.setLocName).toHaveBeenCalledWith("name");
  });

  test("Address is required and editable", () => {
    let addressField = screen.getByLabelText("Address");

    expect(addressField).toHaveValue("");
    expect(addressField).not.toBeDisabled();
    expect(addressField).toBeRequired();

    fireEvent.change(addressField, {
      target: { value: "address" },
    });

    expect(mockSetValues.setLocAddress).toHaveBeenCalledWith("address");
  });

  test("City is required and editable", () => {
    let cityField = screen.getByLabelText("City");

    expect(cityField).toHaveValue("");
    expect(cityField).not.toBeDisabled();
    expect(cityField).toBeRequired();

    fireEvent.change(cityField, {
      target: { value: "city" },
    });

    expect(mockSetValues.setLocCity).toHaveBeenCalledWith("city");
  });

  test("State is required and editable", () => {
    let stateField = screen.getByLabelText("State");

    expect(stateField).toHaveValue("");
    expect(stateField).not.toBeDisabled();
    expect(stateField).toBeRequired();

    fireEvent.change(stateField, {
      target: { value: "NJ" },
    });

    expect(mockSetValues.setLocState).toHaveBeenCalledWith("NJ");
  });

  test("ZIP Code is required and editable", () => {
    let zipCodeField = screen.getByLabelText("ZIP Code");

    expect(zipCodeField).toHaveValue("");
    expect(zipCodeField).not.toBeDisabled();
    expect(zipCodeField).toBeRequired();

    fireEvent.change(zipCodeField, {
      target: { value: "12345" },
    });

    expect(mockSetValues.setLocZIP).toHaveBeenCalledWith("12345");
  });
});

describe("Location already selected", () => {
  const values = {
    savedLocValue: 100,
    locName: "Test Place",
    locAddress: "123 Abc St",
    locCity: "TestCity",
    locState: "NJ",
    locZIP: "123456",
  };

  beforeEach(() => {
    render(<LocationFieldsGroup values={values} />, {
      initialState: User1,
    });
  });

  test("Saved Locations is set correctly", () => {
    expect(screen.getByLabelText("Saved Locations")).toHaveValue("-1");
  });

  test("Location name is provided and uneditable", () => {
    let locationNameField = screen.getByLabelText("Location Name");

    expect(locationNameField).toHaveValue("Test Place");
    expect(locationNameField).toBeDisabled();
  });

  test("Address is provided and uneditable", () => {
    let addressField = screen.getByLabelText("Address");

    expect(addressField).toHaveValue("123 Abc St");
    expect(addressField).toBeDisabled();
  });

  test("City is provided and uneditable", () => {
    let cityField = screen.getByLabelText("City");

    expect(cityField).toHaveValue("TestCity");
    expect(cityField).toBeDisabled();
  });

  test("State is provided and uneditable", () => {
    let stateField = screen.getByLabelText("State");

    expect(stateField).toHaveValue("NJ");
    expect(stateField).toBeDisabled();
  });

  test("ZIP Code is provided and uneditable", () => {
    let zipCodeField = screen.getByLabelText("ZIP Code");

    expect(zipCodeField).toHaveValue("123456");
    expect(zipCodeField).toBeDisabled();
  });
});

test("Location field value changes on select", () => {
  const values = {
    savedLocValue: -1,
  };

  const mockSetValues = {
    setLocName: jest.fn(),
    setLocAddress: jest.fn(),
    setLocCity: jest.fn(),
    setLocState: jest.fn(),
    setLocZIP: jest.fn(),
    setSavedLocValue: jest.fn(),
  };

  render(<LocationFieldsGroup values={values} setValues={mockSetValues} />, {
    initialState: User1,
  });

  fireEvent.change(screen.getByLabelText("Saved Locations"), {
    target: { selectedIndex: 2 },
  });

  expect(mockSetValues.setLocName).toHaveBeenCalledWith("Test Place");
  expect(mockSetValues.setLocAddress).toHaveBeenCalledWith("123 Abc St");
  expect(mockSetValues.setLocCity).toHaveBeenCalledWith("TestCity");
  expect(mockSetValues.setLocState).toHaveBeenCalledWith("AZ");
  expect(mockSetValues.setLocZIP).toHaveBeenCalledWith("123456");
  expect(mockSetValues.setSavedLocValue).toHaveBeenCalledWith(102);

  fireEvent.change(screen.getByLabelText("Saved Locations"), {
    target: { selectedIndex: 1 },
  });

  expect(mockSetValues.setLocName).toHaveBeenCalledWith("");
  expect(mockSetValues.setLocAddress).toHaveBeenCalledWith("");
  expect(mockSetValues.setLocCity).toHaveBeenCalledWith("");
  expect(mockSetValues.setLocState).toHaveBeenCalledWith("");
  expect(mockSetValues.setLocZIP).toHaveBeenCalledWith("");
  expect(mockSetValues.setSavedLocValue).toHaveBeenLastCalledWith(0);
});
