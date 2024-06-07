import React from 'react'
// import Index from '../Navbar/Index';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
const Layout = () => {
  return (
    <>
      {/* <Index /> */}
      <Outlet />
    </>
  );
}

export default Layout