import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import foodmapimg from './images/foodmap-responsive.jpeg'
import registroimg from './images/registro-visitantes.jpeg'
import greenerimg from './images/greener.jpeg'
import { Badge } from 'reactstrap'
import { Button } from 'reactstrap'




const projects = () => {
    return ( 
    <div className=" col-12-lg-md-sm-xl" id="projects">
        <h3 className="projects-header">Projects</h3>
        <img className="project-links" src={foodmapimg} width="100" />
        <Badge target="_blank" color="primary" size="sm" href="https://dianacarrillo.github.io/cdmx-2018-06-bc-core-pm-foodmap/src/views/view1.html" >Demo</Badge>
        <Badge target="_blank" color="secondary" size="sm" href="https://github.com/DianaCarrillo/cdmx-2018-06-bc-core-pm-foodmap/tree/master" >Code</Badge>
        <img className="project-links" src={registroimg} width="300"/>
        <Badge target="_blank" color="primary" size="sm" href="https://dianacarrillo.github.io/cdmx-2018-06-am-bc-registro-de-visitantes/src/" >Demo</Badge>      
        <Badge target="_blank" color="secondary" size="sm" href="https://github.com/DianaCarrillo/cdmx-2018-06-am-bc-registro-de-visitantes">Code</Badge>
        <img className="project-links" src={greenerimg} width="300"/>
        <Badge target="_blank" color="primary" size="sm" href="https://dianacarrillo.github.io/cdmx-social-network-frameworks/" >Demo</Badge>        
        <Badge target="_blank" color="secondary" size="sm" href="https://github.com/DianaCarrillo/cdmx-social-network-frameworks/tree/master">Code</Badge>
    </div>
    )
}

export default projects;