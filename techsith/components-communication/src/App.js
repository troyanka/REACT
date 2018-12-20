import React, { Component } from 'react';
import Parent from './components/parent';
import './App.css';

class App extends Component {
  state = {
    title : "Any Title"
  }

  changeTheWord = (newTitle) =>{
     this.setState({ title : newTitle });
  }


  render() {
    return (
      <div className="App">
        <Parent changeTheWordEvent={this.changeTheWord.bind(this, 'new word')} keepTheWordSameEvent={this.changeTheWord.bind(this, 'same word')} title={this.state.title}/>
      </div>
    );
  }
}

export default App;
