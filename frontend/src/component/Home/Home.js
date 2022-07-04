import React, { Fragment, useEffect} from "react";
import {FaMouse}  from "react-icons/fa"
import Product from "./Product.js"
import "./Home.css";
import MetsData from "../layout/MetaData.js";
import {getProduct} from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux";
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";

const Home = () => {

  const alert = useAlert();

  const dispatch = useDispatch();

  const {loading, error, products,productsCount} = useSelector((state) => state.products);

  useEffect(()=>{

    if(error){
      return alert.error(error);
    }
    dispatch(getProduct());
  },[dispatch,error,alert])

  return( 
    <Fragment>
      {loading ? (<Loader/>):(<Fragment>
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
    </Fragment>
  )
};

export default Home