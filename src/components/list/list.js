import React from "react";
import { Gif } from "../../components";

export function List({gifs}) {
  const showGifsElements = () => {
    return gifs.map((gif) => {
      return <Gif gif={gif} key={gif.id} />;
    });
  }

  return <div className="cad-list">{showGifsElements()}</div>;
}
