import React, { useEffect, useState } from "react";
import { useTheme } from "../../ThemeContext.js";
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
        console.log("Fetched user mode:", userMode);

        if (userMode !== darkMode) {
          toggleDarkMode();
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
      console.log("Toggling mode to:", newMode);
      await axios.post("http://localhost:3000/api/mode", { _id: userId, mode: newMode });
      toggleDarkMode();
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
