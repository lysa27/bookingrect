
import React ,{useEffect} from "react";
import { Routes , Route,useLocation } from "react-router-dom"; 
import Home from "../views/home";
import AboutUs from "../views/aboutus";
import ContactUs from "../views/contactus";
import LogIn  from "../views/login";
import Tours from "../views/tours";
import SignUp from "../views/signup";
import Final from "../views/final";
import NewTour from "../views/dashboard/newtour" ;
import DashLayout from "../components/dashboardlayout";
import AllTours from "../views/dashboard/alltours";
const isUserLogedIn = localStorage.getItem("userLogedIn")
const Index=()=>{
    const currentUrl = useLocation().pathname;
    return(
        <>
        <Routes>
            <Route element={<Home/>} path="/home"></Route>
            <Route element={<AboutUs/>} path="/aboutus"></Route>
            <Route element={<ContactUs/>} path="/contactus"></Route>
            <Route element={<LogIn/>} path="/login"></Route>
            <Route element={<Tours/>} path="/tours"></Route>
            <Route element={<SignUp/>} path="/signup"></Route>
            <Route element={<Final/>} path="/final"></Route>
            {/* <Route element={<NewTour/>} path="/newtour"></Route> */}
            
        </Routes>
        {
            isUserLogedIn && currentUrl.includes("/dash") ? (
                <DashLayout>
                <Routes>
                    {/* <Route path ="/dash/newtour" element={<NewTour/>} /> */}
                    <Route element={<AllTours/>} path="/dash/alltours"></Route>
                    <Route element={<NewTour/>} path="/dash/newtour"></Route>
                </Routes>
            </DashLayout>
            ) : ( 
                <></>
            )
        }
       
        </>
    )
};
export default Index;