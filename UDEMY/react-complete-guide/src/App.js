import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hi hkjh</h1>
        <Person name='Vika1' age='29' />
        <Person name='Linda' age='3' />
        <Person name='Boris' age='32' />
        <Person name='Michelle' age='2' />
      </div>
    );
  }
}

export default App;
