import React from "react";
import ReactLogo from "../../assets/logo.png";

/**
 * @description Header component
 * @returns {JSX}
 */
const HeaderComponent: React.FC = () => {
  return (
    <nav className="cad-header" data-testid="cad-header">
      <div className="cad-header-img">
        <img alt="React Logo" src={ReactLogo} />
      </div>
      <div className="cad-header-span">
        <span>Cats & Dogs</span>
      </div>
    </nav>
  );
}

export { HeaderComponent };
