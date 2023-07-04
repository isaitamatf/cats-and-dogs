import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const GIPHY_API_URL = "https://api.giphy.com/v1/gifs/search";
const GIPHY_API_KEY = "1LZP1SdOC2XzWSL3m2JOAlWYof4X58D2";

export const fetchGifs = createAsyncThunk("gifs/fetchGifs", async () => {
  const response = await axios.get(GIPHY_API_URL, {
    params: {
      api_key: GIPHY_API_KEY,
      limit: 25,
      offset: 0,
      q: "cats and dogs",
    },
  });
  return response.data.data;
});

export const gifsSlice = createSlice({
  name: "gifs",
  initialState: {
    gifs: []
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGifs.pending, (state, action) => {
        // LOADING
      })
      .addCase(fetchGifs.fulfilled, (state, action) => {
        state.gifs = state.gifs.concat(action.payload)
      })
      .addCase(fetchGifs.rejected, (state, action) => {
        // FAILED
      })
  }
});

export const selectAllGifs = (reducer) => reducer.gifsReducer.gifs;

export default gifsSlice.reducer
