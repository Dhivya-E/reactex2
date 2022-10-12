import React from "react";
import img1 from '../img1.jpg'
import './css/section2home.css'
class section2home extends React.Component{
    render(){
        const styles={
            height:"95vh",
            color:"#24305e"
        }
        return(
            <>
                <div className="second" style={styles}>
                    <img src={img1}/>
                    <h1>SPECIFICATIONS</h1>
                    <p>      
                        <br/>
                        <table>
                            <tr>
                                <td>Included Components</td>
                                <td>Fitness Tracker</td>
                            </tr>
                            <tr>
                                <td>Operating System</td>
                                <td>Android</td>
                            </tr>
                            <tr>
                                <td>Item Type Name</td>
                                <td>Fitness Band</td>
                            </tr>
                            <tr>
                                <td>Case Material Type</td>
                                <td>Plastic</td>
                            </tr>
                        </table> 
                        <br/><br/>
                            BIG 3.78 cm Always-ON AMOLED Display<br/>
                            Blood Oxygen Saturation (SpO2) Monitoring<br/>
                            Magnetic charging<br/>
                            110+ Workout Modes<br/>
                            LifeQ Health Algorithm<br/>
                            14 days Battery Life<br/>               
                    </p>
                </div>
            </>

        )
    }
}
export default section2home