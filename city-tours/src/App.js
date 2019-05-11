import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import TourList from "./components/tourList";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}

export default App;
