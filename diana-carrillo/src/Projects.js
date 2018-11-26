import React from 'react';
import { Badge, Container, Row } from 'reactstrap'

const projects = () => {
    return ( 
    <div id="projects">
        <Container>   
        <h3 className="projects-header">Projects</h3>
        <Row>
        <p>foodmap</p>
        <Badge className="demo" target="_blank" color="primary"  href="https://dianacarrillo.github.io/cdmx-2018-06-bc-core-pm-foodmap/src/views/view1.html" >Demo</Badge>
        <Badge className="code"target="_blank" color="secondary" size="sm" href="https://github.com/DianaCarrillo/cdmx-2018-06-bc-core-pm-foodmap/tree/master" >Code</Badge>   
       
        <p>Registro de visitantes</p>
        <Badge className="demo" target="_blank" color="primary" size="sm" href="https://dianacarrillo.github.io/cdmx-2018-06-am-bc-registro-de-visitantes/src/" >Demo</Badge>      
        <Badge className="code" target="_blank" color="secondary" size="sm" href="https://github.com/DianaCarrillo/cdmx-2018-06-am-bc-registro-de-visitantes">Code</Badge>
    
        <p>Greener</p>
        <Badge  className="demo"target="_blank" color="primary" size="sm" href="https://dianacarrillo.github.io/cdmx-social-network-frameworks/" >Demo</Badge>        
        <Badge  className="code"target="_blank" color="secondary" size="sm" href="https://github.com/DianaCarrillo/cdmx-social-network-frameworks/tree/master">Code</Badge>
        </Row>
   
   </Container>
      
   </div> 

    )
}

export default projects;