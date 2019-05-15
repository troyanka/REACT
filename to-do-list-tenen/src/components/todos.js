import React, { Component } from "react";

const Todos = props => {
  const { title } = props.tasksDetails;
  return <h3>{title}</h3>;
};

export default Todos;
