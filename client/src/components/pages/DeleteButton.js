import React from 'react';
import trashcanIcon from "../../assets/trash_can.png"
import "./DeleteButton.css"

function DeleteButton({ onClick }) {
  const handleClick = (event) => {
    event.stopPropagation(); // Stop the click event from propagating to the link
    onClick();
  };
  return (
    <button className="delete-button" onClick={handleClick}>
      <img src={trashcanIcon} alt="Delete" />
    </button>
  );
}

export default DeleteButton;
