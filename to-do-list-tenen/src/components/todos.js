import React, { Component } from "react";

const Todos = props => {
  const { title, completed, id } = props.tasksDetails;
  const { handleEvent } = props;
  const styleCompleted = {
    textDecoration: "line-through"
  };
  // console.log(style);
  return (
    <div>
      <input type='checkbox' id={id} onChange={e => handleEvent(e)} />
      <span style={completed ? styleCompleted : {}}>{title}</span>
    </div>
  );
};

export default Todos;
