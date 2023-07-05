import React from "react";
import { Gif } from "../../components";

/**
 * @description List component
 * @param {Array} gifs Array with all the gifs.
 * @param {Function} setGifSelected Function that selects and saves the gif in the status variables.
 * @returns {JSX}
 */
export function List({ gifs, setGifSelected }) {
  const showGifsElements = () => {
    return gifs.map((gif) => {
      return <Gif gif={gif} key={gif.id} setGifSelected={setGifSelected} />;
    });
  };
  return <div className="cad-list">{showGifsElements()}</div>;
}
