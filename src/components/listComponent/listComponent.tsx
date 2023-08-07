import React from "react";
import { GifComponent } from "..";

export type ListComponentProps = {
  gifs: any[];
  setGifSelected: React.Dispatch<React.SetStateAction<{}>>;
};

/**
 * @description List component
 * @param {Array} gifs Array with all the gifs.
 * @param {Function} setGifSelected Function that selects and saves the gif in the status variables.
 * @returns {JSX}
 */
const ListComponent: React.FC<ListComponentProps> = ({ gifs, setGifSelected }) => {
  const showGifsElements = () => {
    return gifs.map((gif) => {
      return (
        <GifComponent gif={gif} key={gif.id} setGifSelected={setGifSelected} />
      );
    });
  };
  return (
    <div className="cad-list" data-testid="cad-list">
      {showGifsElements()}
    </div>
  );
}

export { ListComponent };
