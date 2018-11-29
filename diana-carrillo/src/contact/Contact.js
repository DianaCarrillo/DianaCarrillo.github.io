import React from 'react'
import './contact.css'
import {Container} from 'reactstrap'

const Contact = () => {
return(
    
    <footer id="contact" className="contact-container">
    <Container>
       <a href="mailto:carrillorivera.diana@gmail.com" rel="noopener noreferrer"><i className="fas fa-envelope contact-i fa-2x"></i></a> 
       <a href="https://github.com/DianaCarrillo" target ="_blank" rel="noopener noreferrer"><i className="fab fa-github contact-i fa-2x" ></i></a> 
       <a href="https://www.linkedin.com/in/diana-carrillo-rivera/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in contact-i fa-2x"></i></a>
       <a href="https://twitter.com/DianaSashimi" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter contact-i fa-2x"></i></a>
       </Container>

    </footer>

)
}
export default Contact