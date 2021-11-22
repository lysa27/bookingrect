import React from "react";
import "./header.css";
import  logo from "../assets/logo.jpg";
const Header=()=>{
    return(
        <div className="header">
<img src={logo}/>
        <div className="navbar-right">
            <a href="../home">Home</a>
            <a href="../aboutus">About us</a>
            <a href="../contactus">Contact us</a>
            <a href="#">Sign up</a>
            <a href="#">Login</a>
        </div>
        </div>
    )
}
export default Header