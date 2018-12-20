import React, { Component, Fragment } from 'react';
import './App.css';

//Use fragments to group elements
const Temp = (props) => {
  return (
    <Fragment>
      {
        props.greeting === 'hi' 
        ? <Fragment>&lt;div&gt;{props.greeting}&lt;/div&gt;</Fragment>
        : PaymentResponse.greeting
      }
    </Fragment>
  )
};

//Second way (Less convinient)
// In this case we have to give unique keys to each element
const Temp2 = () => {
  return (
    [
      <div key="1">Hello2</div>,
      <div key="2">Hi2</div>
    ]
  )
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Temp greeting="hi"/>
        <Temp2/>
      </div>
    );
  }
}

export default App;
