import React from "react";
import "../Main/Main.scss";
import { Col, Container, Row } from "reactstrap";
import BabyImage from "../../assets/Icons/Images/baby-sa.png";

const Main = () => {
  return (
    <div
      style={{
        background: "#2053ac",
        height:"550px"
      }}
    >
      <Container>
        <Row>
          <Col>
            <div className="summer-container">
              <h5>SUMMER 2020</h5>
              <h1>Make Your Skin Shine & Fresh</h1>
              <h4>
                We know how large objects will act, but things on a small scale.
              </h4>
              <button>Read More</button>
            </div>
          </Col>
          <Col>
            <img className="image" src={BabyImage} alt="baby-sampun" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
