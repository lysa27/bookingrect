
import React from "react";
import { Routes , Route } from "react-router-dom"; 
import Home from "../views/home";
import AboutUs from "../views/aboutus";
import ContactUs from "../views/contactus";
import LogIn  from "../views/login"
const Index=()=>{
    return(
        <Routes>
            <Route element={<Home/>} path="/home"></Route>
            <Route element={<AboutUs/>} path="/aboutus"></Route>
            <Route element={<ContactUs/>} path="/contactus"></Route>
            <Route element={<LogIn/>} path="/login"></Route>
        </Routes>
    )
};
export default Index;