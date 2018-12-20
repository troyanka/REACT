import React from 'react';

//Stateless component
const User = (props) => {
    return(
        <li>
            <span>Name: {props.children}</span>
            <span>Age: {props.age}</span>
            <input type="text" onChange={props.changeEvent} value={props.children}></input>
            <button onClick={props.delEvent}>Delete</button>
        </li>
    )
}

export default User;