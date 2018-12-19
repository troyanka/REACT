import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/umd/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Countries from './components/countries';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Countries/>
      </div>
    );
  }
}

export default App;
