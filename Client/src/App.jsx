import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Pages/NotFound";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import SingleProduct from "./Pages/SingleProduct";
import { ToastContainer } from "react-toastify";
import AuthRoutes from "./routes/AuthRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthRoutes />}>
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route
              path="/SingleProduct/:productId"
              element={<SingleProduct />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
