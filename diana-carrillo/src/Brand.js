import React from 'react';
import photo from './images/diana-foto.jpeg'

const brand = () => {
    return ( 
    <div className="brand-container container-fluid col-12-lg-md-sm-xl">
      <div className="row">    
        <h1 className="Diana-carrillo">Diana Carrillo</h1>
      </div>
     
        <img className="photo" src={photo} width='250' alt ="diana-carrillo"/> 
    
    </div>
    )
}

export default brand;