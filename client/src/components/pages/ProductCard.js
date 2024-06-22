import React from "react";
import "./ProductCard.css";
import pear_picture from "../../assets/pear_picture.png"
import DeleteButton from "./DeleteButton";

//pear picture and other info should be replaced with product info
function ProductCard ({isDeletable, onDelete}){
  return (
    <div className="product-card">
      <img src={pear_picture} alt="product" className="product-image" />
      <p style={{fontWeight: 500}}>urban outfitters go for gold top</p>
      <p style={{ color:  "#828282", fontWeight: 400}}>lightly worn, size XS/S</p>
      <p style={{ color: "#828282", fontWeight: 400}}>original link:</p>
      <div className="inline-container">
        <p style={{fontWeight: 500}}>$12</p>
        {isDeletable && <DeleteButton onClick={onDelete} />}
      </div>
    </div>
  );
};

export default ProductCard;
