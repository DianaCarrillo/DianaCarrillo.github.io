import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Brand from './Brand'
import About from './About'
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <section className="container">
          <Row>
             <Brand />
          </Row>
      </section>
      <section className=" wine-color sections">
          <About />
      
      </section>
      </div>
    );
  }
}

export default App;
