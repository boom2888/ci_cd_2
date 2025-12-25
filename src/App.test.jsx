
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Counter Component", () => {
  it("renders the initial count as 0", () => {
    render(<App />);
    const countElement = screen.getByText(/count is/i);
    expect(countElement).toBeInTheDocument();
    expect(countElement).toHaveTextContent("count is 0");
  });

  it("increments count when button is clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is/i });

    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");
  });

  it("increments count multiple times", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is/i });

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(button).toHaveTextContent("count is 3");
  });

  it("button is clickable and not disabled", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is/i });

    expect(button).not.toBeDisabled();
    expect(button).toBeEnabled();
  });

  it("maintains count state correctly", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is/i });

    // Click 5 times
    for (let i = 0; i < 5; i++) {
      fireEvent.click(button);
    }

    expect(button).toHaveTextContent("count is 5");
  });

  it("renders Vite and React logos", () => {
    render(<App />);
    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute("alt", "Vite logo");
    expect(images[1]).toHaveAttribute("alt", "React logo");
  });

  it("renders the heading text", () => {
    render(<App />);
    const heading = screen.getByText(/Vite \+ React/i);

    expect(heading).toBeInTheDocument();
  });

  it("renders the instruction text", () => {
    render(<App />);
    // More flexible text matching
    const instruction = screen.getByText(/Edit.*and save to test HMR/i);

    expect(instruction).toBeInTheDocument();
  });
});
