import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [name, setName] = useState("renee hong");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted", { name, currentPassword, newPassword });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">my profile</div>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-input">
          <label>
            my name
            <br />
            <input
              type="text"
              value={name}
              className="input"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

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
