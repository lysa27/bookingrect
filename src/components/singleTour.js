import React from "react";
import "./singleTour.css";
const SingleTour=({tour})=>{
    return(
        
        <div className="singletour-container">
            <h1>{tour.title}</h1>
          
            <img src={tour.images[0]}/> 
            <p>{tour.tripDescription}</p>
            <div className="span-div">
            <span style={{ justifyContent:"space-between" ,marginTop:"15px", fontWeight:"bolder", fontSize:"15px"}}>
                <label>Date Scheduled:
                {tour.dueDate}
                </label><br/><br/>
                <label> Tour Posted By:
                {tour.user.name}<br/>{tour.user.phone} </label><br/><br/>
                <label>Available Seats:
                {tour.seats}</label><br/><br/>
                <label>Phone -number:
                {tour.phone}</label>
                 <a href="./signup"><button className= "morebutton"> Book Now</button></a> 
            </span>
            </div>
        </div>
        
    )
}
export default SingleTour