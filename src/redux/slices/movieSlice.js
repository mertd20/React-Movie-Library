import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "yourapikey";

export const getData = createAsyncThunk("movie/getData", async (movie = "marvel") => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${movie}&apikey=${API_KEY}`
    );

    if (!response.data.Search) {
      throw new Error("Arama sonucu bulunamadı");
    }

    return response.data.Search;
  } catch (error) {
    console.error("API Hatası:", error);
    throw error;
  }
});

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.data = [];
      });
  }
});

export default movieSlice.reducer; 
