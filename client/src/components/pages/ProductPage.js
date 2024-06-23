import React from "react";
import "./ProductPage.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const location = useLocation();
  const { name, price, description, link, imageSrc, userName, userEmail } = location.state || {};
  if (!name || !price || !imageSrc) {
    return <div>Product not found</div>; // Handle case where no product is passed
  }
  return (
    <div className="product-page">
      <div className="main-product">
        <img src={imageSrc} alt={name} className="product-image" />
        <div className="product-info">
          <h1 className="product-name">product: {name}</h1>
          <p className="product-author">
            seller: {userName.firstName} {userName.lastName}
          </p>
          <p className="product-price">price: {price}</p>
          <p className="product-condition">description: {description}</p>
          <p className="product-link">
            original link: <a href={link}>{link}</a>
          </p>
          <a href="mailto:fionachen@mit.edu" className="contact-button">
            Contact {userEmail} to scoop!
          </a>
          <Link to={"/shop"} className="back-link">
            ← Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
