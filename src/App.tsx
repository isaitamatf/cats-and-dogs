import React from "react";

import { BodyComponent, HeaderComponent } from "./components";
import "./App.scss";

/**
 * @description App component
 * @returns {JSX}
 */
const App: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
};

export { App };
