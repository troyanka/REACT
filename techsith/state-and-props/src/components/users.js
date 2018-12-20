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
         users.map(user => user.age -= 10 );
         //SetStae is asyncronios process
         this.setState({users}); 
      }

    render() { 
        return (
                <div>
                    <button onClick={this.handleClick}>Make Us 10 years Younger</button>
                    <br/>
                    <h1>{this.state.title}</h1>
                    {
                        this.state.users.map((user, index)=>{
                            return <User key={index} age={user.age}>{user.name}</User>
                        })
                    }
                </div>
        );
    }
}
 
export default Users;