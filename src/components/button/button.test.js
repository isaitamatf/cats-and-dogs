import React from "react";
import { render, screen } from "@testing-library/react";

import { Button } from "./button";

describe("Button Component", () => {
  const buttonTextTest = "Test";

  it("Component is render", () => {
    render(<Button />);
    expect(screen.getByTestId("cad-button")).toBeTruthy();
  });

  it("Button with text", () => {
    render(<Button buttonText={buttonTextTest} />);
    expect(screen.getByText(buttonTextTest)).toBeTruthy();
  });

  it("Button is disabled", () => {
    render(<Button buttonText={buttonTextTest} disabled={true} />);
    expect(screen.getByText(buttonTextTest)).toBeDisabled();
  });
});
