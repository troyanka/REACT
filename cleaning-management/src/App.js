import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import ChooseOptions from "./components/chooseOption/chooseOption";

class App extends Component {
  state = {
    userChosenOption: ""
  };

  handleChoose = userChosenOption => {
    this.setState({ userChosenOption });
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <ChooseOptions handleChoose={this.handleChoose} />
        {this.state.userChosenOption && (
          <span>Chosen: {this.state.userChosenOption}</span>
        )}
      </div>
    );
  }
}

export default App;
