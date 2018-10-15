import React from 'react';
import photo from './images/diana-foto.jpeg'
import { Container, Row, Col } from 'reactstrap';

const brand = () => {
    return ( 
    <div className="brand-container col-12-lg-md-sm-xl">
        <Col>    
        <h1 className="Diana-carrillo">Diana Carrillo</h1>
        </Col>          
        <img className="photo" src={photo} width='250' alt ="diana-carrillo"/> 
    </div>
    )
}

export default brand;