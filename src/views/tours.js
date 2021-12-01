// import React from "react";
// import HomeLayout from "../components/homelayout";
// import TourCard from "../components/tourcard";
// const Tours =()=>{
//     return(
//         <HomeLayout>
//             <TourCard>
//             <div className="tours-container">
//             <h1>FUGHJK</h1>
//             </div>
//             </TourCard>
           
//         </HomeLayout>
//     )
// }
// export default Tours
import React from "react";
import "./aboutus.css";
import HomeLayout from "../components/homelayout";
import TourCard from "../components/tourcard";
import allToursData from "../assets/constants/tours.json";

const Tours =()=>{
    
    return(
        <>
       
        <HomeLayout>
           
           
            <div className="tours-container">
                {
                    allToursData.map((data)=>( <TourCard data={data}/>))
                }
             
            </div>
         
        </HomeLayout>
        </>
    );
};
export default Tours;