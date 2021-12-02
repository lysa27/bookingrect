// import React,{useState} from "react";
// import HomeLayout from "../components/homelayout";
// import {faInstagram} from "@fortawesome/free-brands-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import gare from "../assets/gare.jpg"
// const SignUp =()=>{
//     const [visible, setVisible]= useState(false);
//     return(
//         <HomeLayout>
//             <div className="sign-up">
//             <h1> Create an account:</h1>
//             <div className="signup">
//                   <div className="sinfo">
//             <label for ="input" >Full Name:</label><br/>
//             <input/><br/><br/>
//             <label for ="input">E-mail:</label><br/>
//             <input type="email"/><br/><br/>
//             <label for ="input">Password:</label><br/>
//             <input type="password"/><br/><br/>
//             <label for ="input"> Re-type Password:</label><br/>
//             <input type="password"/><br/><br/>
//             <p> You have an account already <a href="#" onClick={()=>setVisible(true)}> Log in</a></p>
//             <a href="./login"><button className= "morebutton"> Send</button></a> 
//             </div>  
//              <div className="licon">
                   
//             {/* <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
//             <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
//             <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> */}
//              <a href="https://www.instagram.com/"> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
//             <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
//             <a href="https://twitter.com/home"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
//             </div> 
            
//             </div>
//             </div> 
//         </HomeLayout>
//     )
// }
// export default SignUp;