import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BackStep } from "./BackStep";

it("should render content", () => {
  render(<BackStep content="Go home" />);

  const backButton = screen.getByTestId("back-button");

  expect(backButton).toBeInTheDocument();
  expect(backButton).toHaveClass("mb-5");
  expect(screen.getByText("Go home")).toBeInTheDocument();
});
