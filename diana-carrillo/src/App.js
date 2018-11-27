import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar/Navbar'
import Brand from './brand/Brand'
import About from './about/About'
import Projects from './projects/Projects'
import Skills from './skills/Skills'
import Navbarb from './navbar/NavbarBottom'
import Contact from './contact/Contact'
// import { faReact } from '@fortawesome/free-solid-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <section className="container sections">
          <Brand />
        </section>
        <section className=" wine-color sections">
          <About />
        </section>
        <section className="sections"id="skills">
          <Skills />
        </section>
        <section className="sections" id="projects">
          <Projects />
        </section>
        <Navbarb/>
        <Contact />
      </div>
    );
  }
}

export default App;
// library.add(faReact)
