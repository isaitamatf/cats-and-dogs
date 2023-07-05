import React, { useState } from "react";
import { Button, List, Modal } from "../../components";

import { useSelector, useDispatch } from "react-redux";
import { fetchGifs, selectAllGifs } from "../../features/gifs/gifsSlice";

export function Body() {
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

  const onClickButton = () => {
    dispatch(fetchGifs());
  };

  const showButtonComponent = () => {
    return !gifs || (gifs && gifs.length === 0) ? (
      <div className="cad-row">
        <Button
          buttonText="Show Latest"
          onClick={onClickButton}
        />
      </div>
    ) : (
      <></>
    );
  }

  const showModalComponent = () => {
    return gifSelected && Object.keys(gifSelected).length > 0 ? (
      <Modal gif={gifSelected} setGifSelected={setGifSelected} />
    ) : (
      <></>
    );
  }

  return (
    <div className="cad-body">
      {showButtonComponent()}
      {showListComponent()}
      {showModalComponent()}
    </div>
  );
}
