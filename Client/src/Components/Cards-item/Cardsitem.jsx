import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../Cards-item/Cards-item.scss";
import jobIcon from "../../assets/Icons/job-icon.svg";
const Cardsitem = () => {
  return (
    <Container>
      <Row
        style={{
          background: "#fff",
          marginTop: "-70px",
          boxShadow: "0px 13px 19px 0px rgba(0, 0, 0, 0.07)",
          marginBottom:"80px"
        }}
      >
        <Col>
          <div className="card-items">
            <img src={jobIcon} alt="job-icon" />
            <h3>Job Security</h3>
            <p>the quick fox jumps over the lazy dog</p>
          </div>
        </Col>
        <Col>
          <div className="card-items">
            <img src={jobIcon} alt="job-icon" />
            <h3>Job Security</h3>
            <p>the quick fox jumps over the lazy dog</p>
          </div>
        </Col>
        <Col>
          <div className="card-items">
            <img src={jobIcon} alt="job-icon" />
            <h3>Job Security</h3>
            <p>the quick fox jumps over the lazy dog</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cardsitem;
