import React from "react";
import { render, screen } from "@testing-library/react";

import { Modal } from "./modal";
import { GIFS_MOCKUPS } from "../../constants";

describe("Modal Component", () => {
  it("Component is render", () => {
    render(<Modal gif={GIFS_MOCKUPS[0]} />);
    expect(screen.getByTestId("cad-modal")).toBeTruthy();
  });
});
