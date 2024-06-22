import React from "react";
import "./MyListings.css";
import ProductCard from "./ProductCard";
import pear_picture from "../../assets/pear_picture.png";

const tempProduct = {name:"Placeholder", price:"12", description:"This is a placeholder", imageBuffer: pear_picture};
const MyListings = () => {
  return (
    <div>
      <div className="listing-header">my listings</div>
      <div className="my-listings">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCard product={tempProduct} key={index} isDeletable={true} />
        ))}
      </div>
    </div>
  );
};

export default MyListings;
