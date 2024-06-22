import React from "react";
import { useTheme } from "../../ThemeContext.js"; // Update the import path
import "./Preferences.css";

const Preferences = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="preferences-container">
      <h1 className="profile-header">Preferences</h1>
      <button onClick={toggleDarkMode}>
        Toggle to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default Preferences;
