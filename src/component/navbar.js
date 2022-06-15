import React from "react";
import logo from "../assets/images/logo.jpg";
import "./Nav.css";

const Nav=()=>{
    return(
        <div className="Nav">
            <img src={logo} alt="tour-rwanda-logo" className="logo-img"/>
            <div className="navigation-links">
                <ul className="nav-links">

                    <li><a href="/home" className="nav-link">
                        HOME
                        </a></li>
                        
                    <li><a href="/about" className="nav-link">
                        ABOUT-US
                        </a></li>
                        
                    <li><a href="" className="nav-link">
                        CONTACT-US
                        </a></li>
                        
                    <li><a href="" className="nav-link link-green">
                        SIGN-IN
                        </a></li>
                        
                    <li><a href="" className="nav-link">
                        Tours
                        </a></li>
                </ul>


            </div>
        </div>
    )
}
export default Nav;