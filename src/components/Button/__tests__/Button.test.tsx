import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies different variants correctly", () => {
    const { rerender } = render(<Button variant="solid">Solid</Button>);
    const solidButton = screen.getByText("Solid").closest("button");
    expect(solidButton).toHaveClass("variant-solid");

    rerender(<Button variant="outlined">Outlined</Button>);
    const outlinedButton = screen.getByText("Outlined").closest("button");
    expect(outlinedButton).toHaveClass("variant-outlined");

    rerender(<Button variant="text">Text</Button>);
    const textButton = screen.getByText("Text").closest("button");
    expect(textButton).toHaveClass("variant-text");
  });

  it("applies different sizes correctly", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    const smallButton = screen.getByText("Small").closest("button");
    expect(smallButton).toHaveClass("sm");

    rerender(<Button size="md">Medium</Button>);
    const mediumButton = screen.getByText("Medium").closest("button");
    expect(mediumButton).toHaveClass("md");

    rerender(<Button size="lg">Large</Button>);
    const largeButton = screen.getByText("Large").closest("button");
    expect(largeButton).toHaveClass("lg");
  });

  it("disables button when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    const disabledButton = screen.getByText("Disabled").closest("button");
    expect(disabledButton).toBeDisabled();
  });

  it("renders with icon when provided", () => {
    render(<Button icon={<span>🔍</span>}>With Icon</Button>);
    expect(screen.getByText("🔍")).toBeInTheDocument();
  });
});
