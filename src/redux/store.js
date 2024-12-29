import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";
import moviedetailsSlice from "./slices/moviedetailsSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    details: moviedetailsSlice,
  },
}); 