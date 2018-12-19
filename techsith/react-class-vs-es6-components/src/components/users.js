import React, { Component } from 'react';
import User from '../components/user'

// Class component 
//Use when we need a state
//Use when we need a wrapper element to contain other components
class Users extends Component {
    render() { 
        return (
            <div>
                <h1>{this.props.title}</h1>
                <User>John</User>
                <User age={30}></User>
                <User age={40}>David</User>
            </div>
        );
    }
}
 
export default Users;