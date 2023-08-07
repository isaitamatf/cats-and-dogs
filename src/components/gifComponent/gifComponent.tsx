import React from "react";

export type GifComponentProps = {
  gif: any;
  setGifSelected: React.Dispatch<React.SetStateAction<{}>>;
};

/**
 * @description Gif component
 * @param {object} gif Object with all the information in the gif.
 * @param {Function} setGifSelected Function that selects and saves the gif in the status variables.
 * @returns {JSX}
 */
const GifComponent: React.FC<GifComponentProps> = ({ gif, setGifSelected }) => {
  const { title, images } = gif;
  return (
    <div className="cad-gif" data-testid="cad-gif">
      <img
        alt={title}
        src={images.preview_gif.url}
        onClick={() => setGifSelected(gif)}
      />
    </div>
  );
};

export { GifComponent };
