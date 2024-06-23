import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ handleContactUsClick, handleAboutClick }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-container">
          <Link to="/" className="footer-logo">
            scoop
          </Link>
        </div>
        <div className="footer-link-containers">
          <div className="footer-link-container-1">
            <Link
              to="#"
              className="footer-link"
              onClick={(e) => {
                e.preventDefault();
                handleAboutClick();
              }}
            >
              about scoop
            </Link>
            <Link to="/privacy-policy" className="footer-link">
              privacy policy
            </Link>
            <Link to="/terms-of-use" className="footer-link">
              terms of use
            </Link>
          </div>
          <div className="footer-link-container-2">
            <Link
              to="#"
              className="footer-link"
              onClick={(e) => {
                e.preventDefault();
                handleContactUsClick();
              }}
            >
              contact us
            </Link>
            <Link to="/accessibility-statement" className="footer-link">
              accessibility statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
