import React, { useState } from "react";
import "../Login/Login.scss";
import facebook from "../../assets/Icons/facebook-icon.svg";
import Separator from "../../assets/Icons/separator.svg";
import axios from "axios";
import { toast } from "react-toastify";
import { Container } from "reactstrap";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { storeUser } from "../../helpers"; // Ensure you have a helper function to store the user info

const CustomLink = ({ to, pageName }) => {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: true });
  return (
    <li className={`item ${isActive ? "active" : ""}`}>
      <Link to={to}>{pageName}</Link>
    </li>
  );
};

const initialUser = { identifier: "", password: "" };

const Login = () => {
  const navigate = useNavigate();
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [user, setUser] = useState(initialUser);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_UPLOAD_IMG}/api/auth/local`;
    try {
      if (user.identifier && user.password) {
        const response = await axios.post(url, {
          identifier: user.identifier,
          password: user.password,
        });
        if (response.data.jwt) {
          storeUser(response.data); 
          setUser(initialUser);
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };
  return (
    <div>
      <Container>
        <section>
          <div className="signUp-header">
            <h2>Welcome Back</h2>
          </div>
          <div className="signUp-main">
            <a target="_blank" href="https://www.facebook.com/">
              <img src={facebook} alt="facebook-icon" />
              Facebook
            </a>
            <img className="separator" src={Separator} alt="separator-icon" />
            <form className="signup-form" onSubmit={handleLogin}>
              <label>Email address *</label>
              <input
                type="email"
                name="identifier"
                value={user.identifier}
                onChange={handleChange}
                placeholder="example@gmail.com "
              />
              <label>Password *</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="password "
              />
              <input
                className="getStarted-btn"
                type="submit"
                value="Get Started"
              />
            </form>
          </div>
          <div className="login">
            <h3>Don't have an Account?</h3>
            <CustomLink to="/SignUp" pageName="Sign Up" />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Login;
