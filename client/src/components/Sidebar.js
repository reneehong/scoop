import React from "react";
import { useAuth } from "../context/AuthContext.js";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const { signout } = useAuth();
  const handleSignOut = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/signout");
      signout();
      navigate("/"); // Redirect to the sign-in page after logging out
    } catch (error) {
      console.error("Sign out error:", error);
      if (error.response && error.response.data) {
        alert(error.response.data.error);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="sidebar">
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}
      >
        profile
      </NavLink>
      <NavLink
        to="/addalisting"
        className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}
      >
        add a listing
      </NavLink>
      <NavLink
        to="/mylistings"
        className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}
      >
        my listings
      </NavLink>
      <NavLink
        to="/preferences"
        className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}
      >
        preferences
      </NavLink>
      <NavLink to="/" className="sidebar-link" onClick={handleSignOut}>
        sign out
      </NavLink>
    </div>
  );
};

export default Sidebar;
