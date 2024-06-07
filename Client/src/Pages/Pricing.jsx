import React from 'react'
import PricingSection from '../Components/PricingSection/Index'
import Index from '../Components/Navbar/Index';
import Footer from '../Components/Footer/Footer'
const Pricing = () => {
  return (
    <>
      <Index type="typeA" />
      <PricingSection />
      <Footer type="typeA" />
    </>
  );
}

export default Pricing