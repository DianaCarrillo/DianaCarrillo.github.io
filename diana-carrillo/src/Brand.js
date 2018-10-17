import React from 'react';
import photo from './images/diana-foto.jpeg'
import { Container, Row, Col } from 'reactstrap';

const brand = () => {
    return ( 
    <div className="brand-container col-12-lg-md-sm-xl">
        <h1 className="Diana-carrillo align-middle">Diana Carrillo</h1>
        <img className="photo" src={photo} width='250' alt ="diana-carrillo"/> 
    </div>
    )
}

export default brand;