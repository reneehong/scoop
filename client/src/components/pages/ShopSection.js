import React from "react";
import "./ShopSection.css";
import ProductCard from "./ProductCard";
import waffleImage from "../../assets/wafflebackground.png";
import Shop from "./Shop.css";

const ShopSection = () => {
  return (
    <div className="shop-section">
      <div className="type-name">
        <h1>clothes</h1>
      </div>
      <div className="products-container">
        {Array.from({ length: 2 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
      
      <div className="type-name">
        <h1>dorm stuff</h1>
      </div>
      <div className="products-container">
        {Array.from({ length: 2 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
