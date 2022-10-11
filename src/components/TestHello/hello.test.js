import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Hello from "./hello";

describe("Render hello component", () => {
  it("renders with or without a name", () => {
    render(<Hello />);

    expect(screen.getByText("Hey, stranger")).toBeInTheDocument();
  });

  it("renders with Julia name", () => {
    render(<Hello name="Julia" />);

    expect(screen.getByText("Hello, Julia!")).toBeInTheDocument();
  });

  it("renders with Mock name", () => {
    render(<Hello name="Mock" />);

    expect(screen.getByText(/hello, mock!/i)).toBeInTheDocument();
  });
});
