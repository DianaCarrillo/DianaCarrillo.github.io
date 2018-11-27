import React from 'react';
import './navbar.css'

const navbarb = ()=>{
return(
    <nav className="navbott">
        <a href="#about-me" className="active link-icon">
            <i className="far fa-user-circle fa-2x icons"></i>
        </a>
        <a href="#skills" className="link-icon">
            <i className="fas fa-wrench fa-2x icons"></i>
        </a>
        <a href="#projects"className="link-icon">
            <i className="fas fa-code fa-2x icons"></i>
        </a>
        <a href="#contact"className="link-icon">
            <i className="fas fa-at fa-2x icons"></i>
        </a>
    </nav>
)
}

export default navbarb