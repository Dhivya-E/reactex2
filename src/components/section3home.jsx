import React from "react";
import './css/section3home.css'
class Part1 extends React.Component{
    
    render(){
        return(
            <>      
                   <h3>REDMI SMART BAND PRO  is an efficient smart band to quickly get a desired body shape at moderate to intense physical activity.</h3>               
            </>

        )
    }
}
class Part2 extends React.Component{
    render(){
        return(
            <>               
                  <p>All features in one band</p>              
            </>
        )
    }
}
function Main(props){
    return(
        <>
            <div className="c">
                <div>{props.f1}</div>
                <div>{props.f2}</div>
            </div>
        </>
    )
}

class section3home extends React.Component{
    render(){
        return(<Main f1={<Part1/>} f2={<Part2/>}/>)
    }
}
export default section3home