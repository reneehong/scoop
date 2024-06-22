import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-container">
          <Link to="/" className="footer-logo">
            <div>scoop</div>
          </Link>
        </div>
        <div className="footer-link-containers">
          <div className="footer-link-container-1">
            <Link to="/" className="footer-link">
              <div>about scoop</div>
            </Link>
            <Link to="/terms-of-use" className="footer-link">
              <div>terms of use</div>
            </Link>
            <Link to="/privacy-policy" className="footer-link">
              <div>privacy policy</div>
            </Link>
          </div>
          <div className="footer-link-container-2">
            <Link to="/contact-us" className="footer-link">
              <div>contact us</div>
            </Link>
            <Link to="/accessibility-statement" className="footer-link">
              <div>accessibility statement</div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
