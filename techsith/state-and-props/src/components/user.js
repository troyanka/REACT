import React from 'react';

// Stateless component
const User = (props) =>{
     return <div>Name: {props.children} | Age: {props.age}</div>
}

export default User;