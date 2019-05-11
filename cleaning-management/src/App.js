import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import ChooseOptions from "./components/chooseOption/chooseOption";


class App extends Component {
  state = {
    userChosenOption: ""
  };

  cleaningOptions = [
    {
      id: 1,
      title: "Clean the floor",
      isChecked: true
      // imageUrl: washFloorImg
    },
    {
      id: 2,
      title: "Wash dishes",
      isChecked: false
      // imageUrl: washDishesImg
    }
  ];

  // handleChoose = cleaningOptions => {
  //   console.log(cleaningOptions);
  //   this.setState({ userChosenOption: cleaningOptions });
  // };

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
           checked={option.isChecked}/>
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
