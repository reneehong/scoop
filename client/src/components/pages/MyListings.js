import React, {useState} from "react";
import "./MyListings.css";
import ProductCard from "./ProductCard";
import pear_picture from "../../assets/pear_picture.png";

const tempProduct = {name:"Placeholder", price:"12", description:"This is a placeholder", imageBuffer: null, image: pear_picture};
const MyListings = () => {
  const [isComponentVisible, setIsComponentVisible] = useState(true);
  const handleDelete = () => {
    setIsComponentVisible(false);
  };
  return (
    <div className="profile-container"> 
      <div className="profile-header">
          my listings
      </div>
      <div className="my-listings">
        {Array.from({ length: 1 }).map((_, index) => (
          isComponentVisible && <ProductCard product={tempProduct} key={index} isDeletable={true} onDelete={handleDelete}/>
        ))}
      </div>
    </div>
  );
};

export default MyListings;
