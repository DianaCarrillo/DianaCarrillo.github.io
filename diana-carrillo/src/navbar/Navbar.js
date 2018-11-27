import React from 'react';
import './navbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="fixed-top navbar" light expand="md">
          <NavbarToggler className="toggler" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="links js-scroll-trigger"  href="#about-me">About me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="links"href="#skills">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="links" href="#projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="links" href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}