import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from "./header";

describe("Header Component", () => {
  it("Component is render", () => {
    render(<Header />);
    expect(screen.getByTestId("cad-header")).toBeTruthy();
  });
});
