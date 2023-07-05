import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { GIPHY_API_KEY, GIPHY_API_URL } from "../../constants";

/**
 * @description Function that makes the API call
 * @param {number} offset Selected page in the application
 * @returns {Array}
 */
export const fetchGifs = createAsyncThunk("gifs/fetchGifs", async (offset) => {
  const response = await axios.get(GIPHY_API_URL, {
    params: {
      api_key: GIPHY_API_KEY,
      limit: 25,
      offset: offset * 25,
      q: "cats & dogs",
    },
  });
  return response.data.data;
});

export const gifsSlice = createSlice({
  name: "gifs",
  initialState: {
    gifs: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGifs.pending, (state, action) => {
        // LOADING
      })
      .addCase(fetchGifs.fulfilled, (state, action) => {
        state.gifs = action.payload;
      })
      .addCase(fetchGifs.rejected, (state, action) => {
        // FAILED
      });
  },
});

export const selectAllGifs = (reducer) => reducer.gifsReducer.gifs;

export default gifsSlice.reducer;
