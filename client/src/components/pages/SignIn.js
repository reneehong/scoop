import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext.js";
import "./SignIn.css";
import GirlEatingIceCream from "../../assets/girl_eating_icecream.png"; // Ensure this path is correct
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    college: "Waffle University",
  });
  const { signin } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/signin", formData);
      signin();
      navigate("/shop");
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.error);
      } else {
        alert("An unknown error occurred.");
      }
    }
    console.log(formData);
  };

  return (
    <div className="signin-container">
      <div className="signin-form-container">
        <h1 className="signin-title">sign in</h1>
        <p className="signin-subtitle">
          don’t have an account?{" "}
          <a href="/signup" className="signup-link">
            sign up here
          </a>
        </p>
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="renee12@mit.edu"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="************"
            />
          </div>
          <div className="form-group">
            <label htmlFor="college">College</label>
            <select id="college" name="college" value={formData.college} onChange={handleChange}>
              <option value="Waffle University">Waffle University</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="signin-image-container">
        <img src={GirlEatingIceCream} alt="Child eating ice cream" className="signin-image" />
      </div>
    </div>
  );
};

export default SignIn;
