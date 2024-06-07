import React from 'react'
import { Container } from 'reactstrap';
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
const index = ({ title, desc, price, updates, storage, support,year,type }) => {
  return (
    <div>
      <div className={`pricing-card ${type}`}>
        <Container>
          <header>
            <h5 className="card-title">{title}</h5>
            <h5 className="card-desc">{desc}</h5>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "15px"
              }}
            >
              <h2 className="card-price">{price}</h2>
              <div>
                <h3>$</h3>
                <h5>{year}</h5>
              </div>
            </div>
          </header>
          <div className="card-features">
            <div className="card-uptades">{updates}</div>
            <div className="card-uptades">{updates}</div>
            <div className="card-uptades">{updates}</div>
            <div className="card-storage">{storage}</div>
            <div className="card-support">{support}</div>
          </div>
          <a href='/home' className={`card-btn ${type}`}>Try for free</a>
          {/* <CustomLink  to="/Home" pageName="Try for free" /> */}
        </Container>
      </div>
    </div>
  );
};

export default index