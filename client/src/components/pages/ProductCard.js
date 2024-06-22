import React from "react";
import "./ProductCard.css";
import DeleteButton from "./DeleteButton.js";
import { Link } from "react-router-dom";

//pear picture and other info should be replaced with product info
function ProductCard({ product, isDeletable, onDelete }) {
  const { name, price, category, imageBuffer } = product;
  const imageSrc = imageBuffer
    ? `data:image/jpeg;base64,${btoa(String.fromCharCode(...new Uint8Array(imageBuffer.data)))}`
    : "";
  return (
    console.log(name, price, category, imageSrc),
    (
      <Link to={"/productpage"} state={{ name, price, imageSrc }} className="product-card-link">
        <div className="product-card">
          <img src={imageSrc} alt={name} className="product-image" />
          <p style={{ fontWeight: 500 }}>{name}</p>
          <p style={{ color: "#828282", fontWeight: 400 }}>description</p>
          <p style={{ color: "#828282", fontWeight: 400 }}>original link:</p>
          <div className="inline-container">
            <p style={{ fontWeight: 500 }}>${price}</p>
            {isDeletable && <DeleteButton onClick={onDelete} />}
          </div>
        </div>
      </Link>
    )
  );
}

export default ProductCard;
