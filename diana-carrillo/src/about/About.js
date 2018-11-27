import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import './about.css'
import  diana  from '../images/sashimi.jpg'
import dianaCv from '../images/DianaC-CV.pdf';
const about = () => {
    return ( 
    <div className="about-container" id="about-me">
    <Container >
        <img className="diana-foto" src={diana} width="300"/>
        <h3 className="about-me col-lg-5 offset-lg-7">About me</h3>
        <p className="col-lg-5 offset-lg-7 about-parragraph">Hi! My journey as a front-end developer has just started and I couldn't be happier about where it has taken me. Having studied Psychology at UAM-X in Mexico City, I always like to maintain healthy relationships in my work environments, creating strategies to solve problems and positively analyzing my and my co-workers labor performance. </p>
        <p className="col-lg-5 offset-lg-7 about-parragraph">What I love the most about being a developer is showing off my creativity, being able to materialize ideas and shering my knowledge.</p> 
        <p className="col-lg-5 offset-lg-7 about-parragraph"></p> 
        <a className="col-lg-4 offset-lg-7 " href={dianaCv} download><Button className="cv-button">Download my CV</Button></a>        
    </Container>
    </div>
    )
}

export default about;