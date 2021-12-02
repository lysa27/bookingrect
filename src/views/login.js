// import React from "react";
// import HomeLayout from "../components/homelayout";
// import {faInstagram} from "@fortawesome/free-brands-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useNavigate } from "react-router";
// import {Form,Input,DatePicker,Button,Space,InputNumber} from "antd";
// // import gare from "../assets/gare.jpg"
// const LogIn =()=>{
//     const navigate= useNavigate();
//     return(
//         <HomeLayout>
            
//             <div className="log">
//             <h1>Log in:</h1>
            
              
//             <div className="login">
//                   <div className="linfo">
//                   <Form.Item>
//             <label for ="input" required="true" >E-mail:</label><br/>
//             <input type="email"/><br/><br/>
//             <label for ="input" rules= {[{required:true}]}>Password:</label><br/>
//             <input type="password"/><br/><br/>
//             <p> Or you don't have an account just sign in<a href="./signup"> Create account</a></p>
//              <button htmlType="submit" className= "morebutton" onClick={()=>{ 
//                 localStorage.setItem("userLogedIn",true);
//                 navigate("/dash/newtour");
//             }}> Send</button>
//             </Form.Item>
//             </div>  
//              <div className="licon">
                   
//            <a href="https://www.instagram.com/"> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
//             <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
//             <a href="https://twitter.com/home"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
//             </div> 
            
//             </div>
//             </div> 
            
//         </HomeLayout>
//     )
// }
// export default LogIn