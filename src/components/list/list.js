import React from "react";
import { Gif } from "../../components";

export function List({ gifs, setGifSelected }) {
  const showGifsElements = () => {
    return gifs.map((gif) => {
      return <Gif gif={gif} key={gif.id} setGifSelected={setGifSelected} />;
    });
  };

  return <div className="cad-list">{showGifsElements()}</div>;
}
