import React from "react";
import { render, screen } from "@testing-library/react";

import { GifComponent } from "./gifComponent";
import { GIFS_MOCKUPS } from "../../constants";

describe("Gif Component", () => {
  it("Component is render", () => {
    render(<GifComponent gif={GIFS_MOCKUPS[0]} setGifSelected={() => {}} />);
    expect(screen.getByTestId("cad-gif")).toBeTruthy();
  });
});
