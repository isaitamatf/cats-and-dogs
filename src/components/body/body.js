import React from "react";
import { Button } from "../../components";

import { useSelector, useDispatch } from "react-redux";
import { fetchGifs, selectAllGifs } from "../../features/gifs/gifsSlice";

export function Body() {
  const dispatch = useDispatch();
  const gifs = useSelector(selectAllGifs);

  const onClick = () => {
    dispatch(fetchGifs());
  };

  return (
    <div className="cad-body">
      <div className="cad-row">
        <Button buttonText="Show Latest" onClick={onClick} />
      </div>
    </div>
  );
}
