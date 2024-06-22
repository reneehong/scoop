import React from "react";
import "./ProductPage.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const location = useLocation();
  const { name, price, imageSrc } = location.state || {};
  if (!name || !price || !imageSrc) {
    return <div>Product not found</div>; // Handle case where no product is passed
  }
  return (
    <div className="product-page">
      <div className="main-product">
        <img src={imageSrc} alt={name} className="product-image" />
        <div className="product-info">
          <h1 className="product-name">{name}</h1>
          <p className="product-author">Fiona Chen</p>
          <p className="product-price">{price}</p>
          <p className="product-condition">description</p>
          <p className="product-size">Size: XS/S</p>
          <p className="product-link">
            Original link: <a href="https://tinyurl.com/rhnyn4s7">https://tinyurl.com/rhnyn4s7</a>
          </p>
          <a href="mailto:fionachen@mit.edu" className="contact-button">
            Contact fionachen@mit.edu to scoop!
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
