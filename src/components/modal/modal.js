import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

/**
 * @description Modal component
 * @param {object} gif Object with all the information in the gif.
 * @param {Function} setGifSelected Function that selects and saves the gif in the status variables.
 * @returns {JSX}
 */
export function Modal({ gif, setGifSelected }) {
  const { title, images } = gif;
  return (
    <div className="cad-modal">
      <FontAwesomeIcon
        icon={faXmark}
        color="#EBECF0"
        className="cad-modal-icon"
        onClick={() => setGifSelected({})}
      />
      <img alt={title} src={images.original.url} />
    </div>
  );
}
