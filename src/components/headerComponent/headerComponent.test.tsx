import React from "react";
import { render, screen } from "@testing-library/react";

import { HeaderComponent } from "./headerComponent";

describe("Header Component", () => {
  it("Component is render", () => {
    render(<HeaderComponent />);
    expect(screen.getByTestId("cad-header")).toBeTruthy();
  });
});
