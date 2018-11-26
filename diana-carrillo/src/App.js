import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Brand from './Brand'
import About from './About'
import Projects from './Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <section className="container">
          <Brand />
        </section>
        <section className=" wine-color sections">
          <About />
        </section>
        <section className="">
          <Projects />
        </section>
      </div>
    );
  }
}

export default App;
