import React from "react";
import "./ProductPage.css";
import girlWithTop from "../../assets/girl_top.png";

const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="main-product">
        <img src={girlWithTop} alt="Urban Outfitters Go for Gold Top" className="product-image" />
        <div className="product-info">
          <h1 className="product-name">Urban Outfitters Go for Gold Top</h1>
          <p className="product-author">Fiona Chen</p>
          <p className="product-price">$12</p>
          <p className="product-condition">Condition: Lightly worn</p>
          <p className="product-size">Size: XS/S</p>
          <p className="product-link">
            Original link: <a href="https://tinyurl.com/rhnyn4s7">https://tinyurl.com/rhnyn4s7</a>
          </p>
          <a href="mailto:fionachen@mit.edu" className="contact-button">
            Contact fionachen@mit.edu to scoop!
          </a>
          <a href="#back-to-shop" className="back-link">
            ← Back to shop
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
