import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Contact/Index.scss";
import { Col, Container, Row } from "reactstrap";
import instagram from "../../assets/Icons/Images/instagram.jpg";
import twitter from "../../assets/Icons/Images/twitter.jpg";
import facebook from "../../assets/Icons/Images/facebook.jpg";
import linkedin from "../../assets/Icons/Images/linkedin.jpg";
import technology1 from "../../assets/Icons/Images/technology1.jpg";
const Index = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ijkiayr", "template_uxxirsg", form.current, {
        publicKey: "HM8JbNNjeUz1V_0Jo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="left123">
              <h5>CONTACT US</h5>
              <h1>Get in touch today!</h1>
              <h4>
                We know how large objects will act, but things on a small scale
              </h4>
              <p>Phone ; +451 215 215 </p>
              <p>Fax : +451 215 215</p>
              <div className="social-media">
                <img src={instagram} />
                <img src={facebook} />
                <img src={twitter} />
                <img src={linkedin} />
              </div>
            </div>
          </Col>
          <Col>
            <div className="right">
              <img className="image" src={technology1} />
            </div>
          </Col>
        </Row>
        <section>
          <h2 className="text-center">Contact US</h2>
          <form ref={form} className="form-control" onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="full Name"
              name="user_name"
              required
            />
            <input
              type="email"
              placeholder="email"
              name="user_email"
              required
            />
            <input type="text" placeholder="Subject" name="Subject" required />
            <textarea name="message" cols="30" rows="10"></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </section>
      </Container>
    </>
  );
};

export default Index;
