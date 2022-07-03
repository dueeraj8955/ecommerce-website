import React, { Fragment, useEffect} from "react";
import {FaMouse}  from "react-icons/fa"
import Product from "./Product.js"
import "./Home.css";
import MetsData from "../layout/MetaData.js";
import {getProduct} from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux";


const Home = () => {

  const dispatch = useDispatch();

  const {loading, error, products,productsCount} = useSelector((state) => state.products);

  useEffect(()=>{

    dispatch(getProduct());
  },[dispatch])

  return( 
    <Fragment>
      <MetsData title="ECOMMERCE"/>

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
            {products && products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
      </div>

    </Fragment>
  )
};

export default Home