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
            <Link to="/privacypolicy" className="footer-link">
              privacy policy
            </Link>
            <Link to="/termsofuse" className="foster-link">
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
            <Link to="/accessibility" className="footer-link">
              <div>accessibility statement</div>
            </Link>
            <Link to="/faq" className="footer-link">
              <div>faq</div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
