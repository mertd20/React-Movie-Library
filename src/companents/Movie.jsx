import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/movie.css";

function Movie({ movies }) {
  const navigate = useNavigate();

  // Filmleri ve dizileri ayır
  const films = movies?.filter(item => item.Type === "movie") || [];
  const series = movies?.filter(item => item.Type === "series") || [];

  const MovieCard = ({ item }) => (
    <div
      className="container"
      onClick={() => navigate("/movie-details/" + item.imdbID)}
    >
      <img src={item.Poster} className="img-btn" alt={item.Title} />
      <div className="descrip">
        <h3 className="title">{item.Title}</h3>
        <p className="type">{item.Type}</p>
        <h5 className="year">{item.Year}</h5>
      </div>
    </div>
  );

  return (
    <div className="categories-container">
      {films.length > 0 && (
        <section className="category-section">
          <div className="category-header">
            <h2>
              <i className="bi bi-film"></i>
              Filmler
            </h2>
            <span className="count">{films.length} film</span>
          </div>
          <div className="big-container">
            {films.map((item) => (
              <MovieCard key={item.imdbID} item={item} />
            ))}
          </div>
        </section>
      )}

      {series.length > 0 && (
        <section className="category-section">
          <div className="category-header">
            <h2>
              <i className="bi bi-tv"></i>
              Diziler
            </h2>
            <span className="count">{series.length} dizi</span>
          </div>
          <div className="big-container">
            {series.map((item) => (
              <MovieCard key={item.imdbID} item={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Movie;
