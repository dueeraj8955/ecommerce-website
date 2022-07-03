import React, { Fragment} from "react";
import {FaMouse}  from "react-icons/fa"
import Product from "./Product.js"
import "./Home.css";

const product = {
  name: "Blue Tshirt",
  images:[{url: "https://i.ibb.co/DRST11n/1.webp"}],
  price: " ₹300",
  _id: "dheeraj",
}


const Home = () => {

  return( 
    <Fragment>
      
      <div className="banner">
        <p>Welcome To Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
      <a href="#container">
        <button>
            Scroll <FaMouse/>
        </button>
      </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product = {product} />
      </div>

    </Fragment>
  )
};

export default Home