import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../context/AuthContext.js";
const Navbar = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <div>scoop</div>
      </Link>
      <Link to={isAuthenticated ? "/profile" : "/signup"}>
        <button className="navbar-button">{isAuthenticated ? "Profile" : "Join Now"}</button>
      </Link>
    </div>
  );
};

export default Navbar;
