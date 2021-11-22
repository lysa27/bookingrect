import React from "react";
import HomeLayout from "../components/homelayout";
import {faInstagram, faintagram} from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import gare from "../assets/gare.jpg"
const LogIn =()=>{
    return(
        <HomeLayout>
            <div className="log">
            <h1>Log in:</h1>
            
              
            <div className="login">
                  <div className="linfo">
            <label for ="input" >Full Name:</label><br/>
            <input/><br/>
            <label for ="input">E-mail:</label><br/>
            <input type="email"/><br/>
            </div>  
             <div className="licon">
                   
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </div> 
            
            </div>
            </div> 
        </HomeLayout>
    )
}
export default LogIn