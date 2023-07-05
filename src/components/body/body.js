import React, { useState, useEffect } from "react";
import { Button, List, Modal } from "../../components";

import { useSelector, useDispatch } from "react-redux";
import { fetchGifs, selectAllGifs } from "../../features/gifs/gifsSlice";

/**
 * @description Body component
 * @returns {JSX}
 */
export function Body() {
  const dispatch = useDispatch();
  // Status variable that controls the selected page in the application
  const [offset, setOffset] = useState(0);
  // When the state variable changes value, an API call is made to refresh the data.
  useEffect(() => {
    if (offset && offset > 0) {
      dispatch(fetchGifs(offset - 1));
    }
  }, [offset]);
  // Status variable that selects a gif to display in the modal.
  const [gifSelected, setGifSelected] = useState({});
  // State variable where we store the gifs.
  const gifs = useSelector(selectAllGifs);
  /**
   * @description If we have gifs we show the list component
   * @returns {JSX}
   */
  const showListComponent = () => {
    return gifs && gifs.length > 0 ? (
      <div className="cad-row">
        <List gifs={gifs} setGifSelected={setGifSelected} />
      </div>
    ) : (
      <></>
    );
  };
  /**
   * @description If we don't have gifs we show the start button, if we have gifs we show the controls to change the pagination of the list.
   * @returns {JSX}
   */
  const showControlsComponent = () => {
    return !gifs || (gifs && gifs.length === 0) ? (
      <div className="cad-row">
        <Button
          buttonText="Show Latest"
          onClick={() => setOffset(offset + 1)}
        />
      </div>
    ) : (
      <div className="cad-row">
        <Button
          buttonText="Prev"
          onClick={() => setOffset(offset - 1)}
          disabled={!offset || (offset && offset <= 1) ? true : false}
        />
        <div className="cad-pagination">
          <span>{offset}</span>
        </div>
        <Button buttonText="Next" onClick={() => setOffset(offset + 1)} />
      </div>
    );
  };
  /**
   * @description If we have a gif selected, we show the gif inside the modal.
   * @returns {JSX}
   */
  const showModalComponent = () => {
    return gifSelected && Object.keys(gifSelected).length > 0 ? (
      <Modal gif={gifSelected} setGifSelected={setGifSelected} />
    ) : (
      <></>
    );
  };

  return (
    <div className="cad-body" data-testid="cad-body">
      {showControlsComponent()}
      {showListComponent()}
      {showModalComponent()}
    </div>
  );
}
