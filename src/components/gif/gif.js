import React from "react";

export function Gif({ gif }) {
  const { title, images } = gif;
  return (
    <div className="cad-gif">
      <img alt={title} src={images.original.url} />
    </div>
  );
}
