import React from "react";

/**
 * @description Button component
 * @param {string} buttonText Text displayed on the button.
 * @param {Function} onClick Function that is called when the button is clicked.
 * @param {boolean} disabled Parameter that disables or enables the button.
 * @returns {JSX}
 */
export function Button({ buttonText, onClick, disabled }) {
  return (
    <div className="cad-button">
      <button onClick={onClick} disabled={disabled}>
        {buttonText && buttonText.length > 0 ? buttonText : "NO BUTTON TEXT"}
      </button>
    </div>
  );
}
