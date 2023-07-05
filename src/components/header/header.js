import React from "react";
import ReactLogo from "../../assets/images/react-logo.png";

/**
 * @description Header component
 * @returns {JSX}
 */
export function Header() {
  return (
    <nav className="cad-header">
      <div className="cad-header-img">
        <img alt="React Logo" src={ReactLogo} />
      </div>
      <div className="cad-header-span">
        <span>Cats & Dogs</span>
      </div>
    </nav>
  );
}
