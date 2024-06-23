import React, { useState } from "react";
import "./ProductCard.css";
import DeleteButton from "./DeleteButton.js";
import { Link } from "react-router-dom";

//pear picture and other info should be replaced with product info
function ProductCard({ product, isDeletable, onDelete }) {
  const { name, price, description, link, category, imageBuffer, image } = product;
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteClicked(true);
    onDelete();
  };
  const imageSrc =
    imageBuffer != null
      ? imageBuffer
        ? `data:image/jpeg;base64,${btoa(String.fromCharCode(...new Uint8Array(imageBuffer.data)))}`
        : ""
      : image;
  return (
    console.log(name, price, category, imageSrc),
    isDeletable ? (
      <div className="product-card">
        <img src={imageSrc} alt={name} className="product-image" />
        <p style={{ fontWeight: 500 }}>product: {name}</p>
        <p style={{ color: "#828282", fontWeight: 400 }}>description: {description}</p>
        <p style={{ color: "#828282", fontWeight: 400 }}>original link: {link}</p>
        <div className="inline-container">
          <p style={{ fontWeight: 500 }}>price: ${price}</p>
          {isDeletable && <DeleteButton className="delete-button" onClick={handleDeleteClick} />}
        </div>
      </div>
    ) : (
      <Link
        to={"/productpage"}
        state={{ name, price, description, link, imageSrc }}
        className="product-card-link"
      >
        <div className="product-card">
          <img src={imageSrc} alt={name} className="product-image" />
          <p className="product-attributes" style={{ fontWeight: 500 }}>
            product: {name}
          </p>
          <p className="product-attributes" style={{ color: "#828282", fontWeight: 400 }}>
            description: {description}
          </p>
          <p className="product-attributes" style={{ color: "#828282", fontWeight: 400 }}>
            original link: {link}
          </p>
          <div className="inline-container">
            <p style={{ fontWeight: 500 }}>price: ${price}</p>
            {isDeletable && <DeleteButton className="delete-button" onClick={onDelete} />}
          </div>
        </div>
      </Link>
    )
  );
}

export default ProductCard;
