import React, { useState } from "react";
import "../../Components/PricingSection/Style.scss";
import arrowIcon from "../../assets/Icons/arrow-icon.svg";
import { Col, Container, Row } from "reactstrap";
import PricingCard from "../../Components/PricingCard/index";
const Index = () => {
  const [selectYearly, setSelectYearly] = useState(true);
  return (
    <div>
      <div className="pricing-header">
        <h5>PRICING</h5>
        <h2>Simple Pricing</h2>
        <div>
          <span className="home">Home</span>
          <span>
            <img src={arrowIcon} alt="arrowIcon" />
          </span>
          <span className="pricing">Pricing</span>
        </div>
      </div>
      <div className="pricing-main">
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h2>Pricing</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <div className="form-check">
            <p>Monthly</p>
            <label className="price-switch">
              <input
                onChange={() => {
                  setSelectYearly((prev) => !prev);
                }}
                type="checkbox"
                className="price-checkbox"
                id="checkbox"
              />
              <div className="switch-slider"></div>
            </label>
            <p>Yearly</p>
            <button>Save 25%</button>
          </div>
        </Container>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <PricingCard
          title="FREE"
          desc="Organize across all 
apps by hand"
          price="0"
          year={selectYearly ? "per month" : "per year"}
          updates="Unlimited product updates
"
          storage="1GB  Cloud storage
"
          support="Email and community 
support
"
        />
        <PricingCard type="typeA"
          title="STANDARD "
          desc="Organize across all 
apps by hand"
          price={selectYearly ? "9.99" : "199.99"}
          year={selectYearly ? "per month" : "per year"}
          updates="Unlimited product updates
"
          storage="1GB  Cloud storage
"
          support="Email and community 
support
"
        />
        <PricingCard 
          title="PREMIUM "
          desc="Organize across all 
apps by hand"
          price={selectYearly ? "19.99" : "399.99"}
          year={selectYearly ? "per month" : "per year"}
          updates="Unlimited product updates
"
          storage="1GB  Cloud storage
"
          support="Email and community 
support
"
        />
      </div>
    </div>
  );
};

export default Index;
