import React from "react";
import Main from "../Components/Main/Main";
import Cardsitem from "../Components/Cards-item/Cardsitem";
import Footer from '../Components/Footer/Footer'
import BestSellerProducts from "../Components/BestsellerProducts/BestSellerProducts";
import Index from "../Components/Navbar/Index";

const Home = () => {
  return (
    <>
      <Index /> 
      <Main />
      <Cardsitem />
      <BestSellerProducts />
      <Footer />
    </>
  );
};

export default Home;
