
import React from "react";
import { Routes , Route } from "react-router-dom"; 
import Home from "../views/home";
import AboutUs from "../views/aboutus";
import ContactUs from "../views/contactus";
import LogIn  from "../views/login";
import Tours from "../views/tours";
import SignUp from "../views/signup";
import Final from "../views/final";
import NewTour from "../views/dashboard/newtour"
const Index=()=>{
    return(
        <Routes>
            <Route element={<Home/>} path="/home"></Route>
            <Route element={<AboutUs/>} path="/aboutus"></Route>
            <Route element={<ContactUs/>} path="/contactus"></Route>
            <Route element={<LogIn/>} path="/login"></Route>
            <Route element={<Tours/>} path="/tours"></Route>
            <Route element={<SignUp/>} path="/signup"></Route>
            <Route element={<Final/>} path="/final"></Route>
            <Route element={<NewTour/>} path="/newtour"></Route>
        </Routes>
    )
};
export default Index;