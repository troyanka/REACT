// functional component because there wont be state here
import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[Persons.js] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    const { persons, clicked, changed } = this.props;
    return persons.map((person, index) => {
      // console.log('[Persons.js] rendering')

      return (
        <div>
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            changed={(event) => changed(event, person.id)}
            click={() => clicked(index)}
          />
        </div>
      );
    });
  }
}

export default Persons;
