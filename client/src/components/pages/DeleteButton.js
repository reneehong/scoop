import React from 'react';
import trashcanIcon from "../../assets/trash_can.png"
import "./DeleteButton.css"

function DeleteButton({ onClick }) {
  return (
    <button className="delete-button" onClick={onClick}>
      <img src={trashcanIcon} alt="Delete" />
    </button>
  );
}

export default DeleteButton;
