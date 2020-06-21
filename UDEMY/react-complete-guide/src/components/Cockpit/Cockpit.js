import React, { Fragment } from 'react';
import classes from './Cockpit.css';


const Cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = '';


    if(props.showPersons){
        btnClass = classes.red;
    }


    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }




    return (  
        <div className={classes.Cockpit}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}> This is really working </p>
        <button className={btnClass} onClick = {props.toggled}> Toggle Persons </button> 
          </div>
          );
}
 
export default Cockpit;