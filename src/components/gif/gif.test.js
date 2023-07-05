import React from "react";
import { render, screen } from "@testing-library/react";

import { Gif } from "./gif";
import { GIFS_MOCKUPS } from "../../constants";

describe("Gif Component", () => {
  it("Component is render", () => {
    render(<Gif gif={GIFS_MOCKUPS[0]} />);
    expect(screen.getByTestId("cad-gif")).toBeTruthy();
  });
});
