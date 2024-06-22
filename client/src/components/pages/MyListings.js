import React from "react";
import "./MyListings.css";
import ProductCard from "./ProductCard";

const MyListings = () => {
  return (
    <div>
      <div className="listing-header">my listings</div>
      <div className="my-listings">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCard key={index} isDeletable={true} />
        ))}
      </div>
    </div>
  );
};

export default MyListings;
