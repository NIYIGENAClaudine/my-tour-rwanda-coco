import React from "react";
import LogoFooter from "../assets/images/logo.jpg";
import {FacebookOutlined} from "@ant-design/icons";
 import {TwitterOutlined} from "@ant-design/icons";
  import {InstagramOutlined} from "@ant-design/icons";
  import "./footer.css";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="footer-container">
      <div className="logo-column">
        <img src={LogoFooter} alt="logo footer" className="logo-img" />
        <div className="icons">
          <FacebookOutlined />
          <TwitterOutlined />
          <InstagramOutlined />
        </div>
        <p className="copyright">
          {" "}
          copyright &copy;{year} by SheCanCODE,
          <span>Inc.All rights reserved</span>
          {""}
        </p>
      </div>

      <div className="contactus-column">
        <h3 className="footer-title">Contact-Us</h3>
        <p>623 Kacyiru ST.,2nd floor, <span>Kigali-Rwanda</span></p>
        <p><a href="tel:+250-785-322-071">tel:+250-785-322-071</a></p>
      <p><a href="mailto:shecancode@gmail.com">mailto:shecancode@gmail.com</a></p>
      </div>
      
      <div className="Account-column">
        <h3 className="footer-title">Contact-Us</h3>
        <p><a ahref="#">Create Account</a></p>
        <p><a ahref="#">Sign in</a></p>
      </div>

      <div className="Company-column">
        <h3 className="footer-title">Company</h3>
        <p><a ahref="#">About-us</a></p>
        <p><a ahref="#">Careers</a></p>
      </div>

      <div className="Resources-column">
        <h3 className="footer-title">Resources</h3>
        <p><a ahref="#">ShecanCode-directory</a></p>
        <p><a ahref="#">help center</a></p>
      </div>
    </div>
  );
};
export default Footer;
