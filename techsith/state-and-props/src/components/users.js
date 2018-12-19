import React, { Component } from 'react';
import User from '../components/user'

class Users extends Component {
    state = {
        users : [
          {name: "John",age: 20},
          {name: "Jill",age: 30},
          {name: "Peter",age: 40}
        ],
        title : 'Users List'
      }

      handleClick = () =>{
         let {users} = this.state;
         users.map(user =>{
            console.log(user.age);
            user.age -= 10;
         });
         this.setState({users});
         console.log(users);  
      }

    render() { 
        return (
                <div>
                    <button onClick={this.handleClick}>Make Us 10 years Younger</button>
                    <br/>
                    <h1>{this.state.title}</h1>
                    <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
                    <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
                    <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
                </div>
        );
    }
}
 
export default Users;