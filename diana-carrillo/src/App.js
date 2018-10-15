import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Brand from './Brand'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
        <Navbar />
        </header>
        <section className="container">
        <div className="row">
        <Brand />
        </div>
      </section>
      </div>
    );
  }
}

export default App;
