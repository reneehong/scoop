import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import axios from "axios";
import DeleteButton from "./DeleteButton.js";
import { Link } from "react-router-dom";

//pear picture and other info should be replaced with product info
function ProductCard({ product, isDeletable, onDelete }) {
  const { _id, name, price, description, link, category, imageBuffer, userId } = product;
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [userName, setUserName] = useState({ firstName: "", lastName: "" });
  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/user/${userId}`);
        console.log("firstname", response.data.firstName);
        setUserName({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
        });
        setUserEmail(response.data.email);
      } catch (error) {
        console.error("Error fetching user name:", error);
      }
    };

    fetchUserName();
  }, [userId]);

  const handleDeleteClick = () => {
    setIsDeleteClicked(true);
    onDelete(_id);
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
        state={{ name, price, description, link, imageSrc, userName, userEmail }}
        className="product-card-link"
      >
        <div className="product-card">
          <img src={imageSrc} alt={name} className="product-image" />
          <p className="product-attributes" style={{ fontWeight: 500 }}>
            product: {name}
          </p>
          <p style={{ color: "#828282", fontWeight: 400 }}>
            seller: {userName.firstName} {userName.lastName}
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
