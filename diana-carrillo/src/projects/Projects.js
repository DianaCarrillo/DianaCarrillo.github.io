import React from 'react';
import greener from '../images/greener.jpeg'
import foodmap from '../images/foodmap-desktop.jpeg'
import registro from '../images/registro-visitantes.jpeg'
import { Button,  Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Container } from 'reactstrap'
import './projects.css'

const projects = () => {
    return ( 
    <Container >
        <h3 className="projects-header">Projects</h3>

    <CardDeck>
        
      <Card>
        <CardImg top width="100%" src={greener} alt="Card image cap" />
        <CardBody>
          <CardTitle>Greener</CardTitle>
          <CardText>Social network about health and nutrition developed with React and Firebase backend-as -a -service.</CardText>
          <Button  className="demo-links"target="_blank" color="primary" size="sm" href="https://dianacarrillo.github.io/cdmx-social-network-frameworks/" >Demo</Button>        
          <Button  className="code-links"target="_blank" color="secondary" size="sm" href="https://github.com/DianaCarrillo/cdmx-social-network-frameworks/tree/master">Code</Button>
          
          

        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={foodmap} alt="Card image cap" />
        <CardBody>
          <CardTitle>Foodmap</CardTitle>
          <CardText>Restaurant  searcher  consuming Google Maps API . Developed with vanilla JS.</CardText>
          <Button className="demo-links" target="_blank" color="primary" size="sm" href="https://dianacarrillo.github.io/cdmx-2018-06-bc-core-pm-foodmap/src/">Demo</Button>
          <Button className="code-links"target="_blank" color="secondary" size="sm"  href="https://github.com/DianaCarrillo/cdmx-2018-06-bc-core-pm-foodmap">Code </Button>   

        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={registro} alt="Card image cap" />
        <CardBody>
          <CardTitle>Registro de visitantes</CardTitle>
          <CardSubtitle>(Visitor register)</CardSubtitle>
          <CardText>Digital visitor management for the co-working 'Terminal 1'.  Developed with  vanilla JS , Cloud Firestore and Formspree.</CardText>
          <Button className="demo-links" target="_blank" color="primary" size="sm" href="https://dianacarrillo.github.io/cdmx-2018-06-am-bc-registro-de-visitantes/src">Demo</Button>      
          <Button className="code-links" target="_blank" color="secondary" size="sm" href="https://github.com/DianaCarrillo/cdmx-2018-06-am-bc-registro-de-visitantes" >Code</Button>          

        </CardBody>
      </Card>
    </CardDeck>
   </Container> 

    )
}

export default projects;