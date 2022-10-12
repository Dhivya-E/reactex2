import React from "react";

class nav extends React.Component{
    render(){
    
        const nava={
                color: "#f2f2f2",
                padding:"0 20%",
                textDecoration:" none",
        }
        return(
            <>
                <nav style={{
                width: "100%",
                height: "50px",
                backgroundColor:"#05386B",
                textAlign: "center",
                paddingTop: "30px",
                position: "fixed",
                zIndex: "100"}} >
                    <a style={nava} href="#home" >HOME</a>
                    <a style={nava} href="#contact" >CONTACT</a>
                </nav>
            </>

        )
    }
}
export default nav