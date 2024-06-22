import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../context/AuthContext.js";
const Navbar = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo">
          <div>scoop</div>
        </Link>
      </div>
      <div className="navbar-buttons">
        {isAuthenticated && (
          <Link to="/shop" className="navbar-shop">
            <div className="navbar-shop">shop</div>
          </Link>
        )}
        <Link to={isAuthenticated ? "/profile" : "/signup"}>
          <button className="navbar-button">{isAuthenticated ? "Profile" : "Join Now"}</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
