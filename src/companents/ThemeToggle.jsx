import React from 'react';
import { useTheme } from '../hooks/useTheme';
import '../css/themeToggle.css';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={isDarkMode ? "Light Mode" : "Dark Mode"}
    >
      <div className="icon-container">
        <i className="bi bi-sun-fill sun-icon"></i>
        <i className="bi bi-moon-fill moon-icon"></i>
        <div className={`slider ${isDarkMode ? 'slide-dark' : 'slide-light'}`}></div>
      </div>
    </button>
  );
}

export default ThemeToggle; 