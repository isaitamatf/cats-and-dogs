import React from "react";
import { render, screen } from "@testing-library/react";

import { List } from "./list";
import { GIFS_MOCKUPS } from "../../constants";

describe("List Component", () => {
  it("Component is render", () => {
    render(<List gifs={GIFS_MOCKUPS} />);
    expect(screen.getByTestId("cad-list")).toBeTruthy();
  });
});
