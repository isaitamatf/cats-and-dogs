import React from "react";
import { render, screen } from "@testing-library/react";

import { ButtonComponent } from "./buttonComponent";

describe("Button Component", () => {
  const buttonTextTest = "Test";

  it("Component is render", () => {
    render(<ButtonComponent />);
    expect(screen.getByTestId("cad-button")).toBeTruthy();
  });

  it("Button with text", () => {
    render(<ButtonComponent buttonText={buttonTextTest} />);
    expect(screen.getByText(buttonTextTest)).toBeTruthy();
  });

  it("Button is disabled", () => {
    render(<ButtonComponent buttonText={buttonTextTest} disabled={true} />);
    expect(screen.getByText(buttonTextTest)).toBeDisabled();
  });
});
