import React from "react";
import "./ShopSection.css";
import ProductCard from "./ProductCard.js";

const ShopSection = ({ products }) => {
  // const clothes = products.filter(product => product.category === "clothes");
  const categories = ["clothes", "dorm stuff", "school supplies", "personal care", "food", "other"];

  const renderCategorySection = (category) => {
    const filteredProducts = products.filter((product) => product.category === category);
    return (
      <div key={category}>
        <div className="type-name">
          <h1>{category}</h1>
        </div>
        <div className="products-container">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} isDeletable={false} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="shop-section">
      {categories.map((category) => renderCategorySection(category))}

      {/* <div className="type-name">
        <h1>dorm stuff</h1>
      </div>
      <div className="products-container">
        {Array.from({ length: 2 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div> */}
    </div>
  );
};

export default ShopSection;
