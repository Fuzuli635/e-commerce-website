import React from "react";
import "../Notfound/index.scss";
import ArrowIcon from "../../assets/Icons/arrow-icon.svg";
import Iconarrowright from "../../assets/Icons/icon-right.svg";
import oops from "../../assets/Icons/oops.svg";
import { Container } from "reactstrap";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const CustomLink = ({ to, pageName }) => {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: true });
  return (
    <li className={`item ${isActive ? "active" : ""}`}>
      <Link to={to}>{pageName}</Link>
    </li>
  );
};
const index = () => {
  return (
    <>
      <Container>
        <section>
          <div className="notfound-header">
            <h2>404</h2>
            <div className="home-404-section">
              <a href="#Home">Home</a>
              <img src={ArrowIcon} alt="arrow-icon" />
              <h6>404</h6>
            </div>
          </div>
        </section>
      </Container>
      <main>
        <Container>
          <div className="oops-img">
            <img src={oops} alt="oops" />
            <div className="oops">
              <h2>Oops...</h2>
              <p>We can’t seem to find the page you’re looking for.</p>
              <div className="btn">
                <button>Back to Home</button>
              </div>
              <div className="lookingfor-section">
                <h2>Are you looking for...</h2>
              </div>
              <div className="links">
                <div className="div">
                  <img src={Iconarrowright} alt="icon-arrow" />
                  <CustomLink to="/Home" pageName="Home" />
                </div>
                <div className="div">
                  <img src={Iconarrowright} alt="icon-arrow" />
                  <CustomLink to="/Blog" pageName="Blog" />
                </div>
                <div className="div">
                  <img src={Iconarrowright} alt="icon-arrow" />
                  <CustomLink to="/Contact" pageName="Contact" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default index;
