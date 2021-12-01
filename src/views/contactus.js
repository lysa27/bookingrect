import React from "react";
import HomeLayout from "../components/homelayout";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gare from "../assets/gare.jpg"
const ContactUs =()=>{
    return(
        <HomeLayout>
            <div className="contact">
            <h1> For More Information:</h1>
            </div>
              
            <div className="contact1">
                <div className="imagecont">
                    <img src={gare}/>
            </div>
            <div className="icon">
                    <div className="info">
                    <label for ="input" >Full Name:</label><br/>
            <input/><br/>
            <label for ="input">E-mail:</label><br/>
            <input type="email"/><br/>
            <label for ="input">Message:</label><br/>
            <textarea></textarea><br/>
            <input type="submit" value="contact us" style={{'borderRadius':'30px', border:"2px solid black" ,background: "blue", color: "white" }}/>
                </div>
<<<<<<< HEAD
            {/* <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> */}
             {/* <a href="https://www.instagram.com/"> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
            <a href="https://twitter.com/home"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a> */}
=======
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
>>>>>>> 7e605bf ( react)
            </div>
            </div>
        </HomeLayout>
    )
}
export default ContactUs