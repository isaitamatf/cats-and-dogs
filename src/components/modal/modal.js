import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function Modal({ gif, setGifSelected }) {
  const { title, images } = gif;
  const onClickCloseButton = () => {
    setGifSelected({})
  }
  return (
    <div className="cad-modal">
      <FontAwesomeIcon
        icon={faXmark}
        color="#EBECF0"
        className="cad-modal-icon"
        onClick={onClickCloseButton}
      />
      <img alt={title} src={images.original.url} />
    </div>
  );
}
