import React, { useState } from "react";
import { post } from "../../utilities";
import { useAuth } from "../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import GirlEatingIceCream from "../../assets/girl_eating_icecream.png";
import axios from "axios";

const SignUp = ({ setUserId, fetchUserMode }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    college: "waffU",
  });
  const { signup } = useAuth();
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
    // Validate form inputs
    const { firstName, lastName, email, password } = formData;
    if (!firstName || !lastName || !email || !password) {
      setError("all fields are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/auth/signup", formData);
      setUserId(response.data.user._id);
      fetchUserMode(response.data.user._id);
      console.log(response.data.user._id);
      signup();
      navigate("/shop");
    } catch (error) {
      if (error.response && error.response.data) {
        setError("invalid email or password");
      } else {
        setError("an unknown error occurred.");
      }
    }
    console.log(formData);
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
            <label htmlFor="firstName">first name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="wafa"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="lee"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="wafflelover24@gmail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="**********"
            />
          </div>
          <div className="form-group">
            <label htmlFor="college">college</label>
            <select id="college" name="college" value={formData.college} onChange={handleChange}>
              <option value="waffU">waffU</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            submit
          </button>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
      <div className="signup-image-container">
        <img src={GirlEatingIceCream} alt="Child eating ice cream" className="signup-image" />
      </div>
    </div>
  );
};

export default SignUp;
