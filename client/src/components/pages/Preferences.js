import React from "react";
import { useTheme } from "../../ThemeContext.js"; // Update the import path
import "./Preferences.css";

const Preferences = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="profile-container">
      <div className="profile-header">Preferences</div>
      <button className="button" onClick={toggleDarkMode}>
        Toggle to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default Preferences;
