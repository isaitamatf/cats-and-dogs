import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { BodyComponent } from "./bodyComponent";
import { INITIAL_STATE } from "../../constants";

describe("Body Component", () => {
  const mockStore = configureStore();
  const store = mockStore(INITIAL_STATE);

  it("Component is render", () => {
    render(
      <Provider store={store}>
        <BodyComponent />
      </Provider>
    );
    expect(screen.getByTestId("cad-body")).toBeTruthy();
  });
});
