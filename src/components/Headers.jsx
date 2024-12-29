import React from "react";
import ThemeToggle from "./ThemeToggle";
// ... diğer importlar

function Headers() {
  // ... mevcut kod

  return (
    <div className="headers navbar">
      <div className="logo">
        <p onClick={() => {
          navigate("/");
          if (!count) {
            setcount("scooby");
          }
        }}>
          MOVİee
        </p>
      </div>
      <div className="d-flex align-items-center gap-3">
        <ThemeToggle />
        <div className="input">
          <Autocomplete
            onChange={serachMovie}
            sx={{
              width: "250px",
              "& .MuiInputBase-root": {
                color: "var(--bs-text)",
                backgroundColor: "var(--bs-surface)",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--bs-border)",
              },
            }}
            options={top100Films}
            renderInput={(params) => <TextField {...params} label="Film ara" />}
          />
        </div>
      </div>
    </div>
  );
}

export default Headers; 