import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// stopped: 5.20

class App extends Component {
  render() {
    return (
      
        <div className="App">
                <Route path='/' render={()=> {
                  return(<h1>test</h1>);
                }}
                ></Route>
        </div>
     
    );
  }
}

export default App;
