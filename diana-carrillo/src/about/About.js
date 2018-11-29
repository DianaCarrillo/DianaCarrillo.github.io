import React from 'react';
import { Container, Button } from 'reactstrap';
import './about.css'
import  diana  from '../images/sashimi.jpg'
import dianaCv from '../images/DianaC-CV.pdf';
const about = () => {
    return ( 
    <Container className='about-container'  id="about-me" >
        <img className="diana-foto" src={diana} width="300" alt="profile"/>
        
        <h3 className="about-me col-lg-5 offset-lg-7">About me</h3>
        <p className="col-lg-5 offset-lg-7 about-parragraph">Hi! My journey as a front-end developer has just started and I couldn't be happier about where it has taken me. I learned to code in a place called Laboratoria, and I also have a Bachelor's Degree in Psychology. </p>
        <p className="col-lg-5 offset-lg-7 about-parragraph">I always like to maintain healthy relationships in my work environments creating strategies to solve problems and positively analyzing my and my co-workers labor performance.</p> 
        <p className="col-lg-5 offset-lg-7 about-parragraph">What I love the most about being a developer is showing off my creativity, being able to materialize ideas and sharing my knowledge.</p> 
        <p className="col-lg-5 offset-lg-7 about-parragraph">My favorite cartoon is Steven Universe and my music taste goes from Los Ángeles Azules to Radiohead, but right now my favorite band is Glass Animals. I love mexican and japanese food; my favorite dish are enchiladas de mole and my best friends call me Sashimi. </p>         
        <a className="col-lg-4 offset-lg-7 " href={dianaCv} download><Button className="cv-button">Download my CV</Button></a>        
    </Container>
    )
}

export default about;

