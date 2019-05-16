import React, { Component } from "react";
import Todos from "../todos";

class ToDoList extends Component {
  state = [
    { id: 1, title: "My task 1", completed: false },
    { id: 2, title: "My task 2", completed: true },
    { id: 3, title: "My task 3", completed: false }
  ];

  handleClick = e => {
    console.log(e.target.id);
  };

  render() {
    return this.state.map(todo => {
      return (
        <Todos
          key={todo.id}
          tasksDetails={todo}
          handleEvent={this.handleClick}
        />
      );
    });
  }
}

export default ToDoList;
