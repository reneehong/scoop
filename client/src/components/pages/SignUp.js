import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import GirlEatingIceCream from "../../assets/girl_eating_icecream.png";
import axios from "axios";

const SignUp = ({ setUserId }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    college: "Waffle University",
  });
  const { signup } = useAuth();

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
      const response = await axios.post("http://localhost:3000/api/auth/signup", formData);
      setUserId(response.data.user._id);
      console.log(response.data.user._id);
      signup();
      navigate("/shop");
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.error);
      } else {
        alert("An unknown error occurred.");
      }
    }
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h1 className="signup-title">sign up</h1>
        <p className="signup-subtitle">
          have an account?{" "}
          <a href="/signin" className="signin-link">
            sign in here
          </a>
        </p>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Renee"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Hong"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="renee12@mit.edu"
              required
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
              placeholder="1234567"
              required
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
      </div>
      <div className="signup-image-container">
        <img src={GirlEatingIceCream} alt="Child eating ice cream" className="signup-image" />
      </div>
    </div>
  );
};

export default SignUp;
