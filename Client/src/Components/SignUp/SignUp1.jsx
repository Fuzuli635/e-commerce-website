import React from "react";
import "../SignUp/SignUp.scss";
import facebook from "../../assets/Icons/facebook-icon.svg";
import Separator from "../../assets/Icons/separator.svg";
import { Container } from "reactstrap";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const CustomLink = ({ to, pageName }) => {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: true });
  return (
    <li className={`item ${isActive ? "active" : ""}`}>
      <Link to={to}>{pageName}</Link>
    </li>
  );
};

const SignUp = () => {
  window.scrollTo({ top: 190, behavior: "smooth" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      const url = `${import.meta.env.VITE_UPLOAD_IMG}/api/auth/local/register`;
      const res = await axios.post(url, {
        username: data.Name,
        email: data.Email,
        password: data.Password,
      });
      console.log(res.data);
      toast.success("Registration successful!", { hideProgressBar: true });
      navigate("/Login");
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
            <h2>Sign up for free</h2>
            <h5>
              Try everything free for 30 days, no payment details required
            </h5>
          </div>
          <div className="signUp-main">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/"
            >
              <img src={facebook} alt="facebook-icon" />
              Facebook
            </a>
            <img className="separator" src={Separator} alt="separator-icon" />
            <form className="signup-form" onSubmit={handleSubmit(registerUser)}>
              <label>Name *</label>
              <input
                className={errors.Name ? "error" : ""}
                type="text"
                {...register("Name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Min Length must be at least 3 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "Max Length is 12",
                  },
                })}
              />
              {errors.Name && (
                <p className="error-message">{errors.Name.message}</p>
              )}

              <label>Email address *</label>
              <input
                className={errors.Email ? "error" : ""}
                type="email"
                {...register("Email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.Email && (
                <p className="error-message">{errors.Email.message}</p>
              )}

              <label>Password *</label>
              <input
                type="password"
                className={errors.Password ? "error" : ""}
                {...register("Password", {
                  required: "Password is required",
                })}
              />
              {errors.Password && (
                <p className="error-message">{errors.Password.message}</p>
              )}

              <button type="submit" className="getStarted-btn">
                Get Started
              </button>
            </form>
          </div>

          <div className="login">
            <h3>Already have an account?</h3>
            <CustomLink to="/Login" pageName="Sign in" />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default SignUp;
