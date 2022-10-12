import React from "react";
import './css/section1home.css'
import img2 from '../features-cover.jpg'
class section1home extends React.Component{
    render(){
        return(
            <>
                <div className="first"> 
                    <img src={img2} alt="" />
                    <h1 id="head">REDMI SMART BAND PRO <br></br>1.47" Full AMOLED Display, 110+ Fitness Modes, Up to 14 Days Battery Life, Heart Rate Tracking, 5 ATM Water Resistance, Sleep Quality Tracking, SPO2 Monitoring</h1>
                </div>
            </>

        )
    }
}
export default section1home