import React, { useState, useEffect } from "react";
import { Button, List, Modal } from "../../components";

import { useSelector, useDispatch } from "react-redux";
import { fetchGifs, selectAllGifs } from "../../features/gifs/gifsSlice";

export function Body() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (offset && offset > 0) {
      dispatch(fetchGifs(offset - 1));
    }
  }, [offset]);

  const [gifSelected, setGifSelected] = useState({});

  const dispatch = useDispatch();
  const gifs = useSelector(selectAllGifs);

  const showListComponent = () => {
    return gifs && gifs.length > 0 ? (
      <div className="cad-row">
        <List gifs={gifs} setGifSelected={setGifSelected} />
      </div>
    ) : (
      <></>
    );
  };

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
        <Button
          buttonText="Next"
          onClick={() => setOffset(offset + 1)}
        />
      </div>
    );
  };

  const showModalComponent = () => {
    return gifSelected && Object.keys(gifSelected).length > 0 ? (
      <Modal gif={gifSelected} setGifSelected={setGifSelected} />
    ) : (
      <></>
    );
  };

  return (
    <div className="cad-body">
      {showControlsComponent()}
      {showListComponent()}
      {showModalComponent()}
    </div>
  );
}
