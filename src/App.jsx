import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Headers from "./companents/Headers";
import Movies from "./companents/Movies";
import MovieDetails from "./companents/movieDetails";
import About from "./companents/About";
import Footers from "./companents/Footers";
import Contact from "./companents/Contact";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Headers />
          <main>
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/movie-details/:imdbID" element={<MovieDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footers />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
