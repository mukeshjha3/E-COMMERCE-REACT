import React from "react";
import "./Footer.css";
import footer_logo from "../Assests/logo_big.png";
import InstagramIcon from "../Assests/instagram_icon.png";
import pintester from "../Assests/pintester_icon.png";
import whatsapp from "../Assests/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer-logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={InstagramIcon} alt="instagram-icon" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester} alt="pintester-icon" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp} alt="whatsapp-icon" />
        </div>
      </div>
      <div className="footer-copywrite">
        <hr />
        <p>Copyright @ 2024 - All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
