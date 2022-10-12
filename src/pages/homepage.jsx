import React from "react";
import './homepage.css'
import Footer from '../components/footer'
import Sec1 from '../components/section1home'
import Sec2 from '../components/section2home'
import Sec3 from '../components/section3home'

import Nav from '../components/nav'
const homepage=()=>{
    
    return(
        <>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=DynaPuff&family=Stylish&display=swap" rel="stylesheet"/>
        </head>
        <body>
            <Nav/>
            <div className="content">
                <Sec1/>
                <Sec2/>
                <Sec3/>
            </div>         
            <Footer/>
       </body>
    </>
    )
}

export default homepage