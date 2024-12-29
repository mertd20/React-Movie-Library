import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/slices/movieSlice";
import Movie from "./Movie";
import "../css/movie.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Movies() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.movie);

  // Component mount olduğunda ilk veriyi çek
  useEffect(() => {
    dispatch(getData("marvel"));
  }, [dispatch]);

  if (error) {
    return <div className="error-message">Hata: {error}</div>;
  }

  return (
    <div>
      <div className="categories-container">
        {data && data.length > 0 && <Movie movies={data} />}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  );
}

export default Movies;
