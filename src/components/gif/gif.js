import React from "react";

/**
 * @description Gif component
 * @param {object} gif Object with all the information in the gif.
 * @param {Function} setGifSelected Function that selects and saves the gif in the status variables.
 * @returns {JSX}
 */
export function Gif({ gif, setGifSelected }) {
  const { title, images } = gif;
  return (
    <div className="cad-gif">
      <img
        alt={title}
        src={images.preview_gif.url}
        onClick={() => setGifSelected(gif)}
      />
    </div>
  );
}
