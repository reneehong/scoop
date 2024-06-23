import React, { useEffect, useState } from "react";
import { useTheme } from "../../ThemeContext.js"; // Update the import path
import "./Preferences.css";
import axios from "axios";

const Preferences = ({ userId }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserMode = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/mode/${userId}`);
        const userMode = response.data.mode;
        console.log("Fetched user mode:", userMode); // Debug log

        // Only toggle the mode if it is different from the current context mode
        if (userMode !== darkMode) {
          toggleDarkMode(); // This will toggle the mode to match the user's mode
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user mode:", error);
        setLoading(false);
      }
    };

    fetchUserMode();
  }, [userId, darkMode, toggleDarkMode]);

  const handleToggleDarkMode = async () => {
    const newMode = !darkMode;
    try {
      console.log("Toggling mode to:", newMode); // Debug log
      await axios.post("http://localhost:3000/api/mode", { _id: userId, mode: newMode });
      toggleDarkMode(); // This will toggle the mode in the context
    } catch (error) {
      console.error("Error updating user mode:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">Preferences</div>
      <button className="button" onClick={handleToggleDarkMode}>
        Toggle to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default Preferences;
