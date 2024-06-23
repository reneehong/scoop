import React, { useState } from "react";
import "./Profile.css";
import axios from "axios";

const Profile = ({ userId }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted", { userId, currentPassword, newPassword });
    const formData = {
      _id: userId,
      currentPassword,
      newPassword,
    };
    try {
      const response = await axios.post("http://localhost:3000/api/updatepassword", formData);
      console.log(response.data.user._id);
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.error);
      }
    }
    console.log(formData);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">my profile</div>
      <form className="profile-form" onSubmit={handleSubmit}>
        <br />
        <div className="profile-input">
          <label>
            current password (to change)
            <br />
            <input
              type="password"
              value={currentPassword}
              className="input"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />{" "}
          </label>
        </div>
        <br />
        <div className="profile-input">
          <label>
            new password
            <br />
            <input
              type="password"
              value={newPassword}
              className="input"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
        </div>
        <br />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Profile;
