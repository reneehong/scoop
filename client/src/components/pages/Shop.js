import React, { useEffect, useState } from "react";
import "./Shop.css";
import axios from "axios";
import { Link } from "react-router-dom";
import waffleImage from "../../assets/wafflebackground.png";
import ShopSection from "./ShopSection.js";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products/all");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <section className="Shop">
      <section className="container">
        <img src={waffleImage} alt="waffle" className="img" />
        <div class="overlay-text">
          <h1>the waffle shop</h1>
          <p>have any goods you want to sell to your friends on campus for cheap?</p>
          <Link to="/addalisting">
            <button className="add-listing-button">add a listing here!</button>
          </Link>
        </div>
      </section>
      <div class="shopsection">
        <br />
        <ShopSection products={products} />
      </div>
    </section>
  );
};

export default Shop;
