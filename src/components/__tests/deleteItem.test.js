import React from "react";
import DeleteItem from "../deleteItem";
import { render, fireEvent, screen } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

describe("Delete overlay component", () => {
  let mockSetShow = jest.fn(() => false);
  let mockAction = jest.fn();
  const RenderedDeleteItem = (
    <DeleteItem
      show={true}
      setShow={mockSetShow}
      text={"Are you sure you want to delete?"}
      action={mockAction}
    />
  );

  test("Delete text is displayed", () => {
    render(RenderedDeleteItem);
    expect(
      screen.getByText("Are you sure you want to delete?")
    ).toBeInTheDocument();
  });

  test("Delete overlay calls action when delete is clicked", () => {
    render(RenderedDeleteItem);
    fireEvent.click(screen.getByText("Delete"));
    expect(mockAction).toHaveBeenCalled();
  });

  test("Delete overlay calls setShow when cancel is clicked", () => {
    render(RenderedDeleteItem);
    fireEvent.click(screen.getByText("Cancel"));
    expect(mockSetShow).toHaveBeenCalled();
  });
});

describe("Showing and hiding delete overlay", () => {
  test("Delete overlay is hidden when show is set to true", () => {
    const { container } = render(<DeleteItem show={true} />);
    let styles = window.getComputedStyle(container.firstChild);

    expect(styles.display).toBe("flex");
  });

  test("Delete overlay is hidden when show is set to false", () => {
    const { container } = render(<DeleteItem show={false} />);
    let styles = window.getComputedStyle(container.firstChild);

    expect(styles.display).toBe("none");
  });
});
