import React, { Component } from 'react';
import './App.css';

class Child extends Component {
  constructor(){
    super();
    console.log('child contractor');
  }

  componentWillMount(){
    console.log('child componentWillMount');
  }

  componentWillReceiveProps(){
    console.log("child componentWillReceiveProps");
  }

  componentDidMount(){
    console.log('child componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("child shouldComponentUpdate = true");
    return true;
  }

  componentWillUpdate(){
    console.log("child componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("child prevProps", prevProps);
    console.log("child prevState", prevState);
    console.log("child componentDidUpdate");
   }

   componentWillUnmount(){
    console.log("child componentWillUnmount");
  }

  render() {
    console.log('child rendered');
    return (
      <div className="App">
      Child name: {this.props.name}
      </div>
    );
  }
}

export default Child;
