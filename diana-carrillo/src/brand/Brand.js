import React from 'react';
import './brand.css'
import {Animated} from "react-animated-css";
const brand = () => {
    return ( 
    <div className="brand-container">
     <Animated animationIn="bounce" >
        <h1 className="Diana-carrillo align-middle" >Diana Carrillo</h1>
        </Animated>  
      <Animated animationIn="bounceInLeft" >
        <p className="pink" >Front-end developer</p>
        </Animated>  
        
    </div>
    )
}

export default brand;