import React from "react"
import "./homelayout.css"
import Header from "./Header";
import Foter from "./foter";
import TourCard from "./tourcard";
// import SingleTour from "../views/singleTour";
const HomeLayout=({children})=>{ 
    return (
        <div className="home-container">
            <Header/>
            <div style={{ MinHeight:"90vh"}}>
                {children}
               
            </div>
            
            <Foter/>
        </div>
    
    )}
export default HomeLayout