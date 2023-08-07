import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import {App} from "./App";
import { INITIAL_STATE } from "./constants";

describe("App Component", () => {
  const mockStore = configureStore();
  const store = mockStore(INITIAL_STATE);

  it("Component is render", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText("Cats & Dogs")).toBeTruthy();
  });
});
