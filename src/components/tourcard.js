import React,{useState} from "react";
import gare from "../assets/gare.jpg"
import {Drawer} from "antd";
import "antd/dist/antd.css";
import SingleTour from "./singleTour";
const TourCard=({data})=>{
    const [drawerVisible,setDrawerVisible]=useState(false);
    const handleClickDrawerVisible = ()=>{
        setDrawerVisible(true);
    }
    const claserDrawerVisible = ()=>{
        setDrawerVisible(false);
    }
    return(
        <>
         <Drawer  title="Basic Drawer" placement="left" visible={drawerVisible} width={720} onClose={ ()=>claserDrawerVisible()}>
            <SingleTour tour={data}/>
        </Drawer> 
        <div className="tourcard-container">
             <div className="imagecont1">
                    <img src={data.images[0]}/>
            </div>
            <div className="quotes">
            <h1>{data.title}</h1>
            <p style={{ fontSize:"20px", color:"black", marginBottom:"10px", padding:"25px"}}>{data.description}</p>
            <span style={{ marginTop:"20px", fontWeight:"700", marginLeft:"15px",}}>
                <label style={{margin:"10px"}}>Date Scheduled:
                {data.dueDate}
                </label ><br/><br/>
                <label style={{margin:"25px"}}> Due Date Scheduled:
                {data.dateScheduled}</label><br/><br/>
                <label style={{margin:"28px" , textAlign:"center"}}>Available Seats:
                {data.seats}</label><br/><br/>
                <label style={{margin:"30px"}}>Phone -number:
                {data.phone}</label>
                <a href="#"><button className= "morebutton" onClick={()=>handleClickDrawerVisible()} style={{color:"white"}}>Read More...</button></a>

            </span>
            </div>
        </div>
        </>
    )
}
export default TourCard;