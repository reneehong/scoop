import React, { useState, useEffect } from "react";
import "./MyListings.css";
import axios from "axios";
import ProductCard from "./ProductCard";

const MyListings = ({ userId }) => {
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    const fetchMyProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products/all");
        const allProducts = response.data;
        const filteredProducts = allProducts.filter((product) => product.userId === userId);
        setMyProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchMyProducts();
  }, [userId]);
  return (
    <div className="profile-container">
      <div className="profile-header">my listings</div>
      <div className="my-listings">
        {myProducts.length > 0 ? (
          myProducts.map((product) => (
            <ProductCard key={product._id} product={product} isDeletable={true} />
          ))
        ) : (
          <p>You have no listings.</p>
        )}
      </div>
    </div>
  );
};
export default MyListings;

// const [isComponentVisible, setIsComponentVisible] = useState(true);
// const handleDelete = () => {
//   setIsComponentVisible(false);
// };
// return (
//   <div className="profile-container">
//     <div className="profile-header">my listings</div>
//     <div className="my-listings">
//       {Array.from({ length: 1 }).map(
//         (_, index) =>
//           isComponentVisible && (
//             <ProductCard
//               product={tempProduct}
//               key={index}
//               isDeletable={true}
//               onDelete={handleDelete}
//             />
//           )
//       )}
//     </div>
//   </div>
//
