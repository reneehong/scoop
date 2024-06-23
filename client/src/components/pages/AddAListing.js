import React, { useState } from "react";
import axios from "axios";
import "./AddAListing.css";

const AddAListing = ({ userId }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    link: "",
    category: "clothes",
  });
  const [imageFile, setImageFile] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("link", formData.link);
    data.append("category", formData.category);
    data.append("imageFile", imageFile);

    try {
      const response = await axios.post("http://localhost:3000/api/products/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Product created successfully");
      setShowSuccess(true);
    } catch (error) {
      alert("Error creating product");
      console.error("There was an error creating the product!", error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">add a listing!</div>
      <br />
      <form className="profile-form" onSubmit={handleSubmit}>
        <label className="profile-input">
          product name
          <br />
          <input
            className="input"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            id="name"
            placeholder="urban outfitters go for gold top"
            required
          />
          <br />
          <br />
        </label>
        <label className="profile-input">
          price
          <br />
          <input
            className="input"
            type="text"
            value={formData.price}
            onChange={handleChange}
            id="price"
            name="price"
            placeholder="$12"
            required
          />
          <br />
          <br />
        </label>
        <label className="profile-input">
          what do you want to tell your buyers?
          <br />
          <textarea
            className="input"
            name="description"
            placeholder="ex. material, quality, use/wear"
            onChange={handleChange}
            value={formData.description}
          ></textarea>
          <br />
          <br />
        </label>
        <label className="profile-input">
          original website link
          <br />
          <input
            className="input"
            type="text"
            name="link"
            onChange={handleChange}
            value={formData.link}
            placeholder="urbanoutfitters.com"
          />
          <br />
          <br />
        </label>
        {/* <label className="profile-input">
          how to contact you
          <br />
          <input
            className="input"
            type="text"
            
            name="contactInfo"
            placeholder="email, phone number"
          />
          <br />
          <br />
        </label> */}
        <label className="profile-input">
          product category
          <br />
          <select
            className="input"
            onChange={handleChange}
            value={formData.category}
            name="category"
            required
          >
            <option value="clothes">clothes</option>
            <option value="dorm stuff">dorm stuff</option>
            <option value="school supplies">school supplies</option>
            <option value="personal care">personal care</option>
            <option value="food">food</option>
            <option value="other">other</option>
          </select>
          <br />
        </label>
        <label className="profile-input">
          insert photo here
          <br />
          <input
            className="input"
            type="file"
            onChange={handleFileChange}
            id="photo"
            name="imageFile"
            required
          />
          <br />
          <br />
        </label>
        <br />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      {showSuccess && <p className="success-message"> thanks for adding to the waffle shop!</p>}
    </div>
  );
};

export default AddAListing;
