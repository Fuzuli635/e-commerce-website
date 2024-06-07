import React from "react";
import "../Footer/Footer.scss";
import { Button, Container, Row, Col } from "reactstrap";
import Facebook from "../../assets/Icons/facebook.svg";
import Instagram from "../../assets/Icons/instagram.svg";
import Twitter from "../../assets/Icons/Twitter.svg";

const Footer = ({type}) => {
  return (
    <div className={` footer-section ${type}`}>
      <Container>
        <div className="footer-navbar">
          <a className={` lovely ${type}`} href="/">
            Lovely
          </a>
          <div className="social-media">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={Facebook} alt="fb-logo" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={Instagram} alt="instagram-logo" />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <img src={Twitter} alt="twitter-logo" />
            </a>
          </div>
        </div>
        <div className="hr"></div>
        <div className="footer-details">
          <div className="company-info">
            <h5 className={`companyInfo-title ${type}`}>Company Info</h5>
            <div className="info-links">
              <a className={`infoLinks-a ${type}`} href="/">
                About Us
              </a>
              <a className={`infoLinks-a ${type}`} href="/">
                Carrier
              </a>
              <a className={`infoLinks-a ${type}`} href="/">
                We are hiring
              </a>
              <a className={`infoLinks-a ${type}`} href="/">
                Blog
              </a>
            </div>
          </div>
          <div className="company-info">
            <h5 className={`companyInfo-title ${type}`}>Legal</h5>
            <div className="info-links">
              <a className={`infoLinks-a ${type}`} href="/">
                About Us
              </a>
              <a className={`infoLinks-a ${type}`} href="/">
                Carrier
              </a>
              <a className={`infoLinks-a ${type}`} href="/">
                We are hiring
              </a>
              <a className={`infoLinks-a ${type}`} href="/">
                Blog
              </a>
            </div>
          </div>
          <div className="company-info">
            <h5 className={`companyInfo-title ${type}`}>Features</h5>
            <div className="info-links">
              <a className={`infoLinks-a ${type}`} href="/">
                Business Marketing
              </a>
              <a className={`infoLinks-a ${type}`} href="/">
                User Analytic
              </a>
              <a className={`infoLinks-a ${type}`} href="/">
                Live Chat
              </a>
              <a className={`infoLinks-a ${type}`} href="/">
                Unlimited Support
              </a>
            </div>
          </div>
          <div className="company-info">
            <h5 className={`companyInfo-title ${type}`}>Unlimited Support</h5>
            <div className="info-links">
              <a className={`infoLinks-a ${type}`} href="/">
                IOS & Android
              </a>
              <a className={`infoLinks-a ${type}`} href="/">
                Watch a Demo
              </a>
              <a className={`infoLinks-a ${type}`} href="/">
                Customers
              </a>
              <a className={`infoLinks-a ${type}`} href="/">
                API
              </a>
            </div>
          </div>
          <div className="company-info">
            <h5 className={`companyInfo-title ${type}`}>Get In Touch</h5>
            <div className="info-links">
              <form className="subscribe-form">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
              </form>
              <p className={`parag ${type}`}>Lore imp sum dolor Amit</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className={`copyright-p ${type}`}>
            Made With Love By Finland All Right Reserved{" "}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
