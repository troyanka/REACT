import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {

state = {
  username: 'username'
};

handleChange (event){
  this.setState({
    username: event.target.value
  })
}

  render() {
    return (
      <div className="App">

        <UserInput change={this.handleChange.bind(this)} usename={this.state.username}/>
        <UserOutput username={this.state.username}/>

        <ol>
          <li>v Create TWO new components: UserInput and UserOutput</li>
          <li>v UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>v Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>v Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>v Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>v Add a method to manipulate the state (=> an event-handler method)</li>
          <li>v Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>v Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>v Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
      </div>
    );
  }
}

export default App;
