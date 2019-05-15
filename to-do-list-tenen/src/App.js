import React, { Component } from "react";
import "./App.css";
import Todos from "./components/todos";

class App extends Component {
  state = [
    { id: 1, title: "My task 1", completed: false },
    { id: 2, title: "My task 2", completed: false },
    { id: 3, title: "My task 3", completed: false }
  ];
  render() {
    return this.state.map(todo => {
      console.log(todo);
      return <Todos tasksDetails={todo} />;
    });
  }
}

export default App;
