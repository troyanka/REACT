import React, {
  Component
} from "react";
import "./App.css";
//import Radium, {StyleRoot} from 'radium';
// import styled from 'styled-components';
import Person from "./Person/Person";
import classes from './App.css';

class app extends Component {
  state = {
    persons: [{
        id: 1,
        name: 'Max',
        age: 28
      },
      {
        id: 2,
        name: 'Manu',
        age: 29
      },
      {
        id: 3,
        name: 'Stephany',
        age: 26
      }
    ],
    otherState: 'some another value',
    showPersons: true
  }


  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({
      showPersons: !show
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.persons[personIndex]); //different approach
    person.name = event.target.value;

    let persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({
      persons
    })
  }


  deletePersonHandler = (personIndex) => {
    // updating state immutably
    // const persons = this.state.persons; //creates pointer to the original one
    // const persons = this.state.persons.splice(); //copying the array 
    const persons = [...this.state.persons]; //spread the array - ES6 approach
    persons.splice(personIndex, 1);
    this.setState({
      persons
    })
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',  
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',


    //   // To use it we have to add Radium
    // //   ':hover': {
    // //  backgroundColor: "lightcoral",
    // //  color: 'black'
    // //   }
    // };

    let persons = null;
    let btnClasses = [classes.button]

    if (this.state.showPersons) {
      persons = ( this.state.persons.map((person, index) =>{
        return (
          <div>
          <Person key={person.id}
            name={ person.name}
            age={person.age }
            changed={event => this.nameChangedHandler(event, person.id)}
            click={() => this.deletePersonHandler(index)}/>
            </div>
          )
        }
      )
         )

        // style.backgroundColor = 'red';      
      }


      btnClasses.push(classes.red)

      let assignedClasses = [];
      if (this.state.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
      }
      if (this.state.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
      }




      return (


        <div className={classes.app}>
        <p className={assignedClasses.join(' ')}> This is really working </p> {
          /* <StyledButton  alt={this.state.showPersons} onClick={this.togglePersonsHandler} >Toggle Persons</StyledButton> */ }
          <button className={btnClasses.join(' ')} onClick = {this.togglePersonsHandler}> Toggle Persons </button>


        {
          persons
        }

        </div>

      );
    }
  }

  export default app;
  // export default Radium(app);