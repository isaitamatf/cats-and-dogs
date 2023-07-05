import React from "react";

export function Button({ buttonText, onClick, disabled }) {
  return (
    <div className="cad-button">
      <button onClick={onClick} disabled={disabled}>
        {buttonText && buttonText.length > 0 ? buttonText : "NO BUTTON TEXT"}
      </button>
    </div>
  );
}
