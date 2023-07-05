import React from "react";

export function Gif({ gif, setGifSelected }) {
  const { title, images } = gif;
  const onClickGif = () => {
    setGifSelected(gif);
  }
  return (
    <div className="cad-gif">
      <img alt={title} src={images.preview_gif.url} onClick={onClickGif} />
    </div>
  );
}
