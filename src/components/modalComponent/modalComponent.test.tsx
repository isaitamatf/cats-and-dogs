import React from "react";
import { render, screen } from "@testing-library/react";

import { ModalComponent } from "./modalComponent";
import { GIFS_MOCKUPS } from "../../constants";

describe("Modal Component", () => {
  it("Component is render", () => {
    render(<ModalComponent gif={GIFS_MOCKUPS[0]} setGifSelected={() => {}} />);
    expect(screen.getByTestId("cad-modal")).toBeTruthy();
  });
});
