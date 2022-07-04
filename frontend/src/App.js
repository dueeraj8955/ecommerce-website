import './App.css';
import Header  from './component/layout/Header/Header.js';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer  from './component/layout/Footer/Footer.js';
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google:{
        families: ['Roboto', 'Droid Serif'],
      },
    });
  },[]);

  return (
    <Router>
      <Header/>
      <Routes>
      <Route path={"/"} exact element={<Home />} />
      <Route path={"/product/:id"} exact element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
