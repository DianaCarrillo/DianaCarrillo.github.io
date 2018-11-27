import React from 'react'
import './skills.css'
import { Container } from 'reactstrap'

const Skills = () => {
return(
     <Container >   
    <h3 className="tech-skills">Tech skills</h3>
    <div>
        <ul className="skills-list">
        <li className="soft-skill">
            <i className="fab fa-react fa-5x icons-work" ></i>
            <span className="span-p">React</span>
        </li>
        <li className="soft-skill">
            <i className="fab fa-js fa-5x icons-work"></i>
            <span className="span-p">JavaScript</span>
        </li>
        <li className="soft-skill">
            <i className="fab fa-html5 fa-5x icons-work"></i>
            <span className="span-p">HTML5</span>
        </li>
        <li className="soft-skill">
            <i className="fab fa-css3-alt fa-5x icons-work"></i>
            <span className="span-p">CSS3</span>
        </li>
        <li className="soft-skill">
            <i className="fab fa-github fa-5x icons-work"></i>
            <span className="span-p">Github</span>
        </li>
        <li className="soft-skill">
            <i className="fab fa-node-js fa-5x icons-work"></i>
            <span className="span-p">NodeJS</span>
        </li>
    </ul>

  </div>
    <div>
        <h3 className="skills">Soft skills</h3>
    </div>
    <ul className="skills-list">
        <li className="soft-skill">
            <i className="fas fa-users fa-4x"></i>
            <span className="span-p">Team work</span>
        </li>
        <li className="soft-skill ">
            <i className="fas fa-tasks fa-4x"></i>
            <span className="span-p">Agile</span>
        </li>
        <li className="soft-skill ">
            <i className="fas fa-microphone-alt fa-4x"></i>
            <span className="span-p">Word facility</span>
        </li>
        <li className="soft-skill ">
            <i className="fas fa-chalkboard-teacher fa-4x"></i>
            <span className="span-p">Autodidactism</span>
        </li>
        <li className="soft-skill ">
            <i className="fas fa-palette fa-4x"></i>
            <span className="span-p">Creativity</span>
        </li>
    
    </ul>
 
    </Container> 
)
}
export default Skills

