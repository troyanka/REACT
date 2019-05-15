import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import ChooseOptions from "./components/chooseOption/chooseOption";
import washFloorImg from "./images/clean-floor.jpg";


class App extends Component {
  state = {
    userChosenOption: ""
  };

  cleaningOptions = [
    {
      id: 1,
      title: "Clean the floor",
      imageUrl: washFloorImg
    }
    // {
    //   id: 2,
    //   title: "Wash dishes"
    // },
    // {
    //   id: 3,
    //   title: "Clean windows"
    // }
  ];

  handleChoose = e => {
    console.log("cleaningOptions", e.target.value);
    this.setState({ userChosenOption: e.target.value });
  };

  render() {
    return (
      <div className='App'>
     
        <Navbar />
        <form>
        {this.cleaningOptions.map(option => 
           <ChooseOptions key={option.id}
           handleChoose={this.handleChoose}
           id={option.id}
           title={option.title}
           isChecked={option.isChecked}
           image={option.imageUrl}/>
        )}
       </form>
        
        
        {this.state.userChosenOption && (
          <span>Chosen: {this.state.userChosenOption}</span>
        )}
      </div>
    );
  }
}

export default App;
