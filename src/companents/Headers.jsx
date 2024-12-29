import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData } from "../redux/slices/movieSlice";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import ThemeToggle from "./ThemeToggle";
import "../css/header.css";

function Headers() {
  const [searchTerm, setSearchTerm] = useState("marvel");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // İlk yüklemede ve searchTerm değiştiğinde verileri çek
  useEffect(() => {
    if (searchTerm) {
      dispatch(getData(searchTerm));
    }
  }, [searchTerm, dispatch]);

  const handleSearch = (event, newValue) => {
    if (newValue) {
      setSearchTerm(newValue);
      navigate("/");
    }
  };

  const searchOptions = [
    "marvel",
    "batman",
    "spider man",
    "superman",
    "star wars",
    "lord of the rings",
    "harry potter",
    "matrix"
  ];

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo-section" onClick={() => {
          setSearchTerm("marvel");
          navigate("/");
        }}>
          <i className="bi bi-film"></i>
          <h1>Film Kütüphanesi</h1>
        </div>

        <div className="header-actions">
          <div className="search-section">
            <Autocomplete
              value={searchTerm}
              onChange={handleSearch}
              options={searchOptions}
              sx={{
                width: "280px",
                "& .MuiInputBase-root": {
                  color: "var(--bs-text)",
                  backgroundColor: "var(--bs-surface)",
                  height: "45px",
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Film veya Dizi Ara..."
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <i className="bi bi-search search-icon"></i>
                    ),
                  }}
                />
              )}
            />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Headers;
