import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
