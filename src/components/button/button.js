import React from "react";

export function Button({ buttonText, onClick }) {
  return (
    <div className="cad-button">
      <button onClick={onClick}>
        {buttonText && buttonText.length > 0 ? buttonText : "NO BUTTON TEXT"}
      </button>
    </div>
  );
}
