import React,{useState} from "react";
import "./header.css";
import  logo from "../assets/logo.jpg";
import {useNavigate} from "react-router-dom"
import { Modal,Form,Input ,Button } from "antd";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header=()=>{
    const [visible, setVisible]= useState(false);
    const [signupvisible, setSignupVisible]= useState(false);
    const onFinish=(values)=>{
        console.log(values)
        localStorage.setItem("userLogedIn", true);
        navigate("/dash/newtour")
    };  
    const onFinishSignUp=(values)=>{
        console.log(values)
        setSignupVisible(false)
        setVisible(true)
    };
    const navigate = useNavigate();
    return(
        <>
        <Modal visible={visible}
        width="40%"
        onOk={()=>setVisible(true)}
        onCancel={() =>setVisible(false)}
        >
            <h1>LOG IN</h1>
            <Form onFinish={onFinish}>
                <Form.Item label="Email" name="email" rules={[{required:true, type:"email"}]}>
                    <Input type="email"/>
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{required:true}]}>
                    <Input type="password"/>
                </Form.Item>
                <Button htmlType="submit" onClick={()=>{
 <div className="licon">
                   
 <a href="https://www.instagram.com/"> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
  <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
  <a href="https://twitter.com/home"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
  </div> 
  
                }}>login</Button>
            </Form>
        </Modal>

        <Modal visible={signupvisible}
        width="40%"
        onOk={()=>setSignupVisible(true)}
        onCancel={() =>setSignupVisible(false)}
        >
            <h1>SIGN UP</h1>
            <Form onFinish={onFinishSignUp}>
            <Form.Item label="First Name" name="firstName" rules={[{required:true,}]}>
                    <Input type="text"/>
                </Form.Item>
                <Form.Item label="Last Name" name="lastName" rules={[{required:true, }]}>
                    <Input type="text"/>
                </Form.Item>
                <Form.Item label="Phone Number" name="phoneNumber" rules={[{required:true, }]}>
                    <Input type="tel"/>
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{required:true, }]}>
                    <Input type="email"/>
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{required:true}]}>
                    <Input type="password"/>
                </Form.Item>
                <Form.Item label="Re-Password" name="repassword" rules={[{required:true}]}>
                    <Input type="password"/>
                </Form.Item>
                <Button htmlType="submit" onClick={()=>{

                }}>continue</Button>
            </Form>
        </Modal> 

        <div className="header">
<img src={logo}/>
        <div className="navbar-right">
            <a href="../home">Home</a>
            <a href="../aboutus">About us</a>
            <a href="../contactus">Contact us</a>
            <a href="#" onClick={()=>setSignupVisible(true)}>Sign up</a>
            <a href="#" onClick={()=>setVisible(true)}>Login</a>
            <a href="../tours">Tours</a>
        </div>
        </div>
        </>
    )
}
export default Header