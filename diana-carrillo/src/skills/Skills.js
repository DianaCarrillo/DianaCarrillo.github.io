import React from 'react'
import './skills.css'
import { Container } from 'reactstrap'
import { Card, CardTitle, CardDeck, CardBody } from 'reactstrap';
   
   

const Skills = () => {
return(
    <Container >  
    <h3 className="tech-skills">Skills</h3>

        <CardDeck >
          <Card className="card-style">
            <CardBody >
              <CardTitle> Tech</CardTitle>
                <div>
                    <ul className="skills-list">
                        <li className="soft-skill">
                            <span className="span-p">React</span>
                        </li>
                        <li className="soft-skill">
                            <span className="span-p">JavaScript</span>
                        </li>
                        <li className="soft-skill">
                            <span className="span-p">HTML5</span>
                        </li>
                        <li className="soft-skill">
                            <span className="span-p">CSS3</span>
                        </li>
                        <li className="soft-skill">
                            <span className="span-p">Firebase</span>
                        </li>
                        <li className="soft-skill">
                            <span className="span-p">NodeJS</span>
                        </li>
                   </ul>

                </div>
              </CardBody>
          </Card>

          <Card className="card-style">
            <CardBody>
              <CardTitle>Soft</CardTitle>
                  <div>
                        <ul className="skills-list">
                            <li className="soft-skill">
                                <span className="span-p">Team work</span>
                            </li>
                            <li className="soft-skill ">
                                <span className="span-p">Agile</span>
                            </li>
                            <li className="soft-skill ">
                                <span className="span-p">Word facility</span>
                            </li>
                            <li className="soft-skill ">
                                <span className="span-p">Autodidactism</span>
                            </li>
                            <li className="soft-skill ">
                                <span className="span-p">Creativity</span>
                            </li>
                        
                        </ul>
                   </div>   
            </CardBody>
          </Card>
        
        </CardDeck>
    
 
    </Container> 
)
}
export default Skills

