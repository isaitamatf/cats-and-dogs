import React from "react";
import { Button, List } from "../../components";

import { useSelector, useDispatch } from "react-redux";
import { fetchGifs, selectAllGifs } from "../../features/gifs/gifsSlice";

export function Body() {
  const dispatch = useDispatch();
  const gifs = useSelector(selectAllGifs);

  const showListComponent = () => {
    return gifs && gifs.length > 0 ? (
      <div className="cad-row">
        <List gifs={gifs} />
      </div>
    ) : (
      <></>
    );
  };

  const onClickButton = () => {
    dispatch(fetchGifs());
  };

  return (
    <div className="cad-body">
      <div className="cad-row">
        <Button buttonText="Show Latest" onClick={onClickButton} />
      </div>
      {showListComponent()}
    </div>
  );
}
