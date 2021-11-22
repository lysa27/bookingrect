import React from "react"
import "./homelayout.css"
import Header from "./Header";
import Foter from "./foter";
const HomeLayout=({children})=>{ 
    return (
        <div className="home-container">
            <Header/>
            <div style={{height:"90vh"}}>
                {children}
               
            </div>
            <Foter/>
        </div>
    
    )}
export default HomeLayout