import React from "react";
import Footer from "../Components/Footer/Footer";
import Index from "../Components/Products/Index";
import NavbarS from '../Components/Navbar/Index'
const Product = () => {
  return (
    <>
      < NavbarS type="typeA" />
      <Index /> 
      <Footer type="typeA"/>
    </>
  );
};

export default Product;
