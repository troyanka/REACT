import React, { Component } from 'react';
import './App.css';
//import Radium, {StyleRoot} from 'radium';
// import styled from 'styled-components';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

class app extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constractor');
  }

  state = {
    persons: [
      {
        id: 1,
        name: 'Max',
        age: 28,
      },
      {
        id: 2,
        name: 'Manu',
        age: 29,
      },
      {
        id: 3,
        name: 'Stephany',
        age: 26,
      },
    ],
    otherState: 'some another value',
    showPersons: true,
    showCocpit: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    //what is compared here is the pointer of the arrays
    if (nextProps.persons !== this.props.persons) {
      return false;
    } else {
      return true;
    }
    //return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[App.js] componentDidUpdate');
  }

  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({
      showPersons: !show,
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === id
    );
    const person = {
      ...this.state.persons[personIndex],
    };
    //const person = Object.assign({}, this.state.persons[personIndex]); //different approach
    person.name = event.target.value;

    let persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({
      persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    // updating state immutably
    // const persons = this.state.persons; //creates pointer to the original one
    // const persons = this.state.persons.splice(); //copying the array
    const persons = [...this.state.persons]; //spread the array - ES6 approach
    persons.splice(personIndex, 1);
    this.setState({
      persons,
    });
  };

  render() {
    console.log('[App js] render');

    let persons = null;
    let btnClasses = [classes.button];

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          cliked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.app}>
        <button
          onClick={() => {
            this.setState({ showCocpit: false });
          }}
        >
          Remove cocpit
        </button>

        {this.state.showCocpit ? (
          <Cockpit
            title={this.props.title}
            personsLength={this.props.personsLength}
            showPersons={this.state.showPersons}
            toggled={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </div>
    );
  }
}

export default app;
