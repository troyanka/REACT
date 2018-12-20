import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'My App'
  }

  changeName = (newName) =>{
    this.setState({name: newName});
  }

  chnageNameFromInput = (event) =>{
    let name = event.target.value;
    this.setState({name});
  }

  render() {
    return (
      <div className="App">
        <br/>
        <button onClick={() => this.changeName('Vik Vik')}>Change the state using Anon Function</button>
        <button onClick={this.changeName.bind(this, 'Vik Vik2')}>Change the state using Bind (Better way)</button>
        <br/><br/>
        <label htmlFor="inputValue">Type Your Value:</label>
        <input type="text" value={this.state.name} id="inputValue" onChange={this.chnageNameFromInput}></input>
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
