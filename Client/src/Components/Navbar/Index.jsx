import React, { useState } from "react";
import "./Index.scss";
import "../../Styles/Reset.scss";
import Cart1 from "../Cart/Index";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { userData } from "../../helpers";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
const CustomLink = ({ id, to, pageName }) => {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: true });
  return (
    <li id={id} className={`item ${isActive ? "active" : ""}`}>
      <Link to={to}>{pageName}</Link>
    </li>
  );
};

const Index = ({ type }) => {
  console.log(import.meta.env.VITE_APP_MODE);
  const navigate = useNavigate();
  const { jwt } = userData();
  const logOut = () => {
    localStorage.setItem("user", "");
    navigate("/Login");
  };
  const products = useSelector((state) => state.cart.products);
  const [open, setOpen] = useState(false);
  return (
    <div className={`navbar-Section ${type}`}>
      <div className="container">
        <div className="navbar">
          <div className={`heading ${type}`}>
            <Link className="lovely" to="/Home">
              Lovely
            </Link>
          </div>
          <ul className={`nav-menu ${type}`}>
            <CustomLink id="link" to="/Home" pageName="Home" />
            <CustomLink to="/Product" pageName="Product" />
            <CustomLink to="/Pricing" pageName="Pricing" />
            <CustomLink to="/Contact" pageName="Contact" />
          </ul>
          {!jwt ? (
            <>
              <div className={`nav-login-cart ${type}`}>
                <CustomLink id="login" to="/Login" pageName="Login" />
                <CustomLink
                  id="member"
                  to="/SignUp"
                  pageName="Become a member"
                />
              </div>
            </>
          ) : (
            <div className={`nav-login-cart ${type}`}>
              <button className="logOut" onClick={logOut}>
                Logout
              </button>
            </div>
          )}
          <div className={`nav-login-cart ${type}`}>
            {/* <CustomLink id="login" to="/Login" pageName="Login" />
            <CustomLink id="member" to="/SignUp" pageName="Become a member" />
            <li>
              <button onClick={logOut}>Logout</button>
            </li> */}
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartIcon className="cartIcon1" />
              <span>{products.length}</span>
            </div>
            <div className="favoriteIcon">
              <FavoriteBorderIcon className="favoriteIcon" />
            </div>
          </div>
        </div>
      </div>
      {open && <Cart1 />}
    </div>
  );
};

export default Index;
