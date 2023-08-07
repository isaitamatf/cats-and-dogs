import React from "react";
import { render, screen } from "@testing-library/react";

import { ListComponent } from "./listComponent";
import { GIFS_MOCKUPS } from "../../constants";

describe("List Component", () => {
  it("Component is render", () => {
    render(<ListComponent gifs={GIFS_MOCKUPS} setGifSelected={() => {}} />);
    expect(screen.getByTestId("cad-list")).toBeTruthy();
  });
});
