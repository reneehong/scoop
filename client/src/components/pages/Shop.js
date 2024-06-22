import React from "react";
import "./Shop.css";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import waffleImage from "../../assets/wafflebackground.png";
import ShopSection from "./ShopSection";

const Shop = () => {
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
        <ShopSection></ShopSection>
      </div>
    </section>
  );
};

export default Shop;
