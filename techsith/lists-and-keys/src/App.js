import React, { Component } from 'react';
import User from './components/user';
import './App.css';
import uniqueId from 'react-html-id';

class App extends Component {
  
  constructor(){
    super();

    //uniqueId.enableUniqueIds(this);

    this.state = {
      users:[
        {id: 1, name: "John", age: 20},
        {id: 2, name: "Jill", age: 30},
        {id: 3, name: "Peter", age: 25}
      ]
    }
  }

  deleteUser = (index, e) =>{
    //const users = Object.assign([], this.state.users);
    const users = [...this.state.users];
    users.splice(index, 1);
    this.setState({users});
  }

  changeUserName = (id, e) => {
    //const users = Object.assign([], this.state.users);
    const users = [...this.state.users];
    let userIndex =  users.find( user => user.id === id);
    userIndex.name = e.target.value;
    this.setState({users});
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map( (user, index) => 
               <User key={user.id} 
                     age={user.age} 
                     delEvent={this.deleteUser.bind(this, index)} 
                     changeEvent={this.changeUserName.bind(this, user.id)}>
                     {user.name}</User>
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
